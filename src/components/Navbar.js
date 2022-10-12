import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./Navbar.css";
const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className=" py-4 px-2 shadow-xl">
			<nav className=" flex md:w-5/6 mx-auto justify-between">
				<div>
					<Link to="/" className="font-bold text-2xl">
						{" "}
						Quizzes on PL
					</Link>
				</div>
				<div className="flex flex-row-reverse">
					<div className="w-8 md:hidden" onClick={() => setOpen(!open)}>
						{open ? <XMarkIcon /> : <Bars3Icon />}
					</div>
					<ul
						className={`md:flex  bg-gray-200 md:bg-white   w-full justify-center duration-500 ease-in-out  z-50 md:static absolute gap-5 ${
							open ? "top-12" : "-top-44"
						}`}>
						<NavLink
							title="Home"
							to="/home"
							className={`text-gray-500 md:hover:bg-white  hover:bg-purple-400 py-1 transition-all font-semibold  `}>
							<li className="md:hover:pl-0 hover:pl-12 transition-all py-1 w-full md:pl-0 pl-4 hover:text-gray-900 hover:font-bold">
								Home
							</li>
						</NavLink>
						<NavLink
							title="Statistics"
							to="statistics"
							className={`text-gray-500 md:hover:bg-white  hover:bg-purple-400 py-1 transition-all font-semibold    `}>
							<li className="md:hover:pl-0 hover:pl-12 transition-all py-1 w-full md:pl-0 pl-4 hover:text-gray-900 hover:font-bold">
								Statistics
							</li>
						</NavLink>
						<NavLink
							title="Topic"
							to="topic"
							className={`text-gray-500 md:hover:bg-white  hover:bg-purple-400 py-1 transition-all font-semibold  `}>
							<li className="md:hover:pl-0 hover:pl-12 transition-all py-1 w-full md:pl-0 pl-4 hover:text-gray-900 hover:font-bold">
								Topic
							</li>
						</NavLink>
						<NavLink
							title="Blog"
							to="blog"
							className={`text-gray-500 md:hover:bg-white  hover:bg-purple-400 py-1 transition-all font-semibold  `}>
							<li className="md:hover:pl-0 hover:pl-12 transition-all py-1 w-full md:pl-0 pl-4 hover:text-gray-900 hover:font-bold">
								Blog
							</li>
						</NavLink>
						<NavLink
							title="About"
							to="about"
							className={`text-gray-500 md:hover:bg-white  hover:bg-purple-400 py-1 transition-all font-semibold  `}>
							<li className="md:hover:pl-0 hover:pl-12 transition-all py-1 w-full md:pl-0 pl-4 hover:text-gray-900 hover:font-bold">
								About
							</li>
						</NavLink>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
