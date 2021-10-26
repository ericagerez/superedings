import { useHistory } from "react-router-dom";
import { Box, Center, useColorModeValue, Heading, IconButton, Stack, Image, } from '@chakra-ui/react';
import { MdOutlineFavorite } from 'react-icons/md';
import { TiEye } from 'react-icons/ti';
  
export default function SuperHeroeCard(props: any) {

	let history = useHistory();
	const { superheroe: superheroe, details: details } = props;

	function seeDetails(): void  {
		history.push("/details", {superheroe: superheroe});
	}


    return (
		<Center py={12}>
			<Box
				role={'group'}
				p={6}
				maxW={'330px'}
				w={'full'}
				bg={useColorModeValue('white', 'gray.800')}
				boxShadow={'2xl'}
				rounded={'lg'}
				pos={'relative'}
				zIndex={1}
			>
			<Box
				rounded={'lg'}
				mt={-12}
				pos={'relative'}
				height={'230px'}
				_after={{
					transition: 'all .3s ease',
					content: '""',
					w: 'full',
					h: 'full',
					pos: 'absolute',
					top: 5,
					left: 0,
					backgroundImage: `url(${superheroe.image.url})`,
					filter: 'blur(15px)',
					zIndex: -1,
				}}
				_groupHover={{
				_after: {
					filter: 'blur(20px)',
				},
				}}
			>
				<Image
					rounded={'lg'}
					height={230}
					width={282}
					objectFit={'cover'}
					src={superheroe.image.url}
				/>
			</Box>
			<Stack pt={10} align={'center'}>
				{
					details &&
						<Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
							{superheroe.name}
						</Heading>
				}
				
				<Stack direction={'row'} align={'center'}>
					<IconButton
						aria-label="fav"
						size="lg"
						icon={<MdOutlineFavorite />}
					/>
					{
						details && 
							<IconButton
							aria-label="see"
							size="lg"
							icon={<TiEye />}
							onClick={seeDetails}
						/>
					}
					
				</Stack>
			</Stack>
			</Box>
		</Center>
    );
  }