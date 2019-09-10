import React from "react";
import styled from "styled-components";

function AddField() {

    const InputStyle = styled.input`
        margin: 10px 0;
    `


    return(
        <div>
            <form className="form">
                <InputStyle
                    type="text"
                    placeholder="Name"
                    name="name"
                />

                <InputStyle
                    type="text"
                    placeholder="Email"
                    name="email"
                />

                <InputStyle
                    type="text"
                    placeholder="Role"
                    name="role"
                />
            </form>
        </div>
    );
}

export default AddField