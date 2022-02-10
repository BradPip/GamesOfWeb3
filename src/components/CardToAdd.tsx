import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Image
} from '@chakra-ui/react';



export default function SocialProfileSimple({ title, desc, website, img, addToList }: { website: string, img: any, title: string, desc: string, addToList: Function }) {
  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('black', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}

      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${img})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'contain'}
            src={img}
          />
        </Box>
        <Heading fontSize={'2xl'} fontFamily={'body'} color='gray.200'>
          {title}
        </Heading>

        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.200', 'gray.400')}
          px={3}
          noOfLines={3}>
          {desc}
        </Text>



        <Stack mt={8} direction={'row'} spacing={4}>
        <Link href={website}>
          <Button
            
            flex={1}
            fontSize={'sm'}
            rounded={'xs'}
            _focus={{
              bg: 'gray.300',
            }}
            bg='gray.400'
          >
           Open Game
          </Button>
          </Link>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'xs'}
            bg={'orange.500'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'orange.400',
            }}
            _focus={{
              bg: 'orange.400',
            }}
            onClick={() => addToList()}
          >
            Add
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}