import Main from "../../Layout/Main";
import Login from '../../Pages/Login/Login'
import Register from '../../Pages/Register/Register'
import  PageNotFound from '../../Pages/not-found/PageNotFound'
import Media from "../../Pages/Media/Media";
import Message from "../../Pages/Message/Message";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import PostDetails from "../../Pages/Media/PostDetails";
import { async } from "@firebase/util";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MediaCard from "../../Pages/Media/MediaCard";
const { createBrowserRouter } = require("react-router-dom")

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/media',
                element: <Media />
            }, 
            {
                path: '/signlepost/:id',
                element: <PrivateRoute> <PostDetails /> </PrivateRoute>,
                loader: async ({params})=>fetch(`https://socail-media-server-nu.vercel.app/signlepost/${params.id}`)


            },
            {
                path: '/about',
                element: <About />
            }, 
            {
                path: '/message',
                element: <Message />
            }, 
            {
                path: '/login',
                element: <Login />
            }, 
            {
                path: '/register',
                element: <Register />

            },
          
        ]
    }
    ,
    {
        path: "*",
        element: <PageNotFound />
        
    }
])

export default router;