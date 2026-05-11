import type {Session} from '@supabase/supabase-js';
import {useCallback, useEffect, useMemo, useState} from 'react';
import type {AuthContextType} from '../context/AuthContext';
import AuthContext from '../context/AuthContext';
import {supabase} from '../lib/supabase';

export function AuthProvider({
	children,
}: Readonly<{children: React.ReactNode}>) {
	const [session, setSession] = useState<Session | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchSession = async () => {
			try {
				const {
					data: {session},
				} = await supabase.auth.getSession();
				setSession(session);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchSession();

		const subscription = supabase.auth.onAuthStateChange(
			(_event, session) => {
				setSession(session);
			},
		);

		return () => {
			subscription.data.subscription.unsubscribe();
		};
	}, []);

	const signOut = useCallback(async () => {
		await supabase.auth.signOut();
		setSession(null);
	}, []);

	const value: AuthContextType = useMemo(
		() => ({session, user: session?.user, signOut, loading}),
		[session, signOut, loading],
	);

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
