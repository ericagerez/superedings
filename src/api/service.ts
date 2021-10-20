import baseHttp from './baseHttp';

let superHeroesIds: Set<number> = new Set();

const generateIDsBetween = (min:number, max: number): number => {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

const repeat = (func, times:number): void => {
    superHeroesIds.add(func());
    times && --times && repeat(func, times);
}

const generateIDs = (): void => {
    repeat(generateIDsBetween(1, 100), 105);
}

export const getAllSuperHeroes = (): Array<object> => {
    let ids: Array<number> = new Array(...superHeroesIds);
    let superHeroes: Array<object>;
    generateIDs();
    ids.map((id) => superHeroes.push(baseHttp.get(`${id}`)));
    return superHeroes;
}