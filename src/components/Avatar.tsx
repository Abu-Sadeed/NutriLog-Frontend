import {useState} from 'react';
import {useAuth} from '../hooks/useAuth';

const Avatar = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		setDrawerOpen(!drawerOpen);
	};

	const {user, signOut} = useAuth();
	return (
		<button className="flex items-center flex-col" onClick={toggleDrawer}>
			<img
				src={
					user?.user_metadata.avatar_url || 'https://i.pravatar.cc/40'
				}
				alt="User Avatar"
				className="w-10 h-10 rounded-full"
			/>
			<div
				className={`absolute top-12 right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg p-4 transition-opacity duration-200 ${drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
				<p className="text-sm text-gray-700 dark:text-gray-300">
					{user?.email}
				</p>
				<button
					onClick={signOut}
					className={`ml-4 px-3 py-1 rounded-btn bg-red-500 text-white`}>
					Sign Out
				</button>
			</div>
		</button>
	);
};

export default Avatar;
