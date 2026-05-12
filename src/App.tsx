import UserAuth from './auth/UserAuth';

function App() {
	return (
		<div>
			<h1>Supabase Auth Example</h1>
			<p>Check the console for authentication status.</p>
			<UserAuth />
		</div>
	);
}

export default App;
