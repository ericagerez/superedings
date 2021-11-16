export interface State {
    superheroes: Array<{}>;
    loading: boolean;
    errorMessage: string;
    user: string,
    openModal: boolean
} 

const initialState: State = {
    superheroes: [],
    loading: true,
    errorMessage: "",
    user: '',
    openModal: false
}

export default initialState;