import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { allPathes } from './const/path/index.ts';
import Reports from './containers/reports/Reports.tsx';
import Shop from './containers/shop/Shop.tsx';
import Tasks from './containers/tasks/Tasks.tsx';
import Tickets from './containers/tickets/Tickets.tsx';
import Trends from './containers/trends/Trends.tsx';
import { ClientRootList } from './roots/ClientRoot.tsx';
import { InventoryRootList } from './roots/InventoryRootList.tsx';
import { FullScreen } from './components/ui/index.ts';

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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
