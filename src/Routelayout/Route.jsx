import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import HomePage from "../HomeLayout/HomePage";
import ServiceDetails from "../ShareableComponents/ServiceDetails";
import AddNewService from "../AddNewServiceLayout/AddNewService";
import LoginPage from "../AuthenticationLayout/LoginPage";
import RegistationPage from "../AuthenticationLayout/RegistationPage";

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
                element: <ServiceDetails/>,
                loader: ({params})=>fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path:"/addservice",
                element: <AddNewService/>
            },
            {
                path:"/login",
                element:<LoginPage/>
            },
            {
                path:"/signup",
                element:<RegistationPage/>
            }
        ]
    }
])

export default router;