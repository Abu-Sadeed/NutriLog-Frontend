import {useEffect, useRef} from 'react';
import {useNavigate, useSearchParams} from 'react-router';
import {supabase} from '../lib/supabase';

const Callback = () => {
	const [searchParams] = useSearchParams();
	const code = searchParams.get('code');
	const next = searchParams.get('next') || '/';
	const hasExchanged = useRef(false);
	const navigate = useNavigate();

	const exchangeCodeForSession = async () => {
		if (!code) {
			console.error('No code found in URL');
			// return navigate('/auth/auth-code-error', {replace: true});
			return;
		}
		const {error} = await supabase.auth.exchangeCodeForSession(code);
		if (error) {
			console.error('Error exchanging code for session:', error);
			// return navigate('/auth/auth-code-error', {replace: true});
			return;
		}
		// if (!error) {
		// 	return navigate(next, {replace: true});
		// }
	};

	useEffect(() => {
		console.log('URL params:', Object.fromEntries(searchParams));
		console.log('Hash:', globalThis.location.hash);
		if (hasExchanged.current) return;
		hasExchanged.current = true;
		exchangeCodeForSession();
	}, []);

	return <div>Exchanging code for session...</div>;
};

export default Callback;
