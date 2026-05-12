import {Route, Routes} from 'react-router';
import Callback from './auth/Callback';
import UserAuth from './auth/UserAuth';

function App() {
	return (
		<Routes>
			<Route path="/*" element={<UserAuth />} />
			<Route path="/auth/callback" element={<Callback />} />
		</Routes>
	);
}

export default App;
