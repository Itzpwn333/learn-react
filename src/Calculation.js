


function add(a,b){
    let sum = a+b;
    return sum;
}

function sub(a,b){
    let sub = a-b;
    return sub;
}

function multi(a,b){
    let multi = a*b;
    return multi;
}

function divid(a,b){
    let divid = a/b;
    divid = divid.toFixed(2);
    return divid;
}

export {add, sub, multi, divid};