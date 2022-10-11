import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestions from "./QuizQuestions";

const Quiz = () => {
	const useQuiz = useLoaderData().data;
	return (
		<div className="text-center pt-16">
			<h1 className="font-bold text-3xl text-purple-600 pb-4">
				Quiz Of {useQuiz.name}
			</h1>
			{useQuiz.questions.map(question => (
				<QuizQuestions key={question.id} questionAndAnswer={question} />
			))}
		</div>
	);
};

export default Quiz;
