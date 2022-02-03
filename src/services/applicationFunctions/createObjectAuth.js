function base64() {
    const imgUser = document.querySelector(".imgUser").attributes
    const base64 = imgUser.src.nodeValue
    return base64;
}
export function createObjectAuth(imputTag, json) {
    let value
    console.log(imputTag)
    imputTag.type === "file" ? value = base64() : value = imputTag.value
    json = { ...json, [imputTag.name]: value }
    return json
}