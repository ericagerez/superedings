import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Home from './components/pagehome/Home';
import Nav from './components/navbar/Nav';
import Favourites from './components/pagefav/Favourites';
import DetailsSuperheroe from './components/pagedetails/DetailsSuperheroe';

const theme = extendTheme({
	colors: {
	  brand: {
		100: "#EDF2F7",
		// ...
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
					{/* <Nav /> */}
					<Switch>
						<Route path="/home" component={Home} />
						{/* <Route path="/trending" component={About} />
						<Route exact path="/search" component={CoinList} /> */}
						<Route path="/fav" component={Favourites} />
						<Route path="/details" component={DetailsSuperheroe} />
						{/* <Route path="*" component={NotFoundComponent} /> */}
				</Switch>
				</Router>
			</ChakraProvider>
		</Provider>
    </>
  );
}

export default App;
