type HintPosition = {
    top: string,
    bottom: string,
    left: string,
    right: string,
}

let elem: HTMLElement|null = null;
let setTimeoutTocken: NodeJS.Timeout|null = null;

const HintElemID = "hint";

export function Show(text:string,x:number,y:number){
    let elem = GetHintElement();
    if (setTimeoutTocken) clearTimeout(setTimeoutTocken);
    if (!elem) return;
    elem.innerHTML = text;
    elem.style.opacity = "1";
    elem.style.transition = "none";

    let pos = CalculateHintPosition(x,y);

    elem.style.top = pos.top;
    elem.style.bottom = pos.bottom;
    elem.style.left = pos.left;
    elem.style.right = pos.right;
}
export function Hide(){
    let elem = GetHintElement();
    if (!elem) return;
    elem.style.transition = "opacity 0.5s";
    elem.style.opacity = "0";

    setTimeoutTocken = setTimeout(()=>{
        if (!elem) return;
        elem.style.top = `-100%`;
        elem.style.bottom = `auto`;
        setTimeoutTocken = null;
    },500);
}   



export function CalculateHintPosition(x:number,y:number):HintPosition{
    return {
        top: `${y + 10}px`,
        bottom: `auto`,
        left: `${x + 10}px`,
        right: `auto`,
    }
}
export function GetHintElement():HTMLElement|null{
    if (elem) return elem;
    elem = document.getElementById(HintElemID);
    if (elem) return elem;
    return CreateHintElement();
}
export function CreateHintElement():HTMLElement|null{
    let elem = document.createElement("span");
    elem.setAttribute("id",HintElemID);
    elem.classList.add("noselect");

    elem.style.position = "fixed";
    elem.style.display = "inline";

    elem.style.minHeight = "24px";
    elem.style.maxWidth = "300px";

    elem.style.padding = "6px";
    elem.style.borderRadius = "6px";

    elem.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    elem.style.color = "rgba(255, 255, 255, 0.9)";

    elem.style.fontSize = "14px";
    elem.style.lineHeight = "14px";
    elem.style.fontFamily = "Arial, Helvetica, sans-serif";
    elem.style.whiteSpace = "pre-wrap";
    elem.style.wordBreak = "break-all";

    elem.addEventListener("mouseenter",()=>{
        elem.style.top = `-100%`;
        elem.style.bottom = `auto`;
    });

    document.body.appendChild(elem);
    return elem;
}