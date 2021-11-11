import {
    Container,
    Flex,
    Box,
    Button,
    VStack,
    FormControl,
    FormLabel,
    Textarea,
    Select
  } from '@chakra-ui/react';
  
  export default function contact() {
    return (
      <Container maxW="full" mt={0} overflow="hidden">
        <Flex maxW="full">
          <Box
            bg="#be7adf"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            width={"100%"}
          >
                  <Box bg="white" borderRadius="lg" m={8} color="#0B0E3F"  p={{ sm: 5, md: 5, lg: 8 }} >
                      <VStack spacing={5} >
                        <FormControl id="puntuacion">
                          <FormLabel>Puntuación</FormLabel>
                          <Select variant="flushed" placeholder="Seleccionar" >
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="4">★★★★★</option>
                          </Select>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Comentario</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="¿Es este tu superhéroe favorito?"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#e9d8fd"
                            color="black"
                            _hover={{}}>
                            Enviar
                          </Button>
                        </FormControl>
                      </VStack>
                  </Box>
          </Box>
        </Flex>
      </Container>
    );
  }