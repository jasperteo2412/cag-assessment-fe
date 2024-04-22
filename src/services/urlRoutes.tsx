import React from "react";
import LandingPage from "components/landing/LandingPage";
import ErrorPage from "components/error/ErrorPage";
import SearchPage from "components/search/SearchPage";
import { Navigate } from "react-router-dom";
import SearchDatePage from "components/searchDate/SearchDatePage";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        path: '/home',
        element: <LandingPage/>
    },
    {
        path: '/search',
        element: <SearchPage/>
    },
    {
        path: '/search/date',
        element: <SearchDatePage/>
    },
    {
        path: '/',
        element: <Navigate to={'/home'} />
    },
    {
        path: '*',
        element: <ErrorPage/>
    }
]