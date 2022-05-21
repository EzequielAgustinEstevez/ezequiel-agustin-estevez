import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardMedia from '@mui/material/CardMedia';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
	'7c13c3b9-be05-4e8e-91d2-a39692aeb1d8';

const Api = () => {
	const [url, setUrl] = useState('');

	const urlApi = async () => {
		const res = await axios('/images/search?category_ids=1');
		console.log(res.data[0].url);
		setUrl(res.data[0].url);
	};

	useEffect(() => {
		urlApi();
	}, []);

	return <CardMedia title="Gatitos" image={url} component="img" />;
};

export default Api;
