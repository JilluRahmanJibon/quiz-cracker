import React from "react";

const Header = () => {
	return (
		<div>
			<div className="relative ">
				<img
					src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg"
					className="absolute  inset-0 object-cover w-full h-full"
					alt=""
				/>
				<div className="relative bg-gray-900 bg-opacity-75">
					<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
						<div className="flex flex-col items-center justify-between xl:flex-row">
							<div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
								<h2 className="max-w-lg  font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
									Quizzes Of Programming Language
								</h2>
								<p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
									A comprehensive database of more than 36 programming language
									quizzes online, test your knowledge with programming language
									quiz questions.
								</p>
								<a
									title="Learn from programming hero team"
									href="https://web.programming-hero.com/"
									target={"_blank"}
									aria-label=""
									className="inline-flex items-center bg-purple-400 px-3 py-2 rounded-md font-semibold hover:text-white hover:bg-purple-500 transition-all">
									Learn more
									<svg
										className="inline-block w-3 ml-2"
										fill="currentColor"
										viewBox="0 0 12 12">
										<path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
