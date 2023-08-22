import { useEffect, useRef, useState } from 'react';
import { Button } from '../../../shared/components/Button';
import { ParamsList } from '../../components/ParamsList';
import { TamplateBlock } from '../../components/TamplateBlock';
import { TTamplateConfig, TTamplateStruct } from '../../types';

import styles from './index.module.scss';
import { CreateRecursiveCopy} from '../../../shared/utils/CreateRecursiveCopy/CreateRecursiveCopy';

type TProps = {
    params: Array<string>;
    tamplate?: TTamplateConfig;
    callbackSave: (tamplate: TTamplateConfig)=>Promise<void>
    onClickPreview?: (tamplate: TTamplateConfig|null)=>void;
    onClickClose?: ()=>void;
}

export type ChildrenPropsFunctions = {
    DeleteIfBlock: (path:string[])=>void;
    ChangeState: (path:string[], newValue:string)=>void;
    ChangeCursorPosition: (path:string[],selection: number|null)=>void;
}

export function TamplateEditor(props:TProps){
    let {params, tamplate, callbackSave , onClickPreview, onClickClose} = props;
    let [tamplateState, setTamplateState] = useState<TTamplateStruct>(tamplate?.Tamplate||{First:""});

    let lastInputPath = useRef<Array<string>>([]);
    let lastCursorPosition = useRef<number|null>(null);


    function AddIfBlock(){
        if (lastCursorPosition.current === null) return;
        if (lastInputPath.current.length === 0) return;
        setTamplateState((prev)=>{
            let path = lastInputPath.current;
            let pos = lastCursorPosition.current;

            let text = GetValueByPath(path);

            let copy = CreateRecursiveCopy(prev!) as TTamplateStruct;
            let elem:any = copy;
            path.forEach((str, i) => {if (i < path.length - 1) elem = elem[str];})

            let newLast = {First: text.slice(pos!), IFBlocks: elem.IFBlocks, Last: elem.Last,}
            elem.First = text.slice(0, pos!);
            elem.Last = newLast;
            elem.IFBlocks = {IfConditionParam: {First: ""}, Then: {First: ""}, Else: {First: ""}} 

            return copy;
        })
    }
    function ClickParams(param: string){
        let path = lastInputPath.current.length > 0 ? lastInputPath.current : ["First"];
        
        let oldValue = GetValueByPath(path);

        let pos = lastCursorPosition.current === null ? oldValue.length : lastCursorPosition.current;
        let newValue = oldValue.slice(0,pos) + `{${param}}` + oldValue.slice(pos);

        ChangeCursorPosition(lastInputPath.current, lastCursorPosition.current!+(`{${param}}`).length);
        ChangeState(path, newValue);
    }


    function DeleteIfBlock(path: string[]){
        setTamplateState((prev)=>{
            let copy = CreateRecursiveCopy(prev) as TTamplateStruct;
            let elem: any = copy;
            path.forEach((str, i)=>{ if (i !== path.length - 1) elem = elem[str]; })

            delete elem.IFBlocks;
            elem.IFBlocks = elem.Last!.IFBlocks;
            elem.First += elem.Last!.First;
            elem.Last = elem.Last!.Last

            try{
                GetValueByPath(lastInputPath.current,copy)
            }catch{
                ChangeCursorPosition(["First"], copy["First"].length);
            }
            return copy;
        });
    }
    function ChangeState(path: string[], newValue: string){
        setTamplateState((prev)=>{
            let copy = CreateRecursiveCopy(prev) as TTamplateStruct;
            let elem:any = copy;
            path.forEach((str,i)=>{
                if (i === path.length - 1) return elem[str] = newValue;
                elem = elem[str];
            })

            return copy;
        });
    }
    function GetValueByPath(path: string[],tamplate: TTamplateStruct = tamplateState):string{
        let elem: any = tamplate;
        let result: string = "";

        path.forEach((str, i)=>{
            if (i === path.length - 1) return result = elem[str];
            elem = elem[str];
        })
        return result;
    }
    function ChangeCursorPosition(path: string[],selectionPosition: number|null){
        lastInputPath.current = path;
        lastCursorPosition.current = selectionPosition;
    }


    useEffect(() => ChangeCursorPosition(["First"], tamplate?.Tamplate["First"].length || 0), [tamplate]);


    return <div className = {styles.tamplateEditor}>
        <div style={{height: "40px"}}></div>
        <h1>Message Template Editor</h1>
        <div style={{height: "20px"}}></div>

        {/* ParamsList */}
        <ParamsList 
            params={params} 
            onClick={ClickParams}
        />

        {/* + Add If/Then/Else */}
        <div style={{display: "flex", justifyContent: "center", margin: "20px 0px 10px 0"}}>
            <div style={{margin: "5px"}}>
                <Button name='+ Add If/Then/Else' onClick={AddIfBlock}/>
            </div>
        </div>

        {/* Renderer */}
        <TamplateBlock 
            tamplate={tamplateState} 
            path={[]} 
            functions={{ChangeState,DeleteIfBlock,ChangeCursorPosition}}
        />

        {/* Preview/Save/Close */}
        <div style={{display: "flex", justifyContent: "center", margin: "40px 0px"}}>
            <div style={{margin: "5px"}}>
                <Button name='Preview' onClick={()=>onClickPreview?.({Tamplate: tamplateState, ParamList: params})}/>
            </div>
            <div style={{margin: "5px"}}>
                <Button name='Save' onClick={()=>callbackSave?.({Tamplate: tamplateState, ParamList: params})}/>
            </div>
            <div style={{margin:"5px"}}>
                <Button name='Close' onClick={onClickClose}/>
            </div>
        </div>
        <div style={{height:"100px"}}></div>
    </div>
}