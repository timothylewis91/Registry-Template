import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/home/HomePage";
import { homeLoader } from "./pages/home/homeLoader";
import SearchPage from "./pages/search/SearchPage";
import DetailsPage from "./pages/details/DetailsPage";
import { searchLoader } from "./pages/search/searchLoader";
import { detialsLoader } from "./pages/details/deatilsloader";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader:homeLoader,
      },
      {
        path: "/search",
        element: <SearchPage />,

        loader: searchLoader,
      },
      {
        path: "/packages/:name",
        element: <DetailsPage />,
        loader: detialsLoader,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
