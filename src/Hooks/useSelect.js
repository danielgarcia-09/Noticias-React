import { useState } from "react";

const useSelect = (initialState, opciones) => {

    //* custom hook state
    const [state, updateState] = useState(initialState);
    const SelectNews = () => (
        <select
            className="browser-default"
            value={state}
            onChange={ e => updateState(e.target.value)}
        >
            {opciones.map( op => (
                <option key={op.value} value={op.value}>{op.label}</option>
            ))}
        </select>
    )

    return [state, SelectNews];
}
 
export default useSelect;