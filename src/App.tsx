import {Route, Routes} from 'react-router';
import Callback from './auth/Callback';
import UserAuth from './auth/UserAuth';
import Dashboard from './dashboard/Dashboard';

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
