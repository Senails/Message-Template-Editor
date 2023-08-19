import { TtamplateStruct } from "../types";


type Params = {
    [key:string] : string;
}

export function UseTamplateMessage(prams:Params,tamplate:TtamplateStruct):string{
    let a =  tamplate?"":"";
    let text = Object.entries(prams).map((elem,i) => `${elem[0]}:${elem[1]}`).join("\n");
    return text+a;
}