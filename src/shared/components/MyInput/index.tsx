import { useRef, useState } from 'react';
import styles from './index.module.scss';

type propsType = {
    value:string;
    placeholder:string;
    charLimit?:number;
    type?:'text'|'password';
    name?:string;
    onChange?:(value:string)=>void;
}

export function MyInput({type="text", placeholder, charLimit, name, value, onChange}:propsType){
    let [innerValue,setValue] = useState<string>(value);
    let [isActive,setState] = useState<boolean>(false);
    let inputElem = useRef<HTMLInputElement>(null);

    function OnChange(event:React.ChangeEvent<HTMLInputElement>){
        let newValue = (charLimit && event.target.value.length > charLimit) ?
        event.target.value.slice(0,charLimit) : event.target.value;

        onChange?.(newValue);
        setValue(newValue);
    }
    function Focus(){
        inputElem.current?.focus();
    }

   return <div onClick={Focus} className={styles.MyInput + " " + ((innerValue.length > 0 || isActive) ? styles.active : "")}>
        {/* placeolder */}
        <div className={styles.inputFon}></div>
        <span className={styles.placeholderBlock+" noselect"}>
            {placeholder.length > 13 ? placeholder.slice(0, 13) + ".." : placeholder}
        </span>
        <span className={styles.placeholderText + " noselect"}>
            {placeholder.length > 13 ? placeholder.slice(0, 13) + ".." : placeholder}
        </span>
        

        {/* real input */}
        <input ref={inputElem} type={type || "text"} name={name} 
            onFocus={() => setState(true)} 
            onBlur={() => setState(false)}
            onChange={OnChange}
            value={innerValue} 
            className={styles.realInput}
            style={{backgroundColor:"rgba(0, 0, 0, 0) !important"}}
        />
   </div>
}