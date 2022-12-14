import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestions from "./QuizQuestions";

const Quiz = () => {
	const useQuiz = useLoaderData().data;
	const { questions } = useQuiz;

	return (
		<div className="text-center pt-16">
			<h1 className="font-bold text-3xl  text-gray-600 pb-5">
				Quiz Of <span className="text-teal-600">{useQuiz.name}</span>
			</h1>
			{questions.map((question, i) => (
				<QuizQuestions
					I={i + 1}
					questions={questions}
					key={question.id}
					questionAndAnswer={question}
				/>
			))}
		</div>
	);
};

export default Quiz;
