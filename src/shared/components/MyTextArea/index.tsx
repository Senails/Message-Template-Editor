import { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';

type propsType = {
    value: string,
    disabled?: boolean,
    placeholder?: string,
    charsLimit?: number,
    onChange?: (value:string) => void,
    OnChangeCursorPosition?: (cursorPosition : number|null) => void
}

export function MyTextArea(props:propsType){
    let {value, placeholder, charsLimit, disabled, onChange, OnChangeCursorPosition} = props;
    let [Height, setHeight] = useState<number|undefined>();

    let originElem = useRef<HTMLTextAreaElement>(null);
    let checkElem = useRef<HTMLTextAreaElement>(null);


    function InnerOnChange(event: React.ChangeEvent<HTMLTextAreaElement>){
        let substring = event.currentTarget.value;
        if (charsLimit && event.currentTarget.value.length > charsLimit){
            substring = event.currentTarget.value.slice(0, charsLimit);
        }
        onChange?.(substring);
        CheckCursorPosition();
    }
    function CheckCursorPosition(){
        OnChangeCursorPosition?.(originElem.current!.selectionEnd);
    }
    function Resize(){
        if (checkElem.current!.scrollHeight + 20 !== originElem.current!.clientHeight){
            setHeight(checkElem.current!.scrollHeight + 20);
        }
    }
    useEffect(Resize,[value])

    
    return <div className={styles.MyTextareaConteiner}>
        {/* real textarea */}
        <textarea ref={originElem}
        className={styles.MyTextarea} 
        placeholder={placeholder}
        value={value}
        disabled={disabled}

        onChange={InnerOnChange}
        onClick={CheckCursorPosition}
        onSelect={CheckCursorPosition}

        style={{height:`${Height}px`}}
        ></textarea>

        {/* hidden textarea */}
        <div style={{height:"0px",width:"100%",position:"relative",overflow:"hidden"}}>
            <textarea ref={checkElem} className={styles.textForCheck} value={value} readOnly></textarea>
        </div>

        {/* char score */}
        {charsLimit && <div className={styles.charsLimitInfo}>
            <span>{value.length}/{charsLimit} chars</span>
        </div>}
    </div>
}