import { Button } from '../../shared/components/Button';
import { ParamsList } from './components/ParamsList';
import { Ttamplate } from './types';

import styles from './index.module.scss';

type TProps = {
    params : Array<string>;
    tamplate? : Ttamplate;
}

export function TamplateEditor({params, tamplate}:TProps){

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
        {/* ParamsList */}
        <ParamsList params={params} onClick={сlickParams}/>

        {/* + Add If/Then/Else */}
        <div style={{height:"20px"}}></div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <div style={{margin:"5px"}}><Button name='+ Add If/Then/Else' onClick={addIfBlock}/></div>
            </div>
        <div style={{height:"20px"}}></div>

        {/* Renderer */}
        <div style={{height:"100px",border:"1px solid red"}}>

        </div>

        {/* Preview/Save/Close */}
        <div style={{height:"20px"}}></div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <div style={{margin:"5px"}}><Button name='Preview' onClick={clickPreview}/></div>
                <div style={{margin:"5px"}}><Button name='Save' onClick={clickSave}/></div>
                <div style={{margin:"5px"}}><Button name='Close' onClick={clickClose}/></div>
            </div>
        <div style={{height:"20px"}}></div>
    </div>
}