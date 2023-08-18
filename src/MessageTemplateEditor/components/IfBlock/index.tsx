import { Button } from '../../../shared/components/Button';
import { MyInput } from '../../../shared/components/MyInput';
import { IFblock } from '../../types';
import { TamplateBlock } from '../TamplateBlock';
import styles from './index.module.scss';

type TProps = {
    ifParams: IFblock;
}

export function IfBlock({ifParams}:TProps){
    const {ifConditionParam, Then, Else} = ifParams;

    return <div className={styles.IfBlock}>
        {/* if */}
        <div style={{height:"60px",marginTop:"5px"}}>
            <div style={{paddingTop:"7px"}}>
                <span>If</span>
                <Button name={"delete"}/>
            </div>
            <div className={styles.TextAreaConteiner}>
                <MyInput value={ifConditionParam} placeholder={"param name"}/>
            </div>
        </div>

        {/* Then */}
        <div style={{marginTop:"5px"}}>
            <div>
                <span>Then</span>
            </div>
            <div className={styles.TextAreaConteiner}>
                <TamplateBlock tamplate={Then}/>
            </div>
        </div>

        {/* Else */}
        <div style={{margin:"5px 0px"}}>
            <div>
                <span>Else</span>
            </div>
            <div className={styles.TextAreaConteiner}>
                <TamplateBlock tamplate={Else}/>
            </div>
        </div>
    </div>
}