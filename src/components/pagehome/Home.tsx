import { useEffect } from 'react'
import Nav from '../navbar/Nav';
import { useSelector, useDispatch } from 'react-redux';
import TableCardsSuperheroes from '../cards/TableCardsSuperheroes';
import { getAllSuperHeroes } from '../../actions/superHeroesActions';


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
                loading ? <p>Cargando...</p> :
                <TableCardsSuperheroes listSuperheroes={superheroes} details={true}/>
            }
            
        </Nav>
    )
}

export default Home;