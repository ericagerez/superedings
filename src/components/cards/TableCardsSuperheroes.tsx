import * as React from 'react';
import SuperHeroeCard from './SuperHeroeCard';
import { SimpleGrid, Box } from "@chakra-ui/react"

const TableCardsSuperheroes = (props: any) => {

    const { listSuperheroes: listSuperheroes,  details: details } = props;

    return(
        <SimpleGrid columns={[2, null, 3]} spacing="40px">
        {listSuperheroes[0].map((superheroe: any) => {
            return <SuperHeroeCard superheroe={superheroe} details={details} />
        })}
        </SimpleGrid>
    )
}

export default  TableCardsSuperheroes;