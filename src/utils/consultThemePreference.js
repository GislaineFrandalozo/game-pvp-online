function checkSystemForThemePreferences() {
  let compStyles = window.matchMedia('(prefers-color-scheme: dark)');
  return compStyles
}
export { checkSystemForThemePreferences }
