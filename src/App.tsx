import {createClient} from '@supabase/supabase-js';
import {useEffect, useState} from 'react';

const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);

function App() {
	const [food, setFood] = useState([]);

	async function getFood() {
		const {data} = await supabase.from('food').select();
		setFood(data);
	}

	useEffect(() => {
		getFood();
	}, []);

	return (
		<ul>
			{food.map((item) => (
				<li key={item.name}>{item.name}</li>
			))}
		</ul>
	);
}

export default App;
