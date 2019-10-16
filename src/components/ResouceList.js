import React from 'react';
import useResources from './useResources';

function ResouceList({ resource }) {
	const resources = useResources(resource);

	return <ul>{resources.map(({ id, title }) => <li key={id}>{title}</li>)}</ul>;
}

export default ResouceList;
