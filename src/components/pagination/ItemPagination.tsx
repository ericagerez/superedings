
import { ChakraProvider, Button } from "@chakra-ui/react";
import styles from './button.module.css';

const ItemPagination = (props: any) => {
    return (
      <ChakraProvider>
        <Button
          variant={props.isActive ? "solid" : "outline"}
          //colorScheme={props.isActive ? "pink" : "purple"}
          isDisabled={props.isDisabled}
          onClick={props.onClick}
          className={props.isActive ? styles.activeButton : styles.notActiveButton}
        >
          {props.children}
        </Button>
      </ChakraProvider>
    );
};

export default ItemPagination;