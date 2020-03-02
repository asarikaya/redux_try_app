import React from "react";

const TextInput = ({name,label,onChange,placeHolder,value,error}) => {
    let wrapperClass = "form-group"
    if(error&&error.length>0){
        wrapperClass += " has-error" 
    }

    return(
        <div className={wrapperClass}>
            <label htmlFor={name}></label>
            <div className="field">
                <input type="text" name={name} className="formControl"/>
            </div>
        </div>
    )

};

export default TextInput;