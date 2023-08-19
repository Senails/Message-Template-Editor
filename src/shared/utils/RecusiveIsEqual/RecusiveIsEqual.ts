import { isPrimitive } from "util";

export function RecusiveIsEqual(obj1:any, obj2:any): boolean{
    if (isPrimitive(obj1) && !isPrimitive(obj2)) return false;
    if (!isPrimitive(obj1) && isPrimitive(obj2)) return false;
    if (isPrimitive(obj1) && isPrimitive(obj2)) return obj1 === obj2;
    

    if (!Array.isArray(obj1) && Array.isArray(obj2)) return false;
    if (Array.isArray(obj1) && !Array.isArray(obj2)) return false;
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) return false;
        for(let i = 0; i< obj1.length;i++){
            if (!RecusiveIsEqual(obj1[i],obj2[i])) return false;
        } 
        return true;
    }

    for(let key in obj1){
        if (!RecusiveIsEqual(obj1[key],obj2[key])) return false;
    }
    for(let key in obj2){
        if (!RecusiveIsEqual(obj1[key],obj2[key])) return false;
    }
    return true;
}