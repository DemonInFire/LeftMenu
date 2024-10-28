import { iconSizes } from "./consts/iconSizes";
import { iconTypes } from "./consts/iconTypes";

type TIconProps = {
  type: keyof typeof iconTypes,
  size: keyof typeof iconSizes,
  handleClick?: (event: React.MouseEvent<HTMLImageElement>) => void,
};

export default TIconProps;