import { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';

type propsType = {
    value:string,
    placeholder?:string,
    charsLimit?:number,
    onChange?:(value:string)=>void,
}

export function MyTextArea({value, placeholder, charsLimit, onChange}:propsType){
    let [innerValue,setValue] = useState<string>(value);
    let [Height,setHeight] = useState<number|undefined>();

    let originElem = useRef<HTMLTextAreaElement>(null);
    let checkElem = useRef<HTMLTextAreaElement>(null);

    function InnerOnChange(event: React.ChangeEvent<HTMLTextAreaElement>){
        let substring = event.currentTarget.value;
        if (charsLimit && event.currentTarget.value.length > charsLimit){
            substring = event.currentTarget.value.slice(0, charsLimit);
        }
        setValue(substring);
        onChange?.(substring);
        
    }
    function Resize(){
        if (checkElem.current!.scrollHeight + 20 !== originElem.current!.clientHeight){
            setHeight(checkElem.current!.scrollHeight + 20);
        }
    }

    useEffect(Resize,[innerValue])

    return <div className={styles.MyTextareaConteiner}>
        {/* real textarea */}
        <textarea ref={originElem}
        className={styles.MyTextarea} 
        placeholder={placeholder}
        onChange={InnerOnChange}
        value={innerValue}
        style={{height:`${Height}px`}}
        ></textarea>

        {/* hidden textarea */}
        <div style={{height:"0px",width:"100%",position:"relative",overflow:"hidden"}}>
            <textarea ref={checkElem} className={styles.textForCheck} value={innerValue}></textarea>
        </div>

        {/* char score */}
        {charsLimit && <div className={styles.charsLimitInfo}>
            <span>{innerValue.length}/{charsLimit} chars</span>
        </div>}
    </div>
}