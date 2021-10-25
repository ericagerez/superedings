export interface State {
    superheroes: Array<object>;
    loading: boolean;
    errorMessage: string;
} 

const initialState: State = {
    superheroes: [],
    loading: true,
    errorMessage: "" 
}

export default initialState;