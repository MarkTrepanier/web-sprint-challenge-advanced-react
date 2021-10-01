// write your custom hook here to control your checkout form
import React, {useState} from "react";

const useForm = (initialValue)=>{
    const [value, setValue] = useState(initialValue)
    const handleChanges=(evt)=>{
        setValue({...value, [evt.target.name]: evt.target.value});
    }   

    return[value, setValue, handleChanges];
    
}

export default useForm;