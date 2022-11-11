import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Search from './pages/Search';

function App() {

	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/search' element={<Search />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
