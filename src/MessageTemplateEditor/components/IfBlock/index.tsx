import { Button } from '../../../shared/components/Button';
import { MyInput } from '../../../shared/components/MyInput';
import { IFblock } from '../../types';
import { TamplateBlock } from '../TamplateBlock';
import styles from './index.module.scss';

type TProps = {
    ifParams: IFblock;
    path: string[];
    ChangeState:(path:string[], newvalue:string)=>void;
    DeleteIfBlock:(path:string[])=>void;
}

export function IfBlock(props:TProps){
    let {ifParams, path, ChangeState, DeleteIfBlock} = props;
    const {ifConditionParam, Then, Else} = ifParams;
    
    let myPath = [...path, "ifConditionParam"];


    function OnChangeInput(newValue: string){
        ChangeState?.(myPath, newValue);
    }
    function DeleteClick(){
        DeleteIfBlock?.(path);
    }


    return <div className={styles.IfBlock}>
        {/* if */}
        <div style={{height:"60px",marginTop:"5px"}}>
            <div style={{paddingTop:"7px"}}>
                <span>If</span>
                <Button name={"delete"} onClick={DeleteClick}/>
            </div>
            <div className={styles.TextAreaConteiner}>
                <MyInput 
                    value={ifConditionParam} 
                    placeholder={"param name"} 
                    onChange={OnChangeInput}
                />
            </div>
        </div>

        {/* Then */}
        <div style={{marginTop:"5px"}}>
            <div>
                <span>Then</span>
            </div>
            <div className={styles.TextAreaConteiner}>
                <TamplateBlock 
                    tamplate={Then} 
                    path={[...path,"Then"]} 
                    ChangeState={ChangeState}
                    DeleteIfBlock={DeleteIfBlock}
                />
            </div>
        </div>

        {/* Else */}
        <div style={{margin:"5px 0px"}}>
            <div>
                <span>Else</span>
            </div>
            <div className={styles.TextAreaConteiner}>
                <TamplateBlock 
                    tamplate={Else} 
                    path={[...path,"Else"]}
                    ChangeState={ChangeState}
                    DeleteIfBlock={DeleteIfBlock}
                />
            </div>
        </div>
    </div>
}