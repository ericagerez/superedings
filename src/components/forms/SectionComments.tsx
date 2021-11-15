import { Flex, SimpleGrid } from '@chakra-ui/react';
import useFirebase from '../../firebase/useFirebase';
import Comment from "./Comment";

export default function SectionComments() {

    let { documents } = useFirebase("comentarios");

    return (
      <Flex
        textAlign={'center'}
        justifyContent={'center'}
        direction={'column'}
        width={"100%"}>
        <SimpleGrid
          spacing={'10'}
          mt={2}
          mx={'auto'}
          width={"100%"}>
          {documents.map((document, index) => (
            <Comment comment={document.comment} calification={document.calification} user={document.user} index={index} />
          ))}
        </SimpleGrid>
      </Flex>
    );
  }