import { useEffect } from 'react'
import Nav from '../navbar/Nav';
import { useSelector, useDispatch } from 'react-redux';
import TableCardsSuperheroes from '../cards/TableCardsSuperheroes';
import { getAllSuperHeroes } from '../../actions/superHeroesActions';
import { Spinner, Center } from "@chakra-ui/react"

function Home () {

    const dispatch: any = useDispatch();
    let {superheroes, loading} = useSelector((state: any) => state.superHeroesReducer);
    let {user} = useSelector((state: any) => state.loginReducer);

    const initilization = () => {
        console.log(user);
    }

    useEffect(() => {  
       dispatch(getAllSuperHeroes()) 
       initilization();
    }, [])

    return (
        <Nav>
            {
                loading ? <Center><Spinner size="xl" /></Center> :
                <TableCardsSuperheroes listSuperheroes={superheroes} details={true}/>
            }
            
        </Nav>
    )
}

export default Home;