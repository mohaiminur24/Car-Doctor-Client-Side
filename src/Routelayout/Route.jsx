import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import HomePage from "../HomeLayout/HomePage";

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        children:[
            {
                path:"/",
                element: <HomePage/>
            },
            {
                path:"/about",
                element: <h1>Mohaiminr</h1>
            }
        ]
    }
])

export default router;