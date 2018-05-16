import React from 'react';

import Button from './button'

const ButtonsPanel = (props) => {
    const gridStyling = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        gridGap: '0.5em'
    }

    return (
        <div style={gridStyling}>
            {['7', '8', '9', '÷'].map(char => <Button key={char} buttonClick={props.buttonClick} value={char} />)}
            {['4', '5', '6', 'x'].map(char => <Button key={char} buttonClick={props.buttonClick} value={char} />)}
            {['1', '2', '3', '-'].map(char => <Button key={char} buttonClick={props.buttonClick} value={char} />)}

            <Button buttonClick={props.buttonClick} value={'c'} />
            <Button style={{ gridColumn: 'span 2' }} buttonClick={props.buttonClick} value={'='} />
            <Button buttonClick={props.buttonClick} value={'+'} />
        </div>

    )
}

export default ButtonsPanel
