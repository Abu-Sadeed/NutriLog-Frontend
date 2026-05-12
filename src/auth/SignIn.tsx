import {useState} from 'react';
import {supabase} from '../lib/supabase';

async function signInWithGoogle() {
	const {data, error} = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			redirectTo: `${globalThis.location.origin}/auth/callback`,
			scopes: 'email profile',
		},
	});

	if (error) {
		console.error(error);
	} else {
		console.log(data);
	}
}

export const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	async function signInWithEmail() {
		const {data, error} = await supabase.auth.signInWithPassword({
			email: email,
			password: password,
		});

		if (error) {
			console.error(error);
		} else {
			console.log(data);
		}
	}

	return (
		<div>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={handleEmailChange}
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={handlePasswordChange}
			/>
			<button onClick={signInWithEmail}>Sign In</button>
			<button onClick={signInWithGoogle}>Sign In with Google</button>
		</div>
	);
};

export default SignIn;
