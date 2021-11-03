import React, { ReactNode } from 'react';
import { IconButton, Box, CloseButton, Flex, Icon, useColorModeValue, Link, Drawer, DrawerContent, Text, useDisclosure, BoxProps, FlexProps,} from '@chakra-ui/react';
import { FiHome, FiTrendingUp, FiSearch, FiStar, FiSettings, FiMenu, } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import MobileNav from './MobileNav';
import NavItem from './NavItem';
import styles from '../styles/theme.module.css';

interface LinkItemProps {
    name: string;
    icon: IconType;
    url: string;
  }

const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome, url: '/home' },
    { name: 'Trending', icon: FiTrendingUp, url: '/trending' },
    { name: 'Buscar', icon: FiSearch, url: '/search'  },
    { name: 'Favourites', icon: FiStar, url: '/favourites' },
  ];

interface SidebarProps extends BoxProps {
    onClose: () => void;
  }

  const isActiveItem = (name: string) => {
    return window.location.href.includes(name.toLowerCase());
  }
  
  const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
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
          </Box>
      );
  };

  export default SidebarContent;