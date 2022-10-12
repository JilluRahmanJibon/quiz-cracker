import React from "react";
import { useState } from "react";

const Item = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border rounded shadow-sm">
			<button
				type="button"
				aria-label="Open item"
				title="Open item"
				className="flex items-center justify-between w-full p-4 focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}>
				<p className="text-lg font-medium">{title}</p>
				<div className="flex items-center justify-center w-8 h-8 border rounded-full">
					<svg
						viewBox="0 0 24 24"
						className={`w-3 text-gray-600 transition-transform duration-200 ${
							isOpen ? "transform rotate-180" : ""
						}`}>
						<polyline
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeMiterlimit="10"
							points="2,7 12,17 22,7"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</button>
			{isOpen && (
				<div className="p-4 pt-0">
					<p className="text-gray-700">{children}</p>
				</div>
			)}
		</div>
	);
};

const Blog = () => {
	return (
		<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div class="max-w-xl sm:mx-auto lg:max-w-2xl">
				<div class="flex flex-col mb-16 sm:text-center">
					<a href="/" class="mb-6 sm:mx-auto">
						<div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
							<svg
								class="w-10 h-10 text-deep-purple-accent-400"
								stroke="currentColor"
								viewBox="0 0 52 52">
								<polygon
									strokeWidth="3"
									strokeLinecap="round"
									strokeLinejoin="round"
									fill="none"
									points="29 13 14 29 25 29 23 39 38 23 27 23"
								/>
							</svg>
						</div>
					</a>
					<div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
						<h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
							<span class="relative inline-block">
								<svg
									viewBox="0 0 52 24"
									fill="currentColor"
									class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
									<defs>
										<pattern
											id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
											x="0"
											y="0"
											width=".135"
											height=".30">
											<circle cx="1" cy="1" r=".7" />
										</pattern>
									</defs>
									<rect
										fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
										width="52"
										height="24"
									/>
								</svg>
								<span class="relative">Here</span>
							</span>{" "}
							Are Some Faq's
						</h2>
						<p class="text-base text-gray-700 md:text-lg"></p>
					</div>
				</div>
				<div class="space-y-4">
					<Item title="Purpose of react router?">
						React Router is a standard library for routing in React. It enables
						the navigation among views of various components in a React
						Application, allows changing the browser URL, and keeps the UI in
						sync with the URL.At its heart, React Router is a state container
						for the current location , or URL. It keeps track of the location
						and renders different Route s as it changes, and it also gives you
						tools to update the location using Link s and the history API.
					</Item>
					<Item title="How context api works in react?">
						The React Context API is a way for a React app to effectively
						produce global variables that can be passed around. This is the
						alternative to "prop drilling" or moving props from grandparent to
						child to parent, and so on. Context is also touted as an easier,
						lighter approach to state management using Redux.Context is designed
						to share data that can be considered “global” for a tree of React
						components, such as the current authenticated user, theme, or
						preferred language. For example, in the code below we manually
						thread through a “theme” prop in order to style the Button
						component: class App extends React.
					</Item>
					<Item title="How useref hooks works in react js?">
						The useRef Hook allows you to persist values between renders. It can
						be used to store a mutable value that does not cause a re-render
						when updated. It can be used to access a DOM element directly.useRef
						returns a mutable ref object whose .current property is initialized
						to the passed argument ( initialValue ). The returned object will
						persist for the full lifetime of the component. Essentially, useRef
						is like a “box” that can hold a mutable value in its .current
						property.
					</Item>
				</div>
			</div>
		</div>
	);
};

export default Blog;
