import { TTamplateStruct } from "../types";


type Params = {
    [key:string] : string;
}

export function MessageGenerator(prams:Params,tamplate:TTamplateStruct):string{
    let a =  tamplate?"":"";
    let text = Object.entries(prams).map((elem,i) => `${elem[0]}:${elem[1]}`).join("\n");
    return text+a;
}