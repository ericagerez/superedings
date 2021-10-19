import { Flex, Icon, Link, FlexProps,} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { ReactText } from 'react';

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
            bg: 'brand.100',
            color: 'white',
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    );
  };

  export default NavItem;