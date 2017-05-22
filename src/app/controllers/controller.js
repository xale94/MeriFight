function start(){
    let scenary = window.document.createElement("canvas");
    window.document.body.appendChild(scenary);
    scenary.width=startScenaryWidth();
    scenary.height=startScenaryHeight();
    scenary.getContext("2d");
}

function startScenaryWidth(){
    return window.screen.availWidth;
}

function startScenaryHeight(){
    return window.screen.availHeight;
}

start();