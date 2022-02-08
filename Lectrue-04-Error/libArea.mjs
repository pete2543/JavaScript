function areaTriangle(b,h) {
    return(b*h)/2;
}

function areaCircle(r) {
    return Math.PI * r*r;
}

function areaSqr(w,l) {
    return w*l;
}

export {areaCircle,areaTriangle,areaSqr}

import {areaCircle,areaSqr} from "./libArea.mjs";

console.log(areaCircle(6));
console.log(areaSqr(3,4));