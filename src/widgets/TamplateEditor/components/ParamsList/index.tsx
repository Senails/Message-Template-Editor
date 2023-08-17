import { ButtonList } from "../../../../shared/components/ButtonsList";

type TProps = {
    params : string[];
    onClick? : (name: string) => void;
}

export function ParamsList({params, onClick}:TProps){
    return <ButtonList names={params.map((e)=>`{${e}}`)} titel='Params' onClick={(i)=>onClick?.(params[i])}/>
}