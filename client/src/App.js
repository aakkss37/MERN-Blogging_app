import './App.css';
import Login from './components/account/Login';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';

function App () {
	return (
		<DataProvider>
			<BrowserRouter>
			<Header/>
				<div className="App" style={{marginTop: 74}}>
					<Routes>
						<Route path='/login' element={<Login />}/>
						<Route path='/home' element={<Home />}/>
					</Routes>
				</div>
			</BrowserRouter>
		</DataProvider>
	);
}

export default App;
