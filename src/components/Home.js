import React, { useContext } from "react";
import { LoadDataContext } from "../Layout/Layout";
import Header from "./Header";
import HomeData from "./HomeData";

const Home = () => {
	const reciveLoadData = useContext(LoadDataContext).data;
	return (
		<div>
			<Header />
			<div className="grid xl:grid-cols-4 lg:grid-cols-3 px-2 sm:grid-cols-2 gap-5 md:px-16">
				{reciveLoadData.map(data => (
					<HomeData key={data.id} data={data} />
				))}
			</div>
		</div>
	);
};

export default Home;
