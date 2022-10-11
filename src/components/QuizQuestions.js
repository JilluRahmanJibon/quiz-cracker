import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { toast } from "react-toastify";

const QuizQuestions = ({ questionAndAnswer }) => {
	const { correctAnswer, question, options } = questionAndAnswer;
	// console.log(questionAndAnswer);
	const [open, setOpen] = useState(false);
	const quizIdentifyHandler = innerText => {
		if (innerText === correctAnswer) {
			toast.success("Congratulations ! you are selected right answer.", {
				autoClose: 1000,
			});
		} else {
			toast.warning("you are selected wrong answer ! ");
		}
	};
	return (
		<div className="border-2 mb-12 text-purple-500 rounded p-4 shadow-md lg:w-1/2 md:w-4/5 mx-2 md:mx-auto">
			<div className=" flex justify-between relative">
				<div className="text-center w-full">
					<p className="text-xl text-semibold">{question}</p>
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
						<input type="radio" name="quiz" id={option} />
						<label
							className="w-full py-4 cursor-pointer h-full"
							htmlFor={option}
							onClick={e => quizIdentifyHandler(e.target.innerText)}>
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
