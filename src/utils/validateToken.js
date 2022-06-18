import { request } from "../services/http/interfaceRequest"

function checkToken(token, route) {
    const requestAuth = new request()
    const headers = {
        Authorization: `Bearer ${token}`
    }
    return requestAuth.get(route, headers)
}

export { checkToken }
