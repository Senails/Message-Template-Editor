import styles from './index.module.scss';

type TProps = {
    name: string;
    onClick?: () => void;
    textSelectable? : boolean;
}

export function Button({name, onClick, textSelectable}:TProps){
    return <div className={styles.Button + (!textSelectable?" noselect":"")} 
        style={{cursor:`${!textSelectable?"pointer":""}`}}
        onClick={onClick}>
        {name}
    </div>
}