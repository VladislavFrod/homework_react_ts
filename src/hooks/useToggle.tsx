import {useState} from "react"

export const useToggle = (initValue: boolean) => {
    const [value, setValue] = useState<boolean>(initValue)
    const handleToggle = () => setValue((boolValue: boolean) => !boolValue);
    return {value, handleToggle};
}