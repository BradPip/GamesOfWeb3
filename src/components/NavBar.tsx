import { ReactNode, FunctionComponent, MouseEventHandler } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';




const Links = ['My Games', 'Projects', 'Team'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function Simple({ onClickMyGames, onClickAllGames, onClickSubmitGames, onClickSignOut, onClickSignIn, username}: { onClickMyGames: Function, onClickAllGames: Function, onClickSubmitGames:Function, onClickSignOut: Function, onClickSignIn?: Function ,username:string}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.900', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>GOW3</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.700', 'gray.700'),
                }}
                href={'#'}
                onClick={()=> onClickMyGames()}
                color={"orange.600"}
              >My Games
              </Link>
              <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.700', 'gray.700'),
                }}
                href={'#'}
                onClick={()=> onClickAllGames()}
                color={"orange.600"}
              >Browse
              </Link>

              <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.700', 'gray.700'),
                }}
                href={'#'}
                onClick={()=> onClickSubmitGames()}
                color={"orange.600"}
              >Submit Games
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.700', 'gray.700'),
                }}
                bg='gray.900'
                cursor={'pointer'}
                minW={0}>
                <Text color={"orange.600"}>{username} </Text>
              </MenuButton>
              <MenuList>
                <MenuItem color={"orange.600"} onClick={()=>onClickSignOut()}>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}

