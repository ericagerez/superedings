import { Flex, Icon, Link, FlexProps,} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import styles from '../styles/theme.module.css';

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
    url: string;
  }
  
  const NavItem = ({ icon, children, url, ...rest }: NavItemProps) => {
    return (
      <Link href={url} style={{ textDecoration: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'purple.100',
            color: 'black',
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'black',
              }}
              as={icon}
              className={styles.hoverWhiteColor}
            />
          )}
          {children}
        </Flex>
      </Link>
    );
  };

  export default NavItem;