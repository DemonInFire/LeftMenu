const createLink = (parentPath: string, currentPath: string | undefined) => {
  const newLink = `${parentPath}` + "/" + `${currentPath}`;

  return newLink
};

export default createLink;