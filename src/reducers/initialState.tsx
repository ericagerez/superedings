export interface State {
    superheroes: Array<{}>;
    loading: boolean;
    errorMessage: string;
    user: string
} 

const initialState: State = {
    superheroes: [],
    loading: true,
    errorMessage: "",
    user: '',
}

export default initialState;