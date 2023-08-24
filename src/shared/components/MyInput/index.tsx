import { useMemo, useRef, useState } from 'react';
import styles from './index.module.scss';
import { MouseHoverHint } from '../MouseHoverHint';

type propsType = {
    value: string;
    placeholder: string;
    charLimit?: number;
    type?: 'text'|'password';
    name?: string;
    onChange?: (value:string) => void;
    OnChangeCursorPosition?: (cursorPosition : number|null) => void
}

export function MyInput(props:propsType){
    let {type="text", placeholder, charLimit, name, value, onChange, OnChangeCursorPosition} = props;
    let placeholderText = useMemo(()=>{
        return placeholder.length > 13 ? placeholder.slice(0, 13) + ".." : placeholder
    },[placeholder])
    
    let [isActive, setState] = useState<boolean>(false);
    let inputElem = useRef<HTMLInputElement>(null);


    function InnerOnChange(event:React.ChangeEvent<HTMLInputElement>){
        let newValue = (charLimit && event.target.value.length > charLimit) ?
        event.target.value.slice(0,charLimit) : event.target.value;

        onChange?.(newValue);
        OnChangeCursorPosition?.(inputElem.current!.selectionStart);
    }
    function OnClick(){
        inputElem.current?.focus()
        setState(true);
        OnChangeCursorPosition?.(inputElem.current!.selectionStart);
    }

    
   return <div onClick={OnClick} className={styles.Conteiner + " " + ((value.length > 0 || isActive) ? styles.active : "")}>
        <div className={styles.Background}></div>
        {/* placeholder */}
        <span className={styles.PlaceholderBackground + " noselect"}>
            {placeholderText}
        </span>
        <span className={styles.PlaceholderText + " noselect"}>
            {placeholder.length > 13 ? 
                <MouseHoverHint text={placeholder} display="inline-block">
                    {placeholderText}
                </MouseHoverHint>:<>{placeholderText}</>
            }
        </span>
        

        {/* input */}
        <input ref={inputElem} type={type || "text"} name={name} 
            onFocus={() => setState(true)} 
            onBlur={() => setState(false)}
            onChange={InnerOnChange}

            value={value} 
            className={styles.realInput}
            style={{backgroundColor:"rgba(0, 0, 0, 0) !important"}}
        />
   </div>
}