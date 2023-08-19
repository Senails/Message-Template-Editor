import { TTamplateStruct } from "../types";

type Params = {
    [key:string] : string;
}

export function MessageGenerator(params:Params, tamplate:TTamplateStruct):string{
    const MyReplace = (paramsEntries:[string, string][], text: string)=>{
        if (text === "") return "";
        let arrFragments = text.split(`{${paramsEntries[0][0]}}`);
    
        if (paramsEntries.length>1) arrFragments = arrFragments.map((substr)=>{
            return MyReplace(paramsEntries.slice(1),substr);
        });
    
        return arrFragments.join(paramsEntries[0][1]);
    }

    let First = MyReplace(Object.entries(params),tamplate.First);
    let IFblockText:string = "";
    let Last = tamplate.Last ? MessageGenerator(params,tamplate.Last) : "";

    if (tamplate.IFblocks){
        let condition:string = MessageGenerator(params,tamplate.IFblocks.ifConditionParam);
        IFblockText = condition.length>0?
        MessageGenerator(params,tamplate.IFblocks.Then):
        MessageGenerator(params,tamplate.IFblocks.Else);
    }

    return First+IFblockText+Last;
}