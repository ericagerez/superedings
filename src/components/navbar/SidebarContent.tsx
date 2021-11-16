import { Box, CloseButton, Flex, useColorModeValue, Button, Text, BoxProps,} from '@chakra-ui/react';
import { FiHome } from 'react-icons/fi';
import { MdLogin } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi'
import { IconType } from 'react-icons';
import NavItem from './NavItem';
import styles from '../styles/theme.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/loginAction';
import { useHistory } from 'react-router';

interface LinkItemProps {
    name: string;
    icon: IconType;
    url: string;
  }

const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome, url: '/home' },
  ];

interface SidebarProps extends BoxProps {
    onClose: () => void;
  }

  const isActiveItem = (name: string) => {
    return window.location.href.includes(name.toLowerCase());
  }
  
  const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {

	const dispatch = useDispatch();
	let history = useHistory();
    let {user} = useSelector((state: any) => state.loginReducer);

	const handleOnClik = () => {
		user ? dispatch(logout()) : history.push('/login');
	}

    return (
          <Box
				bg={useColorModeValue('white', 'gray.900')}
				borderRight="1px"
				borderRightColor={useColorModeValue('gray.200', 'gray.700')}
				w={{ base: 'full', md: 60 }}
				pos="fixed"
				h="full"
				{...rest}>
				<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
					<Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
						Super<span className={styles.primaryColor}>Redings</span>
					</Text>
					<CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
				</Flex>
				
				{LinkItems.map((link) => (
					<NavItem key={link.name} url={link.url} icon={link.icon} className={isActiveItem(link.name) ? styles.primaryColorBg : undefined}>
						{link.name}
					</NavItem>
				))}
				<Box p="4" mx="4" mr="4">
					<Button 
						leftIcon={user ? <BiLogOut />: <MdLogin/>}
						onClick={handleOnClik}
					>
						{user ? "Logout" : "Login"}
					</Button >
				</Box>
              
          </Box>
      );
  };

  export default SidebarContent;