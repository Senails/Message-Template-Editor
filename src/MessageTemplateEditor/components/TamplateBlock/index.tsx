
import { MyTextArea } from '../../../shared/components/MyTextArea';
import { Ttamplate } from '../../types';
import { IfBlock } from '../IfBlock';
import styles from './index.module.scss';

type TProps = {
    tamplate: Ttamplate;
    path: string[];
    ChangeState: (path:string[], newvalue:string) => void;
    DeleteIfBlock: (path:string[]) => void;
}

export function TamplateBlock(props:TProps){
    let {tamplate, path, ChangeState, DeleteIfBlock } = props;
    let myPath = [...path, "First"];

    
    function OnChangeTextArea(newValue: string){
        ChangeState?.(myPath, newValue);
    }


    return <div className={styles.TamplateBlock}>
        <MyTextArea 
            value={tamplate.First} 
            onChange={OnChangeTextArea}
        />

        {tamplate.IFblocks&&<IfBlock 
            ifParams={tamplate.IFblocks} 
            path={[...path, "IFblocks"]}
            ChangeState={ChangeState}
            DeleteIfBlock={DeleteIfBlock}
        />}
        
        {tamplate.Last&&
        <TamplateBlock 
            tamplate={tamplate.Last} 
            path={[...path, "Last"]}
            ChangeState={ChangeState}
            DeleteIfBlock={DeleteIfBlock}
        />}
    </div>
}