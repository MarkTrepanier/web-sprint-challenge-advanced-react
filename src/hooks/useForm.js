// write your custom hook here to control your checkout form
import React, {useState} from "react";

const useForm = (initialValue)=>{
    const [value, setValue] = useState(initialValue)
    const handleChanges=(evt)=>{
        setValue({...value, [e.target.name]: e.targetvalue});
    }   

    return[value, setValue, handleChanges];
    
}

export default useForm;