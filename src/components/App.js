import React, { useState } from 'react';
import ResourceList from './ResouceList';
import UserList from './UserList';

function App() {
	const [ resource, setResource ] = useState('posts');
	return (
		<div>
			<div>
				<button onClick={() => setResource('posts')}>Posts</button>
				<button onClick={() => setResource('todos')}>ToDos</button>
			</div>
			<ResourceList resource={resource} />
			<UserList />
		</div>
	);
}

export default App;
