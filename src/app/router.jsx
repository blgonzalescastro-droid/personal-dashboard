import { createBrowserRouter } from "react-router";

// Layout
import { DashboardLayout } from "../common/layouts/dashboard-layout";

// Features (Páginas directas)
import { HomePage } from "../features/home/pages/home";
import { AboutPage } from "../features/about/pages/about";
import { TodoListPage } from "../features/todolist/pages/todolist";
import { PokemonPage } from "../features/pokemon/pages/pokemon";
import { ProtectedRoute } from "../features/auth/components/protected-route";
import { LoginPage } from "../features/auth/pages/login";

export const router = createBrowserRouter(
    [
        {
            path: "/login",
            Component: LoginPage,
        },
        {
            Component: ProtectedRoute,
            children: [
                {
                    path: "/",
                    Component: DashboardLayout,
                    children: [
                        { index: true, Component: HomePage },
                        { path: "about", Component: AboutPage },
                        { path: "todolist", Component: TodoListPage },
                        { path: "pokemon", Component: PokemonPage },
                    ],
                },
            ],
        },
    ],
    {
        // Sincronización con URL de GitHub Pages
        basename: "/personal-dashboard",
    }
);