import '../style/inputForm.css'
export default function Input(props) {
    const array = props.att
    const inputs = array.map((component, index) => {
        return (
            <label key={index}>{component.label}
                <input type={component.type} />
            </label>
        )
    })
    return (inputs)
}