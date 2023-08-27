import React from 'react';
import './entiti';

type TProps = {
    text: string,
    children?: React.ReactNode,
    style?: string,
}

export function MouseHoverHint({text, style, children}:TProps){
    return <hover-hint text={text} style={style}>
        {children}
    </hover-hint>
}