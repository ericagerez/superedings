import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Home from './components/pagehome/Home';
import Favourites from './components/pagefav/Favourites';
import DetailsSuperheroe from './components/pagedetails/DetailsSuperheroe';
import LoginComponent from './components/login/LoginComponent';

const theme = extendTheme({
	colors: {
	  brand: {
		100: "#EDF2F7",
		900: "#1a202c",
	  },
	},
  })


function App() {

  return (
    
    <>	
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<Router>
					<Switch>
						<Route path="/favourites" component={Favourites} />
						<Route path="/details" component={DetailsSuperheroe} />
						<Route path="/login" component={LoginComponent} />
						<Route path="/" component={Home} />
				</Switch>
				</Router>
			</ChakraProvider>
		</Provider>
    </>
  );
}

export default App;


