import Nav from '../navbar/Nav';
import SuperHeroeCard from '../cards/SuperHeroeCard';
import PanelDetails from '../pagedetails/PanelDetails';

const DetailsSuperheroe = (props: any) => {
    return(
        <Nav>
            { props.location.state ?  
                                    <PanelDetails superheroe={props.location.state.superheroe}/> : 
                                    <p>Para ver los detalles de un superheroe por favor seleccionar uno en la home</p>
            }
            
        </Nav>
    )
}

export default DetailsSuperheroe;