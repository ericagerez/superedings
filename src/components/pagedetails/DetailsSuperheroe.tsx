import { useLocation } from "react-router-dom";
import Nav from '../navbar/Nav';
import SuperHeroeCard from '../cards/SuperHeroeCard';

const DetailsSuperheroe = (props: any) => {

    const location = useLocation();

    return(
        <Nav>
            {
                props.location.state ? <SuperHeroeCard 
                                            superheroe={props.location.state.superheroe} 
                                            details={false} 
                                        /> : <p>Para ver los detalles de un superheroe por favor seleccionar uno en la home</p>

            }
            
        </Nav>
    )
}

export default DetailsSuperheroe;