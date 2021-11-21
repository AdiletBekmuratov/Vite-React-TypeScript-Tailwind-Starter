import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home'
import PrivateRoute from '@/routes/PrivateRoute';

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={
					<PrivateRoute>
						<Home />
					</PrivateRoute>
				} />
			</Routes>
		</BrowserRouter>
	);
}
