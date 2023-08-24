type HintPosition = {
    top: string,
    bottom: string,
    left: string,
    right: string,
}

export class HintManager{
    static HintElemID = "hint";

    static elem: HTMLElement|null = null;
    static setTimeoutTocken: NodeJS.Timeout|null = null;

    static posIsTop: boolean = false;
    static posIsLeft: boolean = false;


    static Show(text:string,x:number,y:number){
        let elem = HintManager.GetHintElement();
        if (HintManager.setTimeoutTocken) clearTimeout(HintManager.setTimeoutTocken);
        if (!elem) return;
        elem.innerHTML = text;
        elem.style.opacity = "1";
        elem.style.transition = "none";
    
        let pos = HintManager.CalculateHintPosition(x,y);
    
        elem.style.top = pos.top;
        elem.style.bottom = pos.bottom;
        elem.style.left = pos.left;
        elem.style.right = pos.right;
    }
    static Hide(){
        let elem = HintManager.GetHintElement();
        if (!elem) return;
        elem.style.transition = "opacity 0.5s";
        elem.style.opacity = "0";
    
        HintManager.setTimeoutTocken = setTimeout(()=>{
            if (!elem) return;
            elem.style.top = `-100%`;
            elem.style.bottom = `auto`;
            HintManager.setTimeoutTocken = null;
        },500);
    }  


    static CalculateHintPosition(x:number,y:number):HintPosition{
        let docW = document.documentElement.clientWidth;
        let docH = document.documentElement.clientHeight;
        let isTop = (y * (HintManager.posIsTop ? 1.2 : 1) > (docH - y) * (HintManager.posIsTop ? 1 : 1.2));
        let isLeft = (x * (HintManager.posIsLeft ? 1.2 : 1) > (docW - x) * (HintManager.posIsLeft ? 1 : 1.2));
    
        HintManager.posIsTop = isTop;
        HintManager.posIsLeft = isLeft;
    
        return {
            top: isTop ? `auto` : `${y + 10}px`,
            bottom: isTop ? `${docH - y + 5}px` : `auto`,
            left: isLeft ? `auto` : `${x + 10}px`,
            right: isLeft ? `${docW - x + 5}px` : `auto`,
        }
    }
    static GetHintElement():HTMLElement|null{
        if (HintManager.elem) return HintManager.elem;
        HintManager.elem = document.getElementById(HintManager.HintElemID);
        if (HintManager.elem) return HintManager.elem;
        HintManager.elem = HintManager.CreateHintElement();
        return HintManager.elem;
    }
    static CreateHintElement():HTMLElement|null{
        let elem = document.createElement("span");
        elem.setAttribute("id", this.HintElemID);
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
    
        elem.addEventListener("mouseenter",()=>{
            elem.style.top = `-100%`;
            elem.style.bottom = `auto`;
        });
    
        document.body.appendChild(elem);
        return elem;
    }
}