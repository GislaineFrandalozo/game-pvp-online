import { HandleAuthentication } from "./context/authContext"
import { HandleThemeContext } from "./context/handleThemeContext"
import { MountAuthorizedRoutes } from "./context/mountAuthorizedRoutes"

function HandleRoutes() {
    return (
        <HandleThemeContext>
            <HandleAuthentication>
                <MountAuthorizedRoutes />
            </HandleAuthentication>
        </HandleThemeContext>
    )
}

export { HandleRoutes }
