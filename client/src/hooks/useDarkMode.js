import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';


export const useDarkMode = ()=>{
    const [value, setValue] = useLocalStorage('dark-mode', false)
    useEffect(() => {
        const body = document.body;
        if(value){
            
         body.classList.add("dark-mode");
        }else {
             body.classList.remove("dark-mode")
        }
       
    },[value])
    return [value, setValue];
}