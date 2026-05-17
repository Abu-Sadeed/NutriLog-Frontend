import {useNavigate} from 'react-router';
import {useAuth} from '../hooks/useAuth';

const Callback = () => {
	const {session} = useAuth();
	const navigate = useNavigate();

	if (session) {
		navigate('/');
	}
	return <div>Authenticating user</div>;
};

export default Callback;
