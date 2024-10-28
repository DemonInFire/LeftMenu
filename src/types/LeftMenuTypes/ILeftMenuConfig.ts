interface ILeftMenuConfig {
  menuName: string,
  menuLink?: string,
  subMenu?: Array<ILeftMenuConfig>
}

export default ILeftMenuConfig;