import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';

import './index.css';

import Marginata from './routes/Marginata';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route exact path='/' element={<Marginata />} errorElement={<Error />} />
		</>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<div className='select-none'>
			<RouterProvider router={router} />
		</div>
	</React.StrictMode>
);
