import React from 'react';
import { HintManager } from './entiti';

type TProps = {
    text: string,
    children?: React.ReactNode,
    display?: "inline-block"|"block",
}

export function MouseHoverHint({text, display, children}:TProps){

    function ShowHint(event: React.MouseEvent){
        if (window.navigator.maxTouchPoints !== 0) return;
        HintManager.Show(text, event.clientX, event.clientY)
    }
    function HideHint(){
        if (window.navigator.maxTouchPoints !== 0) return;
        HintManager.Hide();
    }


    return <div style={{display: display?display:"inline-block"}}
        onMouseMove={ShowHint}
        onMouseLeave={HideHint}
        >
        {children?children:<></>}
    </div>
}