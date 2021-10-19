import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"

import './App.css';
import Home from './components/pagehome/Home';
import Nav from './components/navbar/Nav';
import Favourites from './components/fav/Favourites';

const theme = extendTheme({
	colors: {
	  brand: {
		100: "#ff7a00",
		// ...
		900: "#1a202c",
	  },
	},
  })

function App() {

  return (
    
    <>
		<ChakraProvider theme={theme}>
			<Router>
					
					<Nav />
			</Router>
      </ChakraProvider>
    </>
  );
}

export default App;
