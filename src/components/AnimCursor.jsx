import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

export default function AnimCursor() {
    return (
        <AnimatedCursor
            innerSize={10}
            outerSize={20}
            color='0, 0, 0'
            outerAlpha={0.3}
            innerScale={0.7}
            outerScale={5}
        />
    )
}