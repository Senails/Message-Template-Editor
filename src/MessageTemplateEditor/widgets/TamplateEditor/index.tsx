import { Button } from '../../../shared/components/Button';
import { ParamsList } from '../../components/ParamsList';
import { TamplateBlock } from '../../components/TamplateBlock';
import { Ttamplate } from '../../types';

import styles from './index.module.scss';

type TProps = {
    params : Array<string>;
    tamplate? : Ttamplate;
    saveTamplate? : (tamplate: Ttamplate)=>Promise<void>
}

export function TamplateEditor({params, tamplate}:TProps){
    let temp: Ttamplate = {
        First: "12345",
    }

    function сlickParams(param: string){
        console.log(param);
    }

    function addIfBlock(){
        console.log("addIfBlock");
    }
    function removeIfBlock(){

    }

    function clickPreview(){
        console.log("clickPreview");
    }
    function clickSave(){
        console.log("clickSave");
    }
    function clickClose(){
        console.log("clickClose");
    }

    return <div className = {styles.tamplateEditor}>
        <h1 style={{textAlign:"center",color:'white',margin:"20px 0px"}}>Message Template Editor`</h1>

        {/* ParamsList */}
        <ParamsList params={params} onClick={сlickParams}/>

        {/* + Add If/Then/Else */}
        <div style={{display:"flex",justifyContent:"center",margin:"40px 0px 10px 0"}}>
            <div style={{margin:"5px"}}><Button name='+ Add If/Then/Else' onClick={addIfBlock}/></div>
        </div>

        {/* Renderer */}
        <TamplateBlock tamplate={tamplate||temp}/>

        {/* Preview/Save/Close */}
        <div style={{display:"flex",justifyContent:"center",margin:"40px 0px"}}>
            <div style={{margin:"5px"}}><Button name='Preview' onClick={clickPreview}/></div>
            <div style={{margin:"5px"}}><Button name='Save' onClick={clickSave}/></div>
            <div style={{margin:"5px"}}><Button name='Close' onClick={clickClose}/></div>
        </div>
    </div>
}