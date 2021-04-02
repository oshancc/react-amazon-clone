import React from 'react'

export const ErrorMessage = (props) => {
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
           {props.children} 
        </div>
    )
}
