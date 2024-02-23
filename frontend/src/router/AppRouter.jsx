import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: "sdasdsa",
        children: []
    }
])