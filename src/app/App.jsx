import { RouterProvider } from "react-router";

import { router } from './router';
import { UserProvider } from "../common/providers/user-provider";

export function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}
