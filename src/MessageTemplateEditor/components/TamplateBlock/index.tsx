
import { MyTextArea } from '../../../shared/components/MyTextArea';
import { Ttamplate } from '../../types';
import { IfBlock } from '../IfBlock';
import styles from './index.module.scss';

type TProps = {
    tamplate: Ttamplate;
}

export function TamplateBlock({tamplate}:TProps){
    return <div className={styles.TamplateBlock}>
        <MyTextArea value={tamplate.First}/>

        {tamplate.IFblocks?.length!>0&&tamplate.IFblocks?.map((elem)=><IfBlock ifParams={elem}/>)}
        
        {tamplate.Last&&<MyTextArea value={tamplate.Last}/>}
    </div>
}