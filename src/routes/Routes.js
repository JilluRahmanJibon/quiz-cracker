import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Statisticks from "../components/Statisticks";
import Topic from "../components/Topic";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/home", element: <Home /> },
			{ path: "statisticks", element: <Statisticks /> },
			{ path: "topic", element: <Topic /> },
			{ path: "blog", element: <Blog /> },
			{ path: "about", element: <About /> },
		],
	},
]);
export default router;
