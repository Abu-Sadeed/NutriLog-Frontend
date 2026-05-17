import {Route, Routes} from 'react-router';
import Callback from './pages/AuthCallback';
import Dashboard from './pages/Dashboard';
import UserAuth from './pages/LoginPage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/auth/*" element={<UserAuth />} />
			<Route path="/auth/callback" element={<Callback />} />
			<Route path="*" element={<div>Not Found</div>} />
		</Routes>
	);
}

export default App;
