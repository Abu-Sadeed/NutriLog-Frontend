import {Route, Routes} from 'react-router';
import Layout from './components/Layout';
import ProtectedRoutes from './components/ProtectedRoutes';
import Callback from './pages/AuthCallback';
import Dashboard from './pages/Dashboard';
import UserAuth from './pages/LoginPage';

function App() {
	return (
		<Routes>
			<Route path="/auth/*" element={<UserAuth />} />
			<Route path="/auth/callback" element={<Callback />} />
			<Route
				element={
					<ProtectedRoutes>
						<Layout />
					</ProtectedRoutes>
				}>
				<Route path="/" element={<Dashboard />} />
			</Route>
		</Routes>
	);
}

export default App;
