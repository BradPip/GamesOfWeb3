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
    Text,
    LightMode,
    DarkMode,
    Image
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import icon from "../assets/default-icon.png";
import hoverIcon from "../assets/hover-icon.png";



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

export default function NavBarNotActive({ onClickMyGames, onClickAllGames, onClickSubmitGames, onClickSignOut, onClickSignIn }: { onClickMyGames: Function, onClickAllGames: Function, onClickSubmitGames: Function, onClickSignOut?: Function, onClickSignIn: Function }) {
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
                                onClick={() => onClickMyGames()}
                                color={"orange.600"}
                            >Home
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
                                onClick={() => onClickAllGames()}
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
                                onClick={() => onClickSubmitGames()}
                                color={"orange.600"}
                            >Submit Games
                            </Link>
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                            <Image
                            
                                onClick={()=>onClickSignIn()}
                                src={icon}
                                onMouseOver={(e)=> (e.currentTarget.src=hoverIcon)}
                                onMouseOut={(e)=> (e.currentTarget.src=icon)}
                                />
                                                       
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

