import { Box, Button, ChakraProvider, DarkMode,Text } from '@chakra-ui/react'
import {useWeb3React} from '@web3-react/core'
import {WalletConnectConnector} from '@web3-react/walletconnect-connector'
import React, { useState } from 'react'
import AllGames from './components/AllGames'
import Home from './components/Home'
import MyGames from './components/MyGames'
import Simple from './components/NavBar'
import Submit from './components/Submit'
import connectors from './connectors'
import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import NavBarNotActive from './components/NavBarNotActive'
import { UAuthConnector } from '@uauth/web3-react'

const App: React.FC = () => {

  const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
    
  }
  
  const theme = extendTheme({ semanticTokens: {
    colors: {
      _white: '#f00',
      _gray: {
        50: '#ff0',},
      text: {
        default: 'yellow.400',
        _dark: 'yellow.400',
        _light: 'yellow.400',
      },
    },
  },
  config,
})





const theme2 = extendTheme({
  // config, // //
  styles: {
    global: (props:any) => ({
      body: {
        bg: 'gray.800', //
      }
    })
  },
})


  type Page = "home" | "mygames" | "allgames" | "submitgames";

  const [page, setPage] = useState('home' as Page);

  function changePage(p: Page) {
    setPage(p);
  }


  function displayPage(p: Page) {
    switch (p) {
      case "mygames":
        return (<MyGames page={p} user={user} />);

        break;
      case "allgames":
        return (<AllGames page={p} user={user}/>);

        break;
      case "submitgames":
        return (<Submit page={p} />);

        break;
      default:
        return (<Home onClickSignIn={createConnectHandler('uauth')}  />);

    }
  }
  
  
  const {active, account, activate, deactivate} = useWeb3React()

  const [justLogged, setJustLogged] = useState(false);
  const [user, setUser] = useState("");


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
        setJustLogged(true);
        setUser((connector as any).uauth.store.storage["uauth-default-username"]);
      } catch (error) {
        console.error(error)
      }
    }
  }

  async function handleDisconnect() {
    try {
      deactivate()
      changePage("home");
    } catch (error) {
      console.error(error)
    }
  }





  if (active) {
    if(justLogged){
      changePage("mygames");
      setJustLogged(false);
    }
    return (
      <ChakraProvider theme={theme2}>
      <>
      <Simple onClickMyGames={() => changePage('mygames')} onClickAllGames={() => changePage("allgames")} onClickSubmitGames={() => changePage('submitgames')} onClickSignOut={()=>handleDisconnect()} username={user}/>
     <Box p={4}>
         {displayPage(page)}
      </Box>
      </>
      </ChakraProvider>
    )
  }

  return (
    <>
    <ChakraProvider theme={theme2}>
      <>
     <NavBarNotActive onClickMyGames={() => changePage('home')} onClickAllGames={() => changePage("allgames")} onClickSubmitGames={() => changePage('submitgames')} onClickSignIn= {createConnectHandler('uauth')}/>
     <Box p={4}>
         {displayPage(page)}

         
       </Box>

      
    </>
    </ChakraProvider>

    </>
  )

  return(<>
  
  </>)
}

export default App
