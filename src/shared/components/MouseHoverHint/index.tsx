import React, { useMemo } from 'react';
import { Hide, Show } from './utils';
import { CreateTrotling } from '../../utils/CreateTrottling/CreateTrotling';

type TProps = {
    text: string,
    children?: React.ReactNode,
    display?: "inline-block"|"block",
}

export function MouseHoverHint({text, display, children}:TProps){
    let Trotling1 = useMemo(()=>CreateTrotling(Math.ceil(1000/60)),[]);
    let Trotling2 = useMemo(()=>CreateTrotling(Math.ceil(1000/60)),[]);

    function ShowHint(event: React.MouseEvent){
        Show(text, event.clientX, event.clientY);
    }
    function HideHint(){
        Hide();
    }

    return <div style={{display: display?display:"inline-block"}}
        onMouseMove={(event)=>Trotling1(()=>ShowHint(event))}
        onMouseEnter={(event)=>Trotling1(()=>ShowHint(event))}
        onMouseOver={(event)=>Trotling1(()=>ShowHint(event))}

        onMouseOut={()=>Trotling2(()=>HideHint())}
        onMouseLeave={()=>Trotling2(()=>HideHint())}
        >

        {children?children:<></>}
    </div>
}