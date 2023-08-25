export async function ReactNextTick(){
    return new Promise((res,rej)=>{
        requestAnimationFrame(()=>{
            setTimeout(()=>{
                requestAnimationFrame(()=>{
                    res(null);
                })
            })
        })
    })
}