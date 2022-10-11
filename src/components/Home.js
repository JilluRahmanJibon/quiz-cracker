import React, { useContext } from "react";
import { LoadDataContext } from "../Layout/Layout";
import Header from "./Header";
import HomeData from "./HomeData";

const Home = () => {
	const reciveLoadData = useContext(LoadDataContext).data;
	return (
		<div>
			<Header />
			<div className="grid grid-cols-4 gap-5 md:px-16">
				{reciveLoadData.map(data => (
					<HomeData key={data.id} data={data} />
				))}
			</div>
		</div>
	);
};

export default Home;
