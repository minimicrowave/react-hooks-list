import React from 'react';
import useResources from './useResources';

function UserList() {
	const users = useResources('users');
	return <ul>{users.map(({ name, id }) => <li key={id}>{name}</li>)}</ul>;
}

export default UserList;
