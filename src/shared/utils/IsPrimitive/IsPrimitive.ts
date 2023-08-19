export function IsPrimitive(test:any):boolean {
    return test !== Object(test);
}