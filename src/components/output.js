import React from 'react';

const Output = (props) => {
    const style = {
        backgroundColor: 'cornflowerblue',
        padding: '0.5em',
        display: 'grid',
        justifyItems: 'right',
        alignItems: 'center'
    }

    return (
        <div style={{...props.style, ...style}}>{props.result}</div>
    )
}

export default Output
