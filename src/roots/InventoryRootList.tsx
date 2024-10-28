import { allPathes } from "../const/path";
import InventoryOrders from "../containers/inventory/containers/inventoryOrders/InventoryOrders";
import InventoryProducts from "../containers/inventory/containers/inventoryProducts/InventoryProducts";
import InventorySupplies from "../containers/inventory/containers/inventorySupplies/InventorySupplies";

const InventoryRootList = [
  {
    path: allPathes.inventoryOrders,
    element: <InventoryOrders />,
  },
  {
    path: allPathes.inventoryProducts,
    element: <InventoryProducts />,
  },
  {
    path: allPathes.inventorySupplies,
    element: <InventorySupplies />,
  },
];

export { InventoryRootList };
