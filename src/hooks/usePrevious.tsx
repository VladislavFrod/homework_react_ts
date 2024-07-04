import {useRef} from "react";


export const usePrevious = (value:number) => {
    const currentValue = useRef<number>(value);
    const previousValue = useRef<number>();
    if (currentValue.current !== value){
        previousValue.current = currentValue.current;
        currentValue.current = value;
    }
    return [currentValue.current, previousValue.current];
}