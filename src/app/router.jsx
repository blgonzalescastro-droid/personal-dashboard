import { createBrowserRouter } from "react-router";

// Layout
import { DashboardLayout } from "../common/layouts/dashboard-layout";

// Features (Páginas directas)
import { HomePage } from "../features/home/pages/home";
import { AboutPage } from "../features/about/pages/about";
import { TodoListPage } from "../features/todolist/pages/todolist";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: DashboardLayout,
            children: [
                { index: true, Component: HomePage },
                { path: "about", Component: AboutPage },
                { path: "todolist", Component: TodoListPage },
            ],
        },
    ],
    {
        // Sincorinización con URL de GitHub Pages
        basename: "/personal-dashboard",
    }
);