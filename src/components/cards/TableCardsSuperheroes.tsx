import * as React from 'react';
import SuperHeroeCard from './SuperHeroeCard';
import { SimpleGrid, HStack, Stack } from "@chakra-ui/react";
import { Pagination } from "react-stitches-paginator";
import ItemPagination from '../../components/pagination/ItemPagination';
import SearchSuperheroes from '../searcher/SearchSuperheroes';

const TableCardsSuperheroes = (props: any) => {

    const { listSuperheroes: listSuperheroes,  details: details } = props;
    const totalPages = Math.ceil(listSuperheroes.length / 6);
    const itemsPerPage = 6;
    const [page, setPage] = React.useState(1);

    return(
        <>
            <SearchSuperheroes />
            <SimpleGrid columns={[2, null, 3]} spacing="40px">
                {listSuperheroes.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((superheroe: any) => (
                    <SuperHeroeCard key={superheroe.id} superheroe={superheroe} details={details} />
                ))}       
            </SimpleGrid>
            <SimpleGrid columns={[1, 1, 1]} spacing="40px">
                <Stack pt={10} align={'center'}>
                    <Pagination
                        as={HStack}
                        spacing="10px"
                        totalPages={totalPages}
                        currentPage={page}
                        onPageChange={setPage}
                        itemComponent={ItemPagination}
                        labels={{
                        previous: "<<",
                        next: ">>",
                        first: false,
                        last: false,
                        page: (page) => `${page}`
                        }}
                    />
                </Stack>
            </SimpleGrid> 
        </>
    )
}

export default  TableCardsSuperheroes;