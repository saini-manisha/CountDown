const inputs=document.querySelectorAll("input");

function countdown(){
    const futureDate=new Date("1 Jan 2025");
    const nowDate=new Date();
    const diff=futureDate-nowDate;
    if(diff<0)return;
    const days=Math.floor(diff/1000/60/60/24);
    const hours=Math.floor(diff/1000/60/60)%24;
    const min=Math.floor(diff/1000/60)%60;
    const sec=Math.floor(diff/1000)%60;
    inputs[0].value=days;
    inputs[1].value=hours;
    inputs[2].value=min;
    inputs[3].value=sec;    
}

countdown();

setInterval(() => {
    countdown()
}, 1000);
