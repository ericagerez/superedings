import { useEffect } from 'react'
import Nav from '../navbar/Nav';
import { useSelector, useDispatch } from 'react-redux';
import TableCardsSuperheroes from '../cards/TableCardsSuperheroes';
import { getAllSuperHeroes } from '../../actions/superHeroesActions';


function Home () {

    const dispatch: any = useDispatch();
    const {superheroes, loading} = useSelector((state: any) => state.superHeroesReducer);

    useEffect(() => {  dispatch(getAllSuperHeroes()) }, [])

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