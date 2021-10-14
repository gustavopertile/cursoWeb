import React from 'react'
import './Button.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <button className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `} onClick={e => props.click && props.click(props.label)}>
        {props.label}
    </button>