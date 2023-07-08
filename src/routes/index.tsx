import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Home from '../pages/home'
import Results from '../pages/results'
import Company from '../pages/company'
import Recruit from '../pages/recruit'
import Access from '../pages/access'
import Contact from '../pages/contact'

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to="/home" />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/results",
        element: <Results />,
    },
    {
        path: "/company",
        element: <Company />,
    },

    {
        path: "/recruit",
        element: <Recruit />,
    },
    {
        path: "/access",
        element: <Access />,
    },
    {
        path: "/contact",
        element: <Contact />,
    }
]