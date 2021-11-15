import {
  chakra,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';


interface CommentProps {
    comment: string;
    calification: string;
    user: string;
    index: number;
}

const getStarsByCalificacion = (calification: string) =>{
    let stars: string = '';
    for(let indice = 0; indice < parseInt(calification); indice++){
        stars += '★';
    }
    return stars;
}

export default function Comment(props: CommentProps)  {
  const { comment, calification, user } = props;
  return (
    <Flex
      boxShadow={'lg'}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
     >
        <Flex
            direction={'column'}
            textAlign={'left'}
            justifyContent={'space-between'}
        >
            <chakra.p fontFamily={'Arial'} fontWeight={'bold'} fontSize={14} color={'black'}>
                {user}
                <chakra.span
                    fontFamily={'Inter'}
                    fontWeight={'large'}
                    color={'yellow.500'}>
                    {' - '}
                    {getStarsByCalificacion(calification)}
                </chakra.span>
            </chakra.p>
            <chakra.p
                fontFamily={'Arial'}
                fontWeight={'medium'}
                fontSize={'15px'}
                pb={4}
                color={'black'}
            >
                {comment}
            </chakra.p>
      </Flex>
    </Flex>
  );
}
