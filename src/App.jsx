import { RouterProvider, createBrowserRouter } from "react-router-dom";

import List from "./pages/List";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <List />,
    },
  ],
  {
    basename: "/kfc",
  }
);

export default function App() {
  return <RouterProvider router={router} />;
}
