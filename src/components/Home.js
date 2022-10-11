import React, { useContext } from "react";
import { LoadDataContext } from "../Layout/Layout";
import HomeData from "./HomeData";

const Home = () => {
	const reciveLoadData = useContext(LoadDataContext).data;
	return (
		<div>
			<div className="grid xl:grid-cols-4 lg:grid-cols-3 px-2 sm:grid-cols-2 pt-14 pb-16 gap-5 md:px-16">
				{reciveLoadData.map(data => (
					<HomeData key={data.id} data={data} />
				))}
			</div>
		</div>
	);
};

export default Home;
