import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { toast } from "react-toastify";

const QuizQuestions = ({ questionAndAnswer, I }) => {
	const [open, setOpen] = useState(false);
	const { correctAnswer, id, question, options } = questionAndAnswer;

	const quizIdentifyHandler = value => {
		if (value === correctAnswer) {
			toast.success("Congratulations ! you are selected right answer.", {
				autoClose: 500,
			});
		} else {
			toast.warning("you are selected wrong answer ! ", { autoClose: 500 });
		}
	};
	const questionFirst = question.replaceAll("<p>", " ").replaceAll("</p>", " ");
	return (
		<div className="border-2 mb-12 text-teal-400 rounded p-4 shadow-md lg:w-1/2 md:w-4/5 mx-2 md:mx-auto">
			<div className=" flex justify-between relative">
				<div className="text-center flex w-full">
					<h1 className="font-semibold">
						Quiz:<span className="font-bold text-black">{I}</span>
					</h1>
					<p className="text-xl w-full text-semibold">{questionFirst}</p>
				</div>
				<div className="flex flex-row-reverse ">
					<div
						className="w-5 h-5 cursor-pointer text-black"
						onClick={() => setOpen(!open)}>
						{open ? <EyeIcon /> : <EyeSlashIcon />}
					</div>
					<p
						className={`text-black   ${
							open
								? " absolute right-8 transition-all bg-slate-200 font-bold py-2 px-2 rounded"
								: " hidden"
						}`}>
						{correctAnswer}
					</p>
				</div>
			</div>
			<div className="sm:grid gap-2 mt-7 flex flex-col sm:grid-cols-2">
				{options.map((option, idx) => (
					<div
						className="border-2 pl-2  rounded-lg flex items-center gap-2 "
						key={idx}>
						<input
							className="cursor-pointer"
							onClick={e => quizIdentifyHandler(e.target.value)}
							type="radio"
							name={id}
							id={option}
							value={option}
						/>
						<label
							className="w-full py-4 cursor-pointer h-full"
							htmlFor={option}>
							{" "}
							<p>{option}</p>
						</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default QuizQuestions;
