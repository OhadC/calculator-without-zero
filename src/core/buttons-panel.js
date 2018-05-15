import React from 'react';

const gridStyling = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)'
}

const ButtonsPanel = (props) => {
    const divisiton = (a, b) => a / b
    const multiplication = (a, b) => a * b
    const addition = (a, b) => a + b
    const subtraction = (a, b) => a - b

    const numberDivs = (function () {
        const result = []
        for (let i = 9; i >= 0; i--) {
            result.push(<div key={i} onClick={() => props.numberPressHandle(i)}>{i}</div>)
        }
        return result
    })()

    return (
        <div style={gridStyling}>
            {numberDivs.slice(0, 3)}
            <div onClick={() => props.operationPressHandle(divisiton)}>÷</div>
            {numberDivs.slice(3, 6)}
            <div onClick={() => props.operationPressHandle(multiplication)}>x</div>
            {numberDivs.slice(6, 9)}
            <div onClick={() => props.operationPressHandle(addition)}>+</div>
            <div onClick={() => props.erasePressHandle()}>c</div>
            <div style={{ gridColumn: 'span 2' }} onClick={() => props.equalPressHandle()}>=</div>
            <div onClick={() => props.operationPressHandle(subtraction)}>-</div>
        </div>

    )
}

export default ButtonsPanel;
