import React from 'react';
import { HintManager } from './entiti';

type TProps = {
    text: string,
    children?: React.ReactNode,
    type?: "wrap"|"fill",
}

export function MouseHoverHint({text, type = "wrap", children}:TProps){

    function ShowHint(event: React.MouseEvent){
        if (window.navigator.maxTouchPoints !== 0) return;
        HintManager.Show(text, event.clientX, event.clientY)
    }
    function HideHint(){
        if (window.navigator.maxTouchPoints !== 0) return;
        HintManager.Hide();
    }


    return <div style={{
            display: (type === "fill" ? "block" : "inline-block"),
            width: (type === "fill" ? "100%" : "auto"),
            height: (type === "fill" ? "100%" : "auto"),
        }}
        onMouseMove={ShowHint}
        onMouseLeave={HideHint}
        >
        {children ? children : <></>}
    </div>
}