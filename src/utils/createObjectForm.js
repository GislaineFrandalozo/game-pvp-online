function base64() {
  const imgUser = document.querySelector(".imgUser").attributes
  const base64 = imgUser.src.nodeValue
  return base64;
}
function createObjectForm(inputTag, json) {
  let value
  inputTag.type === "file" ? value = base64() : value = inputTag.value
  json = { ...json, [inputTag.name]: value }
  return json
}

export { createObjectForm }
