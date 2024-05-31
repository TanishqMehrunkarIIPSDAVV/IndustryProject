let index=1;
const leftButton=()=>
{
    if(index<=1)
    {
        index=9;
    }
    else
    {
        index--;
    }
    document.querySelector(".carousel-image").setAttribute("src",`./images/image${index}.jpg`);
}

const rightButton=()=>
{
    if(index>=9)
    {
        index=1;
    }
    else
    {
        index++;
    }
    document.querySelector(".carousel-image").setAttribute("src",`./images/image${index}.jpg`);
}

document.querySelector(".left").addEventListener("click",leftButton);
document.querySelector(".right").addEventListener("click",rightButton);