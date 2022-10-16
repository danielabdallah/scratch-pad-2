function randRGB(){
    const r = Math.floor(Math.random()*255)+1;
    const g = Math.floor(Math.random()*255)+1;
    const b = Math.floor(Math.random()*255)+1;
    // return [r,g,b];
    return `rgb(${r},${g},${b})`;
    
};

function colorise(){
    this.style.backgroundColor = randRGB();
    this.style.color = randRGB();
}

const buttons = document.querySelectorAll("button");
const h2s = document.querySelectorAll('h2');

for (button of buttons){
    button.addEventListener('click',colorise);
};

for (h2 of h2s){
    h2.addEventListener('click',colorise);
};