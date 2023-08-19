import { IsPrimitive } from "../IsPrimitive/IsPrimitive";

export function CreateRecursiveCopy(obj:{[key:string]: any}):object{
    if (IsPrimitive(obj)) return obj;
    if (Array.isArray(obj)) return obj.map((elem)=>CreateRecursiveCopy(elem));

    let copy: {[key:string]: any} = {};
    for(let key in obj){copy[key] = CreateRecursiveCopy(obj[key]);}

    return copy;
}