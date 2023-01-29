import React from 'react'
import { useEffect, useState } from 'react'

export default function User(props) {
    useEffect(() => {
        console.log("useEffect data called");
    }, [props.counter])

    return (
        <div>
            <h1>{props.counter}</h1>
            <h1>{props.data}</h1>
        </div>
    )
}
