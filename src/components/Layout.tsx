import {NavLink, Outlet} from 'react-router';
import Avatar from './Avatar';

const Layout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="bg-gray-800 text-white p-4 flex justify-between items-center">
				<h1 className="text-2xl font-bold">NutriLog</h1>
				<Avatar />
			</header>
			<main className="grow p-4">
				<Outlet />
			</main>
			<nav className="bg-gray-700 text-white p-4">
				<ul className="flex space-x-4">
					<li>
						<NavLink
							to="/"
							className={({isActive}) =>
								isActive ? 'text-forest-700' : 'text-forest-400'
							}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							className={({isActive}) =>
								isActive ? 'text-forest-700' : 'text-forest-400'
							}>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							className={({isActive}) =>
								isActive ? 'text-forest-700' : 'text-forest-400'
							}>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
			<footer className="bg-gray-800 text-white p-4 text-center">
				<p>&copy; 2026 Nutrilog. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default Layout;
