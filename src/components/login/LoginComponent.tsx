import { Button, Flex, Heading, Stack, Text, useColorModeValue, Center } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

export default function LoginComponent() {
  return (
	<Flex
		minH={'100vh'}
		align={'center'}
		justify={'center'}
		bg={useColorModeValue('gray.50', 'gray.800')}
	>
		<Stack
			spacing={4}
			w={'full'}
			maxW={'md'}
			bg={useColorModeValue('white', 'gray.700')}
			rounded={'xl'}
			boxShadow={'lg'}
			p={6}
			my={12}
		>
			<Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }} >
				<Center> Iniciar sesión</Center>
			</Heading>
			<Text
				fontSize={{ base: 'sm', sm: 'md' }}
				color={useColorModeValue('gray.800', 'gray.400')}>
				<Center>Inicie sesión con sus credenciales de google</Center>
			</Text>
			<Stack spacing={6}>
				<Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />} /* onClick={()=>loginGoogle()} */>
					<Center>
						<Text>Iniciar sesion con Google</Text>
					</Center>
				</Button>
			</Stack>
		</Stack>
	</Flex>
  );
}