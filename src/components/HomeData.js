import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomeData = ({ data }) => {
	const { id, logo, name, total } = data;
	const navigate = useNavigate();
	const handleStartPractice = () => {
		navigate(`/quiz/${id}`);
	};
	return (
		<div className="bg-slate-200 p-2 rounded-lg">
			<div className="bg-slate-300 rounded-lg p-2">
				<img src={logo} alt="" />
			</div>
			<div className="flex pt-3 justify-between items-center ">
				<h1 className="font-semibold text-lg">{name}</h1>
				<button
					onClick={handleStartPractice}
					className="flex rounded-lg hover:bg-purple-500 transition-all text-gray-800 hover:text-black font-semibold bg-purple-400 p-2 items-center">
					<span>Start Quize</span> <ArrowRightIcon className="w-5 h-5" />{" "}
				</button>
			</div>
		</div>
	);
};

export default HomeData;
