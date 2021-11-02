import { Container, SimpleGrid, Image, Flex, Heading, Text, Stack, StackDivider, Icon, useColorModeValue, } from '@chakra-ui/react';
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp, } from 'react-icons/io5';
import { ReactElement } from 'react';
import SuperHeroeCard from '../cards/SuperHeroeCard';
import { MdWork, MdLocationOn } from 'react-icons/md';
import Feature from './Feature';

const PanelDetails = (props: any) => {

    const genero = props.superheroe.appearance.gender;

    return (
        <Container maxW={'5xl'} py={12}>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
				<Stack spacing={4}>
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
					<Heading>{props.superheroe.name}
					</Heading> 
					
					<Stack direction={'row'} align={'center'}>
						<MdWork/>
						<Text color={'gray.500'} fontSize={'lg'}>{props.superheroe.work.occupation}</Text>
					</Stack>

					<Stack direction={'row'} align={'center'}>
						<MdLocationOn />
						<Text color={'gray.500'} fontSize={'lg'}>{props.superheroe.work.base}</Text>
					</Stack>
					
					<Stack
						spacing={4}
						divider={
						<StackDivider
							borderColor={useColorModeValue('gray.100', 'gray.700')}
						/>
						}>
						<Feature superheroe={props.superheroe} colorBg={'green.100'} />
					</Stack>
				</Stack>
				<Flex>
					<SuperHeroeCard superheroe={props.superheroe} details={false} />
				</Flex>
			</SimpleGrid>
        </Container>
      );
}

export default PanelDetails;