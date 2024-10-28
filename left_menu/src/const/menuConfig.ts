import { allPathes } from "./path";

const menuConfig = [
  {menuName: 'Trends', menuLink: allPathes.trends}, 
  {menuName: 'Tasks', menuLink: allPathes.tasks}, 
  {menuName: 'Tickets', menuLink: allPathes.tickets}, 
  {menuName: 'Clients', subMenu: [{menuName: 'List', menuLink: allPathes.clientsList}, {menuName: 'Reviews', menuLink: allPathes.clientsReviews}, {menuName: 'Notification', menuLink: allPathes.clientsNotifications}]}, 
  {menuName: 'Inventory', subMenu: [{menuName: 'Orders', menuLink: allPathes.inventoryOrders}, {menuName: 'Products', menuLink: allPathes.inventoryProducts}, {menuName: 'Supplies', menuLink: allPathes.inventorySupplies}]}, 
  {menuName: 'Shop', menuLink: allPathes.shop}, 
  {menuName: 'Reports', menuLink: allPathes.reports}
];

export default menuConfig;