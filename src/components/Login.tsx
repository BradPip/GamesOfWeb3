import { Box, Button, Text } from "@chakra-ui/react";
import CardToAdd from "./CardToAdd";
import Hero from "./Hero";


import { UAuthConnector } from '@uauth/web3-react'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import type { AbstractConnector } from '@web3-react/abstract-connector'
import { useWeb3React } from '@web3-react/core';





export default function Login() {


    const injected = new InjectedConnector({ supportedChainIds: [1] })

    const walletconnect = new WalletConnectConnector({
        infuraId: process.env.REACT_APP_INFURA_ID!,
        qrcode: true,
    })

    const uauth = new UAuthConnector({
        clientID: process.env.REACT_APP_CLIENT_ID!,
        clientSecret: process.env.REACT_APP_CLIENT_SECRET!,
        redirectUri: process.env.REACT_APP_REDIRECT_URI!,
        postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI!,
        // Scope must include openid and wallet
        scope: 'openid wallet',

        // Injected and walletconnect connectors are required.
        connectors: { injected, walletconnect },
    })

    const connectors: Record<string, AbstractConnector> = {
        injected,
        walletconnect,
        uauth,
    }
    // On login button click...

    const { active, account, activate, deactivate } = useWeb3React()

    function createConnectHandler(connectorId: string) {
        return async () => {
            try {
                const connector = connectors[connectorId]

                // Taken from https://github.com/NoahZinsmeister/web3-react/issues/124#issuecomment-817631654
                if (
                    connector instanceof WalletConnectConnector &&
                    connector.walletConnectProvider?.wc?.uri
                ) {
                    connector.walletConnectProvider = undefined
                }

                await activate(connector)
            } catch (error) {
                console.error(error)
            }
        }
    }


    async function handleDisconnect() {
        try {
            deactivate()
        } catch (error) {
            console.error(error)
        }
    }

    if (active) {
        return (
            <>
                <div>Connected to {account}</div>
                <button onClick={handleDisconnect}>Disconnect</button>
            </>
        )
        }
        return (
            <>
                <Button onClick={createConnectHandler('uauth')}>
                    Connect
                </Button>

            </>
        );
    
}