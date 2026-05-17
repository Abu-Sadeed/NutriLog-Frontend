import {useState} from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const UserAuth = () => {
	const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<div className="flex mb-4">
					<button
						className={`px-4 py-2 ${
							activeTab === 'signin'
								? 'bg-blue-500 text-white'
								: 'bg-gray-200'
						} rounded-l`}
						onClick={() => setActiveTab('signin')}>
						Login
					</button>
					<button
						className={`px-4 py-2 ${
							activeTab === 'signup'
								? 'bg-blue-500 text-white'
								: 'bg-gray-200'
						} rounded-r`}
						onClick={() => setActiveTab('signup')}>
						Sign Up
					</button>
				</div>
				{activeTab === 'signin' ? <SignIn /> : <SignUp />}
			</div>
		</div>
	);
};

export default UserAuth;
