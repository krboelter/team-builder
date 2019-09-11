import React, { useState } from "react";
import styled from "styled-components";

function AddField(props) {
    const initialMember = {name: "", email: "", role: ""}
    const [member, setMember] = useState(initialMember);

    const Button = styled.button`
        width: 125px;
        margin: 20px auto;
        color: maroon;
        font-size: 18px;
        background-color: dodgerblue;
        padding: 10px 30px
        border-radius: 8px;
        border: 3px solid maroon;

        &: hover{
            background-color: black;
        }
    `

    const handleChange = event => {
        setMember({
            ...member,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        
        console.log(member);
    }

    const reset = () => {
        setMember(initialMember)
    }

    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                    value={member.name}
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={member.email}
                />

                <input
                    type="text"
                    placeholder="Role"
                    name="role"
                    onChange={handleChange}
                    value={member.role}
                />

                <Button type="submit">Submit</Button>
                <button type="button" onClick={reset} >Reset</button>
            </form>
        </div>
    );
}

export default AddField