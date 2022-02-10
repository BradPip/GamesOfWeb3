import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  DarkMode,
} from '@chakra-ui/react';
import Login from './Login';

export default function Hero({onClickSignIn}:{onClickSignIn:Function}) {
  return (
    <>
      
      <Container maxW={'3xl'}>
      
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            >
            Welcome to <br />
            <Text as={'span'} color={'orange.600'}>
            Games of Web3!
            </Text>
          </Heading>
          <Text color={'gray.400'}>
            The best place to discover, explore and enjoy Web3 games. 
            You can save your favourite games, organize them in play collections, find entirely new games, or just easily jump right into any of your favourite ones!
            All from the comfort of a familiar, easy to use interface!
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              // onClick={()=>onClickSignIn()}
              colorScheme={'green'}
              bg={'orange.600'}
              rounded='xs'
              px={6}
              _hover={{
                bg: 'orange.500',
              }}>
              Get Started!
            </Button>
            {/* <Login/> */}
          </Stack>
        
        </Stack>
       
      </Container>
    
    </>
  );
}

