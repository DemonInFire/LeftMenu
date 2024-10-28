import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { FullScreen } from "./components/ui";
import { allPathes } from "./const/path";
import Reports from "./containers/reports/Reports";
import Shop from "./containers/shop/Shop";
import Tasks from "./containers/tasks/Tasks";
import Tickets from "./containers/tickets/Tickets";
import Trends from "./containers/trends/Trends";
import { ClientRootList } from "./roots/ClientRoot";
import { InventoryRootList } from "./roots/InventoryRootList";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <FullScreen />,
      children: [
        {
          path: allPathes.reports,
          element: <Reports />,
        },
        {
          path: allPathes.shop,
          element: <Shop />,
        },
        ...ClientRootList,
        ...InventoryRootList,
        
        {
          path: allPathes.tasks,
          element: <Tasks />,
        },
        {
          path: allPathes.tickets,
          element: <Tickets />,
        },
        {
          path: allPathes.trends,
          element: <Trends />,
        },
        {
          path: '*',
          element: <Navigate replace to={allPathes.trends} />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
};

export default App