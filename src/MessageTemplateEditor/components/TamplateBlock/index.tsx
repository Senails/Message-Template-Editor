import { memo } from 'react';
import { MyTextArea } from '../../../shared/components/MyTextArea';
import { TTamplateStruct } from '../../types';
import { IfBlock } from '../IfBlock';
import styles from './index.module.scss';
import { ChildrenPropsFunctions } from '../../widgets/TamplateEditor';
import { RecursiveIsEqual } from '../../../shared/utils/RecursiveIsEqual/RecursiveIsEqual';
import { MouseHoverHint } from '../../../shared/components/MouseHoverHint';


type TProps = {
    tamplate: TTamplateStruct;
    path: string[];
    functions: ChildrenPropsFunctions;
}

export const TamplateBlock = memo((props:TProps)=>{
    let {tamplate, path} = props;
    let {ChangeState, ChangeCursorPosition} = props.functions; 
    
    let myPath = [...path, "First"];


    function OnChangeTextArea(newValue: string){
        ChangeState?.(myPath, newValue);
    }
    function TogleNewLine(){
        if (tamplate.First[0]==="\n"){
            ChangeState(myPath,tamplate.First.slice(1));
        } else ChangeState(myPath,"\n"+tamplate.First);
    }

    
    return <div>
        {/* First */}
        <div style={{position:"relative"}}>
            <MyTextArea 
                value={tamplate.First} 
                onChange={OnChangeTextArea}
                OnChangeCursorPosition = {(num)=>ChangeCursorPosition(myPath,num)}
            />

            {/* togle checkbox for new line */}
            <span className={styles.CheckBox+" noselect"}>
                new line {`(${tamplate.First[0]==="\n"?"enabled":"disabled"})   `}
                <span style={{cursor:"pointer"}} onClick={TogleNewLine}>
                    <MouseHoverHint text={tamplate.First[0]==="\n"?
                        `Удалить перенос строки в начале`:`Добавить перенос строки в начало`}>
                        {`[click]`}
                    </MouseHoverHint>
                </span>
            </span>
        </div>

        {/* IF */}
        {tamplate.IFBlocks&&<IfBlock 
            ifParams={tamplate.IFBlocks} 
            path={[...path, "IFBlocks"]}
            functions={props.functions}
        />}
        
        {/* Last */}
        {tamplate.Last&&
        <TamplateBlock 
            tamplate={tamplate.Last} 
            path={[...path, "Last"]}
            functions={props.functions}
        />}
    </div>
},(prevProps,nextProps)=>RecursiveIsEqual(prevProps.tamplate,nextProps.tamplate));