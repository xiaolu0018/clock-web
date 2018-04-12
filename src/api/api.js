	import axios from 'axios';
	const base = 'http://192.168.82.122:9090';

	const asideData = axios.get(`${base}/lists`).then(function (response) {
   		return response.data;
 });


export default asideData
