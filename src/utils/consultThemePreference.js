function consultThemePreference() {
  let compStyles = window.matchMedia('(prefers-color-scheme: dark)');
  return compStyles
}
export { consultThemePreference }
