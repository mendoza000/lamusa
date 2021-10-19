import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// Pantallas
import Home from './Home'
import About from './About'
import Cart from './Cart'
import Products from './Products'
import OpenProductScreen from './OpenProductScreen'

import Nav from '../components/Nav'
const AppRouter = () => {
	
	return(
		<Router>
			<>
				<Nav />
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/cart' component={Cart} />
				<Route exact path='/products' component={Products} />
				<Route exact path='/products/:id' component={(props) => <OpenProductScreen {...props} />}/>
			</>
		</Router>
	)

}

export default AppRouter