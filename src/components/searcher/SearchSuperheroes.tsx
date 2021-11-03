import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { Search2Icon } from '@chakra-ui/icons'

const SearchSuperheroes = () => {
    return (
        <InputGroup >
            <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon color="purple.500" bg={"white"} />}
            />
            <Input type="tel" placeholder="Buscar superhéroe" bg={"white"}/>
        </InputGroup>
    )
}

export default SearchSuperheroes;