import './App.css';
import Login from './components/account/Login';
import DataProvider from './context/DataProvider';

function App () {
	return (
		<div className="App">
			<DataProvider>
				<Login />
			</DataProvider>
		</div>
	);
}

export default App;
