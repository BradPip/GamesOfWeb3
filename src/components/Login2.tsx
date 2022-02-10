import connectors from "./connectors";
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { useWeb3React } from "@web3-react/core";
import { Button } from "@chakra-ui/react";

export default function Login2(){

    const {active, account, activate, deactivate} = useWeb3React()

    function createConnectHandler(connectorId:any) {
        return async () => {
          try {
            const connector = connectors[connectorId];
    
            if ( connector instanceof WalletConnectConnector &&connector.walletConnectProvider?.wc?.uri) {
              connector.walletConnectProvider = undefined;
            }
    
            await activate(connector);
            const account = await connector.getAccount();
            console.log(account)
            // setUserDomain(connector.uauth.store.storage["uauth-default-username"]);
            // const NFTs = await moralisConnector.moralisStartAndGetNFTs(account);
    
            // const NftArray = NFTs.result;
            // for (let i = 0; i < NftArray.length; i++) {
            //   console.log(
            //     "Address = " +
            //       NftArray[i].token_address +
            //       typeof NftArray[i].token_address
            //   );
            //   if (NftArray[i].token_address === addressOfCommunityNFT) {
            //     setCommunityMemberStatus(true);
            //   }
    
              // const metaDataJson = JSON.parse(NftArray[i].metadata);
              // console.log(metaDataJson);
            // }
          } catch (error) {
            console.error(error);
          }
        };
      }
      return (
        <>
            {Object.keys(connectors).map(v => (
                <Button key={v} onClick={createConnectHandler(v)}>
                    Connect to {v}
                </Button>
            ))}

        </>
    );

}