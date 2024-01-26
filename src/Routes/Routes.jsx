import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import NewsCard from "../Pages/Shared/NewsCard/NewsCard";


const router= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children :[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: 'category/:id',
                element: <NewsCard></NewsCard>
            }
        ]
    }
])


export default router;