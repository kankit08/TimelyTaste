import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import LandingPage from "../Components/Pages/LandingPage/LandingPage"
import NotFound from "../Components/Pages/NotFound"
import About from "../Components/Pages/About"
import Restaurant from "../Components/Pages/Restaurant"

const AppRouter = createBrowserRouter ([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <NotFound/>,

        children: [
            {
                index: true,
                 element: <LandingPage/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "restaurant",
                element: <Restaurant/>
            },
            // {
            //     path: "dashboard",
            //     element: <Restaurant/>
            // },
        ]
    }
])

export default AppRouter