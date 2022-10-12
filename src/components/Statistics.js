import React, { useContext } from "react";
import {
	Area,
	Bar,
	CartesianGrid,
	ComposedChart,
	Legend,
	Line,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { LoadDataContext } from "../Layout/Layout";

const Statistics = () => {
	const useStatisticsData = useContext(LoadDataContext).data;
	return (
		<div className="py-12 pr-5">
			<ResponsiveContainer height={400}>
				<ComposedChart width={500} height={400} data={useStatisticsData}>
					<CartesianGrid stroke="#f5f5f5" />
					<XAxis
						dataKey="name"
						label={{
							value: "Languages",
							position: "insideBottomRight",
							offset: 10,
						}}
						scale="band"
					/>
					<YAxis label={{ angle: -90, position: "insideLeft" }} />
					<Tooltip />
					<Legend />
					<Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
					<Bar dataKey="total" barSize={20} fill="#413ea0" />
					<Line type="monotone" dataKey="total" stroke="#ff7300" />
				</ComposedChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Statistics;
