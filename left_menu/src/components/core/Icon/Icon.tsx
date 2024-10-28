import { iconSizes } from './consts/iconSizes';
import { iconTypes } from './consts/iconTypes';
import TIconProps from './Icon.type';

const Icon = ({ handleClick, type, size }: TIconProps) => {
  const iconByIconType = iconTypes[type];
  const iconSize = iconSizes[size];

  return (
    <img 
      width={iconSize.width} 
      height={iconSize.height} 
      src={iconByIconType.src} 
      alt={iconByIconType.alt} 
      style={{cursor: 'pointer'}} 
      onClick={handleClick} 
    />
  )
};

export default Icon;