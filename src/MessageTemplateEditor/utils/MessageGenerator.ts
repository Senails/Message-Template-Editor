import { TTamplateConfig, TTamplateStruct } from "../types";

type Params = {
    [key:string]: any;
}

export function MessageGenerator(params: Params, tamplate: TTamplateConfig):string{
    // set value = "" for params without value
    function ParamsFilter(params: Params, tamplateParams: string[]):{[key:string]: string;}{
        let dictionary: Params = {};
        tamplateParams.forEach((paramName)=>{
            if (params[paramName]){
                dictionary[paramName] = params[paramName]!.toString();
            }else{
                dictionary[paramName] = "";
            }
        });
        return dictionary;
    }
    // replace "{param}" to value
    function Replace(paramsEntries: [string, string][], text: string):string{
        if (text === "") return "";
        let arrFragments = text.split(`{${paramsEntries[0][0]}}`);
    
        if (paramsEntries.length > 1) arrFragments = arrFragments.map((substr)=>{
            return Replace(paramsEntries.slice(1),substr);
        });
    
        return arrFragments.join(paramsEntries[0][1]);
    }
    // Compose strings
    function Compose(params: {[key:string]: string;}, tamplate: TTamplateStruct):string{
        let First = Replace(Object.entries(params), tamplate.First);
        let IFblockText: string = "";
        let Last = tamplate.Last ? Compose(params,tamplate.Last) : "";
    
        if (tamplate.IFBlocks){
            let condition: string = Compose(params, tamplate.IFBlocks.IfConditionParam);
            IFblockText = condition.length > 0 ? Compose(params, tamplate.IFBlocks.Then):
            Compose(params, tamplate.IFBlocks.Else);
        }
    
        return First + IFblockText + Last;
    }

    return Compose(ParamsFilter(params,tamplate.ParamList), tamplate.Tamplate);
}