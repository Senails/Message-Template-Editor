import { ButtonList } from '../../shared/components/ButtonsList';
import { ParamsList } from './components/ParamsList';
import styles from './index.module.scss';

type Ttamplate = any;
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
    function addSimpleBlock(){
        console.log("addFreeBlock");
    }
    function removeBlock(){

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
        <ParamsList params={params} onClick={сlickParams}/>

        <div style={{height:"10px"}}></div>
        <ButtonList names={["+ Add If/Then/Else","+ Add Simple Block"]} justifyContent="center" onClick={(i)=>[addIfBlock,addSimpleBlock][i]()}/>
        <div style={{height:"10px"}}></div>



        <div style={{height:"100px",border:"1px solid red"}}></div>



        <div style={{height:"10px"}}></div>
        <ButtonList names={["Preview","Save","Close"]} justifyContent="center" onClick={(i)=>[clickPreview,clickSave,clickClose][i]()}/>
        <div style={{height:"10px"}}></div>
    </div>
}