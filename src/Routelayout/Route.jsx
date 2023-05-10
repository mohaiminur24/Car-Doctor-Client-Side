import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import HomePage from "../HomeLayout/HomePage";
import ServiceDetails from "../ShareableComponents/ServiceDetails";

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
                path:"/service/:id",
                element: <ServiceDetails/>
            }
        ]
    }
])

export default router;