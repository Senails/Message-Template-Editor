import React, { useMemo } from 'react';
import { HintManager } from './utils';
import { CreateTrotling } from '../../utils/CreateTrottling/CreateTrotling';

type TProps = {
    text: string,
    children?: React.ReactNode,
    display?: "inline-block"|"block",
}

export function MouseHoverHint({text, display, children}:TProps){
    let Trotling1 = useMemo(()=>CreateTrotling(Math.ceil(1000/60)),[]);

    function ShowHint(event: React.MouseEvent){
        console.log(event);
        Trotling1(() => HintManager.Show(text, event.clientX, event.clientY));
    }
    function HideHint(event: React.MouseEvent){
        HintManager.Hide();
    }


    return <div style={{display: display?display:"inline-block"}}
        onMouseMove={ShowHint}
        onMouseLeave={HideHint}
        >
        {children?children:<></>}
    </div>
}