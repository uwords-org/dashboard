import {createBrowserRouter} from "react-router-dom";
import {
  AdminLayout,
} from "../layouts";
import { Main } from "@/pages/Main";
import { Companies } from '@/pages/Companies';
import { Users } from '@/pages/Users';

export const router = createBrowserRouter([
    // {
    //     element: <AuthLayout />,
    //     children: [
    //         {
    //             path: '/',
    //             element: <SignIn/>
    //         },
    //         {
    //             path: '/RecoveryPassword',
    //             element: <RecoveryPassword/>
    //         },
    //         {
    //             path: '/ResetPassword',
    //             element: <ResetPassword/>
    //         },
    //     ]
    // },
  {
    element: <AdminLayout />,
    children: [
      {
        path: '/',
        element: <Main/>,
      },
      {
        path: '/companies',
        element: <Companies/>,
      },
      {
        path: '/users',
        element: <Users/>,
      },
    ],
  },  
]);
