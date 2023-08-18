import { useState } from 'react';
import { Button } from '../../../shared/components/Button';
import { ParamsList } from '../../components/ParamsList';
import { TamplateBlock } from '../../components/TamplateBlock';
import { Ttamplate } from '../../types';

import styles from './index.module.scss';

type TProps = {
    params : Array<string>;
    tamplate? : Ttamplate;
    saveTamplate? : (tamplate: Ttamplate)=>Promise<void>
    onClickPreview? : (tamplate: Ttamplate)=>void;
    onClickClose? : ()=>void;
}

export function TamplateEditor(props:TProps){
    let {params, tamplate, saveTamplate, onClickPreview, onClickClose} = props;
    let [tamplateState, setTamplateState] = useState(tamplate||{First: "start"});


    function сlickParams(param: string){
        console.log(param);
    }
    function addIfBlock(){
        console.log("addIfBlock");
    }
    function DeleteIfBlock(path:string[]){
        console.log(path);
    }
    function ChangeState(path:string[], newvalue:string){
        console.log(path, newvalue);
    }


    return <div className = {styles.tamplateEditor}>
        <h1>Message Template Editor</h1>

        {/* ParamsList */}
        <ParamsList 
            params={params} 
            onClick={сlickParams}
        />

        {/* + Add If/Then/Else */}
        <div style={{display:"flex",justifyContent:"center",margin:"40px 0px 10px 0"}}>
            <div style={{margin:"5px"}}>
                <Button name='+ Add If/Then/Else' onClick={addIfBlock}/>
            </div>
        </div>

        {/* Renderer */}
        <TamplateBlock 
            tamplate={tamplateState} 
            path={[]} 
            ChangeState={ChangeState} 
            DeleteIfBlock={DeleteIfBlock}
        />

        {/* Preview/Save/Close */}
        <div style={{display:"flex",justifyContent:"center",margin:"40px 0px"}}>
            <div style={{margin:"5px"}}><Button name='Preview' onClick={()=>onClickPreview?.(tamplateState)}/></div>
            <div style={{margin:"5px"}}><Button name='Save' onClick={()=>saveTamplate?.(tamplateState)}/></div>
            <div style={{margin:"5px"}}><Button name='Close' onClick={onClickClose}/></div>
        </div>
    </div>
}