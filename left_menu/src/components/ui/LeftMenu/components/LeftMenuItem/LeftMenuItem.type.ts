import { ILeftMenuConfig } from "../../../../../types/LeftMenuTypes";

type TLeftMenuItemProps = {
  config: ILeftMenuConfig,
  isOpen: boolean,
  isScreenSm: boolean,
  closeModal?: () => void,
  parentLink?: string,
  isSubMenu?: boolean,
};

export default TLeftMenuItemProps;