import React, { useState } from "react";
import useInput from "../Hooks/useInput";

function InputComponent() {
    const [value, setValue] = useInput("");

    return (
        <>
            <input type="text" onChange={setValue} />
            <div>{value}</div>
        </>
    );
}

export default InputComponent;
