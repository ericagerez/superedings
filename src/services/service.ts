import { CustomAxios } from './baseHttp';

class DataService {

	getAllSuperHeroes = () => {
		return CustomAxios.get('/superedings');
	}
}	

export default new DataService();