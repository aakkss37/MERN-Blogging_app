import './App.css';
import Login from './components/account/Login';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route, Navigate, Outlet,  } from 'react-router-dom'
import Header from './components/header/Header';
import { useState } from 'react';
import CreatePost from './components/createPost/CreatePost';
import Error404 from './components/Error404';
import DetailedView from './components/details/DetailedView';


const PrivateRoute = (props) => (
	props.isUserAuthanticated
		?
		<>
			<Header />
			<Outlet />
		</>
		:
		<Navigate replace to='/login' />
)


function App () {

	const [isUserAuthanticated, setUserAuthanticated] = useState(false);


	return (
		<DataProvider>
			<BrowserRouter>
				<div className="App" style={{ marginTop: 64 }}>
					<Routes>
						
						<Route path='/login' element={<Login setUserAuthanticated={setUserAuthanticated} />} />
						<Route path='/' element={<Navigate replace to='/login' />}/>


						<Route path='/home' element={<PrivateRoute isUserAuthanticated={isUserAuthanticated}/>}>
							<Route path='/home' element={<Home />} />
						</Route>

						<Route path='/create-new-post' element={<PrivateRoute isUserAuthanticated={isUserAuthanticated}/>}>
							<Route path='/create-new-post' element={<CreatePost />} />
						</Route>

						<Route path='/home/details/:post_id' element={<PrivateRoute isUserAuthanticated={isUserAuthanticated}/>}>
							<Route path='/home/details/:post_id' element={<DetailedView />} />
						</Route>

						<Route path="*" element={<Error404/>} />

					</Routes>
				</div>
			</BrowserRouter>
		</DataProvider>
	);
}

export default App;
