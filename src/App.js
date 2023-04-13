/** @format */

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					exact
					element={<MainPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
