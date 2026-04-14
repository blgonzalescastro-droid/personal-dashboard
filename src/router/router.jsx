import { createBrowserRouter } from "react-router";

import { Home } from "../app/home/home";
import { AboutMe } from "../app/about/about";
import { DashboardLayout } from "../common/layouts/dashboard-layout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: DashboardLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "about",
                Component: AboutMe,
            },
        ],
    },
]);