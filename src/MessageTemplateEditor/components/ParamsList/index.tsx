import { Button } from '../../../shared/components/Button';
import styles from './index.module.scss';

type TProps = {
    params : string[];
    onClick? : (name: string) => void;
}

export function ParamsList({params, onClick}:TProps){
    return <div className={styles.ParamsList}>
        <p>Parametrs:</p>
        {params.map((str,i)=><Button name={`{${str}}`} key={i} onClick={()=>onClick?.(str)}/>)}
    </div>
}