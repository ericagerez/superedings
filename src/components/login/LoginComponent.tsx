import { Button, Heading, Stack, Text, useColorModeValue, Center } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { login } from '../../actions/loginAction';
import Nav from '../../components/navbar/Nav';

export default function LoginComponent() {

	const dispatch = useDispatch();
	const history = useHistory();

	const loginUser = () => {
		dispatch(login());
		history.push("/home")
	}

  return (
	<Nav>
		<Stack
			spacing={4}
			w={'full'}
			maxW={'md'}
			bg={useColorModeValue('white', 'gray.700')}
			rounded={'xl'}
			boxShadow={'lg'}
			p={6}
			my={12}
			m={'90px auto'}
			justify={'center'}
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
				<Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />} onClick={()=>loginUser()}>
					<Center>
						<Text>Iniciar sesion con Google</Text>
					</Center>
				</Button>
			</Stack>
		</Stack>
	</Nav>
  );
}