import { useEffect, useState } from 'react';
import axios from 'axios';

const useResources = (resource) => {
	const [ resources, setResources ] = useState([]);

	useEffect(
		() => {
			fetchResources(resource);

			// Alternative solution when declaring async function without a wrapper. immediately invokes function.
			//
			// (async (resource) => {
			// 	const { data } = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
			// 	setResources(data);
			// })(resource);
		},
		[ resource ]
	);

	const fetchResources = async (resource) => {
		const { data } = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
		setResources(data);
	};

	return resources;
};

export default useResources;
