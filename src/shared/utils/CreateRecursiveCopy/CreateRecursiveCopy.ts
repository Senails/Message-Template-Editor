import { isPrimitive } from "util"


export type Tree = {
    [key:string] : string|Tree;
}

export function CreateRecursiveCopyObject(obj:Tree|string):Tree|string{
    if (isPrimitive(obj)) return obj;

    let obb = obj as Tree

    let arrKeys: string[] = Object.keys(obj);
    let copy: Tree = {};
    arrKeys.forEach((key)=>{
        copy[key] = CreateRecursiveCopyObject(obb[key]);
    });

    return copy;
}