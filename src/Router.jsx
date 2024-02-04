import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Homepage from "./components/Homepage";
import Post from "./components/Post";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Homepage />,
                },
                {
                    path:"/post/:id",
                    element: <Post />,
                }
            ]
        }
        
    ])
    return <RouterProvider router={router}/>
};

export default Router;