import {useAuth} from '../hooks/useAuth';

const Avatar = () => {
	const {user, signOut} = useAuth();
	return (
		<div>
			<img
				src={
					user?.user_metadata.avatar_url || 'https://i.pravatar.cc/40'
				}
				alt="User Avatar"
				className="w-10 h-10 rounded-full"
			/>
			<button
				onClick={signOut}
				className="ml-2 text-sm text-red-500 hover:text-red-700">
				Sign Out
			</button>
		</div>
	);
};

export default Avatar;
