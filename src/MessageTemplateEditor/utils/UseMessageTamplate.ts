import { Ttamplate } from "../types";


type Params = {
    [key:string] : string;
}

export function UseTamplateMessage(prams:Params,tamplate:Ttamplate):string{
    let text = Object.entries(prams).map((elem,i) => `${elem[0]}:${elem[1]}`).join("\n");
    return text;
}