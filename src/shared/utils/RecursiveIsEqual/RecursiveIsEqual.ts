import { IsPrimitive } from "../IsPrimitive/IsPrimitive";


export function RecursiveIsEqual(obj1:any, obj2:any): boolean{
    if (IsPrimitive(obj1) && !IsPrimitive(obj2)) return false;
    if (!IsPrimitive(obj1) && IsPrimitive(obj2)) return false;
    if (IsPrimitive(obj1) && IsPrimitive(obj2)) return obj1 === obj2;
    

    if (!Array.isArray(obj1) && Array.isArray(obj2)) return false;
    if (Array.isArray(obj1) && !Array.isArray(obj2)) return false;
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) return false;
        for(let i = 0; i< obj1.length;i++){
            if (!RecursiveIsEqual(obj1[i],obj2[i])) return false;
        } 
        return true;
    }

    for(let key in obj1){
        if (!RecursiveIsEqual(obj1[key],obj2[key])) return false;
    }
    for(let key in obj2){
        if (!RecursiveIsEqual(obj1[key],obj2[key])) return false;
    }
    return true;
}