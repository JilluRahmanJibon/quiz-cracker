import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export const LoadDataContext = createContext([]);
const Layout = () => {
	const loadData = useLoaderData();
	return (
		<LoadDataContext.Provider value={loadData}>
			<Navbar />
			<Outlet />
			<Footer />
		</LoadDataContext.Provider>
	);
};

export default Layout;
