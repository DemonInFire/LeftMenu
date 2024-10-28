import { ILeftMenuConfig } from "../../../../../types/LeftMenuTypes";

type TLeftMenuItemProps = {
  config: ILeftMenuConfig,
  isOpen: boolean,
  parentLink?: string,
  isSubMenu?: boolean,
};

export default TLeftMenuItemProps;