export const useLayout = () => {
  const isOpenSideBar = useState<boolean>('is-open-side-bar', () => false)

  const toggleIsOpenSideBar = () => {
    isOpenSideBar.value = !isOpenSideBar.value
  }

  return {
    isOpenSideBar,
    // functions
    toggleIsOpenSideBar,
  }
}
