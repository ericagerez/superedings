import Nav from '../navbar/Nav';
import PanelDetails from '../pagedetails/PanelDetails';
import { Center } from '@chakra-ui/layout';

const DetailsSuperheroe = (props: any) => {
    return(
        <Nav>
            { props.location.state ?  
                                    <PanelDetails superheroe={props.location.state.superheroe}/> : 
                                    <Center>Para ver los detalles de un superheroe por favor seleccioe uno en la home</Center>
            }
            
        </Nav>
    )
}

export default DetailsSuperheroe;