    // My component
import { useThemeContext } from '../utils/contextReact'
    // Style
import "../style/asideForm.css"

function Aside() {
  let [total, setTotal] = useThemeContext();
  let auxiliary = total.value + 1

  return <aside>
  <button onClick={() => {
   
    setTotal({ value: auxiliary })
    }} >
    {total.value}
    
    </button> 
    </aside>
}

export { Aside }
