import { ReactNode } from 'react';
import { Box, useColorModeValue, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';
import MobileNav from './MobileNav';
import SidebarContent from './SidebarContent';


export default function Nav({ children }: { children: ReactNode }) {

  	const { isOpen, onOpen, onClose } = useDisclosure();

  	return (

    <Box minH="100vh" bg={useColorModeValue('purple.100', 'gray.900')}>
		<SidebarContent
			onClose={() => onClose}
			display={{ base: 'none', md: 'block' }}
		/>
		<Drawer
			autoFocus={false}
			isOpen={isOpen}
			placement="left"
			onClose={onClose}
			returnFocusOnClose={false}
			onOverlayClick={onClose}
			size="full">
			<DrawerContent>
				<SidebarContent onClose={onClose} />
			</DrawerContent>
		</Drawer>
      {/* mobilenav */}
		<MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
		<Box ml={{ base: 0, md: 60 }} p="4">
			{children}
		</Box>
    </Box>
  );
}
