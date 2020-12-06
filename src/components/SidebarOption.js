import React from 'react';
import styled from 'styled-components'

function SidebarOption({ text, Icon, active }) {
    return (
        <Div active={active}>
            <Icon />
            <h2>{text}</h2>
        </Div>
    )
}

export default SidebarOption;

const Div = styled.div`
display: flex;
align-items: center;
cursor: pointer;

${props => props.active && `
    color: var(--twitter-color);
    `}

:hover{
    background-color: #e8f5fe;
    border-radius: 30px;
    color: var(--twitter-color);
    transition: color 100ms ease-out;
}
.MuiSvgIcon-root {
    padding: 20px;
}

h2{
    font-weight: 800;
    font-size: 20px;
    margin-right: 20px;
}
`
