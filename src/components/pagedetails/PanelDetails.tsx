import { Container, SimpleGrid, Image, Flex, Heading, Text, Stack, StackDivider, Icon, useColorModeValue, } from '@chakra-ui/react';
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp, } from 'react-icons/io5';
import { ReactElement } from 'react';
import SuperHeroeCard from '../cards/SuperHeroeCard';
import { MdWork, MdLocationOn } from 'react-icons/md';

  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };

const PanelDetails = (props: any) => {
/*tslint:disabled*/
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
              <Text color={'gray.500'} fontSize={'lg'}>
                <MdWork/> {props.superheroe.work.occupation}
                <MdLocationOn /> {props.superheroe.work.base}
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue('gray.100', 'gray.700')}
                  />
                }>
                <Feature
                  icon={
                    <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                  }
                  iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                  text={'Business Planning'}
                />
                <Feature
                  icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                  iconBg={useColorModeValue('green.100', 'green.900')}
                  text={'Financial Planning'}
                />
                <Feature
                  icon={
                    <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                  }
                  iconBg={useColorModeValue('purple.100', 'purple.900')}
                  text={'Market Analysis'}
                />
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