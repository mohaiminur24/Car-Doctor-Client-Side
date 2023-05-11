import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import HomePage from "../HomeLayout/HomePage";
import ServiceDetails from "../ShareableComponents/ServiceDetails";
import AddNewService from "../AddNewServiceLayout/AddNewService";
import LoginPage from "../AuthenticationLayout/LoginPage";
import RegistationPage from "../AuthenticationLayout/RegistationPage";
import Checkoutpage from "../CheckoutLayout/Checkoutpage";
import ErrorLayout from "../ShareableComponents/ErrorLayout";
import PrivateRoute from "../AuthContextLayout/PrivateRoute";
import CheckOutService from "../CheckoutLayout/CheckOutService";

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children:[
            {
                path:"/",
                element: <HomePage/>
            },
            {
                path:"/service/:id",
                element: <PrivateRoute><ServiceDetails/></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path:"/addservice",
                element: <PrivateRoute><AddNewService/></PrivateRoute>
            },
            {
                path:"/login",
                element:<LoginPage/>
            },
            {
                path:"/signup",
                element:<RegistationPage/>
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoute><Checkoutpage/></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: "/checkout",
                element: <PrivateRoute><CheckOutService/></PrivateRoute>
            }
        ]
    }
])

export default router;