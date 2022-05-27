function consultThemePreference() {
  let compStyles = window.matchMedia('(prefers-color-scheme: dark)');
  console.log(compStyles.matches)

  compStyles.addEventListener("change", (e) => {
    console.log( "_______________________________", e.matches)
  });

  return compStyles
}
export { consultThemePreference }
