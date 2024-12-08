import { createBrowserRouter, RouterProvider } from "react-router";

import IndexPage from "@/pages";

const App = () => {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: "/",
          element: <IndexPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
