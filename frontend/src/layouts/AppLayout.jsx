import React, { Suspense } from 'react';
import AppNavbar from '../components/Navbar/AppNavbar';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
	return (
		<div>
			<AppNavbar />
			<Suspense fallback={"Loading..."}>
				<Outlet />
			</Suspense>
		</div>
	);
}
