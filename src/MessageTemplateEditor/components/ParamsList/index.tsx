import { Button } from '../../../shared/components/Button';
import { MouseHoverHint } from '../../../shared/components/MouseHoverHint';
import styles from './index.module.scss';

type TProps = {
    params: string[];
    onClick?: (name: string) => void;
}

export function ParamsList({params, onClick}:TProps){
    return <div className={styles.Conteiner}>
        <p>Parametrs:</p>
        {params.map((str, i)=>{
            return <MouseHoverHint key={i} text={`Добавить параметр {${str}} в месте курсора`}>
                <Button name={`{${str}}`} onClick={()=>onClick?.(str)}/>
            </MouseHoverHint>
        })}
    </div>
}