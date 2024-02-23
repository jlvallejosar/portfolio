import React from 'react';
import ReactDOM from 'react-dom/client';
// <------------------------------------------------- Styles ------------------------------------------------->
import './scss/main.scss';
// <------------------------------------------------- Contexts ------------------------------------------------->
import { LanguageProvider } from './context/languages';
// <------------------------------------------------- Components ------------------------------------------------->
// <------------------------------------------------- Router ------------------------------------------------->
import { RouterProvider } from 'react-router-dom';
import { routes } from './router/AppRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<LanguageProvider>
      <RouterProvider router={routes} />
		</LanguageProvider>
	</React.StrictMode>,
);
