import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="bg-gray-200 py-4">
			<nav className=" flex md:w-5/6 mx-auto justify-between">
				<div>
					<NavLink to="/" className="font-bold text-2xl">
						{" "}
						Quiz Crackers!
					</NavLink>
				</div>
				<div className="flex flex-row-reverse">
					<div className="w-8 md:hidden" onClick={() => setOpen(!open)}>
						{open ? <XMarkIcon /> : <Bars3Icon />}
					</div>
					<ul
						className={`md:flex   bg-gray-200 w-full justify-center duration-500 ease-in-out  md:static absolute gap-5 ${
							open ? "top-12" : "-top-44"
						}`}>
						<li className="md:hover:bg-gray-200 hover:bg-purple-400 py-1 transition-all md:pl-0 pl-4 hover:text-white   font-semibold  md:hover:pl-0 hover:pl-12">
							<NavLink
								className={({ isActive }) =>
									isActive ? "text-black font-bold " : " text-gray-700"
								}
								to="/home">
								Home
							</NavLink>
						</li>
						<li className="md:hover:bg-gray-200 hover:bg-purple-400 py-1 transition-all md:pl-0 pl-4 hover:text-white   font-semibold  md:hover:pl-0 hover:pl-12">
							<NavLink
								className={({ isActive }) =>
									isActive ? "text-black font-bold " : " text-gray-700"
								}
								to="statisticks">
								Statisticks
							</NavLink>
						</li>
						<li className="md:hover:bg-gray-200 hover:bg-purple-400 py-1 transition-all md:pl-0 pl-4 hover:text-white   font-semibold  md:hover:pl-0 hover:pl-12">
							<NavLink
								className={({ isActive }) =>
									isActive ? "text-black font-bold " : " text-gray-700"
								}
								to="/topic">
								Topic
							</NavLink>
						</li>
						<li className="md:hover:bg-gray-200 hover:bg-purple-400 py-1 transition-all md:pl-0 pl-4 hover:text-white   font-semibold  md:hover:pl-0 hover:pl-12">
							<NavLink
								className={({ isActive }) =>
									isActive ? "text-black font-bold " : " text-gray-700"
								}
								to="/blog">
								Blog
							</NavLink>
						</li>

						<li className="md:hover:bg-gray-200 hover:bg-purple-400 py-1 transition-all md:pl-0 pl-4 hover:text-white   font-semibold  md:hover:pl-0 hover:pl-12">
							<NavLink
								className={({ isActive }) =>
									isActive ? "text-black font-bold " : " text-gray-700"
								}
								to="/about">
								About
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
