import React from 'react';

const ButtonsPanel = (props) => {
    const style = {
        backgroundColor: 'tomato',
        padding: '0.5em',
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center'
    }

    return (
        <div style={{ ...props.style, ...style }} onClick={() => props.buttonClick(props.value)}>{props.value}</div>
    )
}

export default ButtonsPanel
