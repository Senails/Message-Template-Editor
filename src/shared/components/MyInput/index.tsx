import { useRef, useState } from 'react';
import styles from './index.module.scss';

type propsType = {
    value: string;
    placeholder: string;
    charLimit?: number;
    type?: 'text'|'password';
    name?: string;
    onChange?: (value:string) => void;
}

export function MyInput(props:propsType){
    let {type="text", placeholder, charLimit, name, value, onChange} = props;
    let placeholderText = useRef<string>(placeholder.length > 13 ? placeholder.slice(0, 13) + ".." : placeholder);
    
    let [isActive, setState] = useState<boolean>(false);
    let inputElem = useRef<HTMLInputElement>(null);


    function innerOnChange(event:React.ChangeEvent<HTMLInputElement>){
        let newValue = (charLimit && event.target.value.length > charLimit) ?
        event.target.value.slice(0,charLimit) : event.target.value;

        onChange?.(newValue);
    }

    
   return <div onClick={()=>inputElem.current?.focus()} className={styles.MyInput + " " + ((value.length > 0 || isActive) ? styles.active : "")}>
        {/* placeolder */}
        <div className={styles.inputFon}></div>
        <span className={styles.placeholderBlock + " noselect"}>
            {placeholderText.current}
        </span>
        <span className={styles.placeholderText + " noselect"}>
            {placeholderText.current}
        </span>
        

        {/* real input */}
        <input ref={inputElem} type={type || "text"} name={name} 
            onFocus={() => setState(true)} 
            onBlur={() => setState(false)}
            onChange={innerOnChange}
            value={value} 
            className={styles.realInput}
            style={{backgroundColor:"rgba(0, 0, 0, 0) !important"}}
        />
   </div>
}