import { useRef, useState } from 'react';
import styles from './index.module.scss';


type propsType = {
    children: React.ReactNode;
}

export function Modal({children}:propsType){
    return <div className={styles.Modal}>
        <div className={styles.Scroll} >
            <div style={{height:"10px"}}></div>
            {children}
            <div style={{height:"10px"}}></div>
        </div>
    </div>
}