import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Main from "../components/Main";
import Quiz from "../components/Quiz";
import Statisticks from "../components/Statisticks";
import Topic from "../components/Topic";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
		children: [
			{ path: "/", element: <Main /> },
			{ path: "/home", element: <Main /> },
			{ path: "statisticks", element: <Statisticks /> },
			{ path: "topic", element: <Topic /> },
			{ path: "blog", element: <Blog /> },
			{ path: "about", element: <About /> },
			{
				path: "quiz/:id",
				loader: ({ params }) => {
					return fetch(
						`https://openapi.programming-hero.com/api/quiz/${params.id}`
					);
				},
				element: <Quiz />,
			},
		],
	},
]);
export default router;
