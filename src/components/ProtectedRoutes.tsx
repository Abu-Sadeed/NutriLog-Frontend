import {useNavigate} from 'react-router';
import {useAuth} from '../hooks/useAuth';

const ProtectedRoutes = ({children}: Readonly<{children: React.ReactNode}>) => {
	const {session, loading} = useAuth();
	const navigate = useNavigate();

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!session) {
		navigate('/auth');
	}
	return <div>{children}</div>;
};

export default ProtectedRoutes;
