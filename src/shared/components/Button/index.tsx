import styles from './index.module.scss';

type TProps = {
    name : string;
    onClick? : () => void
}

export function Button({name, onClick }:TProps){
    return <div className={styles.button + " noselect"} onClick={onClick}>
        {name}
    </div>
}