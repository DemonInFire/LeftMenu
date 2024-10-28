import { allPathes } from "../const/path";
import ClientsList from "../containers/clients/containers/clientsList/ClientsList";
import ClientsNotifications from "../containers/clients/containers/clientsNotifications/ClientsNotifications";
import ClientsReviews from "../containers/clients/containers/clientsReviews/ClientsReviews";

const ClientRootList = [
  {
    path: allPathes.clientsList,
    element: <ClientsList />,
  },
  {
    path: allPathes.clientsNotifications,
    element: <ClientsNotifications />,
  },
  {
    path: allPathes.clientsReviews,
    element: <ClientsReviews />,
  },
];

export { ClientRootList };
