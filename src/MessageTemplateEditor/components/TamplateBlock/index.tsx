import { memo } from 'react';
import { MyTextArea } from '../../../shared/components/MyTextArea';
import { TtamplateStruct } from '../../types';
import { IfBlock } from '../IfBlock';
import styles from './index.module.scss';
import { ChildrenPropsFunctions } from '../../widgets/TamplateEditor';
import { RecusiveIsEqual } from '../../../shared/utils/RecusiveIsEqual/RecusiveIsEqual';


type TProps = {
    tamplate: TtamplateStruct;
    path: string[];
    functions: ChildrenPropsFunctions;
}

export const TamplateBlock = memo((props:TProps)=>{
    let {tamplate, path} = props;
    let {ChangeState, OnChangeCursorPosition} = props.functions; 
    
    let myPath = [...path, "First"];


    function OnChangeTextArea(newValue: string){
        ChangeState?.(myPath, newValue);
    }


    return <div className={styles.TamplateBlock}>
        <MyTextArea 
            value={tamplate.First} 
            onChange={OnChangeTextArea}
            OnChangeCursorPosition = {(num)=>OnChangeCursorPosition(myPath,num)}
        />

        {tamplate.IFblocks&&<IfBlock 
            ifParams={tamplate.IFblocks} 
            path={[...path, "IFblocks"]}
            functions={props.functions}
        />}
        
        {tamplate.Last&&
        <TamplateBlock 
            tamplate={tamplate.Last} 
            path={[...path, "Last"]}
            functions={props.functions}
        />}
    </div>
},(prevProps,nextProps)=>RecusiveIsEqual(prevProps.tamplate,nextProps.tamplate))