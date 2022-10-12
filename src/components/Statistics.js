import React, { useContext } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { LoadDataContext } from "../Layout/Layout";

const Statistics = () => {
	const useStatisticsData = useContext(LoadDataContext).data;

	return (
		<div className="bg-slate-200 mb-10">
			<LineChart width={500} height={300} data={useStatisticsData}>
				<Line type="monotone" dataKey="total" stroke="#82ca9d" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
			</LineChart>
		</div>
	);
};

export default Statistics;
