import { CustomAxios } from './baseHttp';


class DataService {

	getAllSuperHeroes = (): Promise<object> => {
		let ids: Array<number> = Array.from({length: 48 - 1 + 1}, (v, i) => i + 1)
		let superHeroes: Array<object> = [];
		ids.map((id) => superHeroes.push(CustomAxios.get(`${id}`)));
		return Promise.all(superHeroes);
	}



}

export default new DataService();