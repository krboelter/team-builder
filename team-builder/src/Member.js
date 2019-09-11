import React from "react";
import styled from "styled-components";

function Member(props) {

    const Box = styled.div`
        width: 20%;
        margin: 10px auto;
        border: 3px solid black;
        border-radius: 10px;
    `

    return (
        <>
            {props.team.map((team, index) => {
                return <Box className="team" key={index}>
                    <h2>{team.name}</h2>
                    <h2>{team.email}</h2>
                    <h2>{team.role}</h2>
                </Box>
            })}
        </>
    )
}

export default Member