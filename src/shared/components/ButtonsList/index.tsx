import { Button } from '../Button';
import styles from './index.module.scss';

type TProps = {
    names : string[];
    titel? : string;
    onClick? : (buttonIndex: number) => void;
    justifyContent? : string;
}

export function ButtonList({names, titel, justifyContent, onClick}:TProps){
    return <div>
        {titel?<h3 style={{color:"#ffffff",textAlign:"center"}}>{titel}:</h3>:<></>}
        
        <div className={styles.buttonlist} style={{justifyContent:justifyContent}}>
            {names.map((e,i)=><div style={{margin:"5px",display:"inline-block"}}>
                <Button name={`${e}`} key={i} onClick={()=>{onClick?.(i)}}/>
            </div>)}
        </div>
    </div>
}