import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Main from './Components/Main/Main';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import Admission from './Pages/Admission/Admission';
import Colleges from './Pages/Colleges/Colleges';
import MyCollege from './Pages/My College/MyCollege';
import AuthProviders from './providers/AuthProviders';
import CardDetails from './Home/CardDetails/CardDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
      path: '/',
      element: <Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'registration',
        element:<Registration></Registration>
      },
      {
       path:'admission',
       element:<Admission></Admission> 
      },
      {
        path:'colleges',
        element:<Colleges></Colleges>
      },
      {
        path:'myCollege',
        element:<MyCollege></MyCollege>
      },
      {
        path:'cardDetails',
        element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProviders>
<RouterProvider router={router} />
</AuthProviders>
  </React.StrictMode>,
)
