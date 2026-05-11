import Login from './auth/SignIn';

function App() {
	return (
		<div>
			<h1>Supabase Auth Example</h1>
			<p>Check the console for authentication status.</p>
			<Login />
		</div>
	);
}

export default App;
