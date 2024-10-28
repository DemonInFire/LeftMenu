type TModalProps = {
  isModalOpen: boolean, 
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  children: string | JSX.Element | JSX.Element[]
};

export default TModalProps;