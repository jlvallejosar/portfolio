import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';

// <------------------------------------------------- Pages ------------------------------------------------->
const Home = lazy(() => import('../pages/Home'));

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		errorElement: 'sdasdsa',
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
]);
