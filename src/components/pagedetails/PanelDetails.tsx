import { Container, SimpleGrid, Image, Flex, Heading, Text, Stack, StackDivider, Icon, useColorModeValue,Center, Grid, GridItem, Box, chakra  } from '@chakra-ui/react';
import { ReactElement } from 'react';
import SuperHeroeCard from '../cards/SuperHeroeCard';
import { MdWork, MdLocationOn } from 'react-icons/md';
import Feature from './Feature';
import FormComment from '../forms/FormComment';
import SectionComments from '../forms/SectionComments';

const PanelDetails = (props: any) => {

    const genero = props.superheroe.appearance.gender;

    return (
		<Container bg="" maxW="full" mt={0} centerContent overflow="hidden">
			<Flex direction='column' maxW="full">
				<Flex direction={['column','column','column','row']}>
					<Box width={["100%", "100%", "100%", "60%"]} colums={[1]}>
						<Stack spacing={4}>
							{/* Género de superheroe */}
							<Text
								textTransform={'uppercase'}
								color={genero == 'Female' ? 'pink.400': 'blue.400'}
								fontWeight={600}
								fontSize={'sm'}
								bg={useColorModeValue('blue.50', 'blue.900')}
								p={2}
								alignSelf={'flex-start'}
								rounded={'md'}>
								{genero}
							</Text>
							{/* Nombre de superheroe */}
							<Heading>{props.superheroe.name}</Heading> 
							{/* Trabajo de superheroe */}
							<Stack direction={'row'} align={'center'}>
								<MdWork/>
								<Text color={'gray.500'} fontSize={'lg'}>{props.superheroe.work.occupation}</Text>
							</Stack>
							{/* Lugar de trabajo de superheroe */}
							<Stack direction={'row'} align={'center'}>
								<MdLocationOn />
								<Text color={'gray.500'} fontSize={'lg'}>{props.superheroe.work.base}</Text>
							</Stack>
							
							<Box mt={3}>
								<Feature superheroe={props.superheroe} colorBg={'green.100'} />
							</Box>
						</Stack>				
					</Box >
					<Box width={["100%", "100%", "100%", "40%"]} >
						<SuperHeroeCard superheroe={props.superheroe} details={false} />
					</Box>
				</Flex>
				<Box width={"100%"}>
					<FormComment />
				</Box>
				<Heading as="h3" size="lg" textAlign="center">
     	 			Comentarios acerca de <chakra.p color={'#be7adf'}>{props.superheroe.name}</chakra.p>
    			</Heading>
				<Box width={"77%"} m={"auto"}>
					<SectionComments />
				</Box>
        	</Flex>
		</Container>
        
      );
}

export default PanelDetails;