
const widthFunc=()=>
{
    const menu=document.querySelector("#menu");
    const navbar=document.querySelector("#navbar-list");
    const navbarMenu=document.querySelector("#navbar-list-menu");
    let width=window.innerWidth;
    if(width<800)
    {
        navbar.style.display="none";
        menu.style.display="block";
    }
    else
    {
        if(navbarMenu.classList.contains("navbar-list-menu-clicked"))
        {
            window.location.reload();
        }
    }
}
const clicked=()=>
{
    const navbarMenu=document.querySelector("#navbar-list-menu");
    if(navbarMenu.classList.contains("navbar-list-menu-clicked"))
    {   
        navbarMenu.classList.remove("navbar-list-menu-clicked");
        navbarMenu.classList.add("navbar-list-menu");
    }
    else
    {
        navbarMenu.classList.remove("navbar-list-menu");
        navbarMenu.classList.add("navbar-list-menu-clicked");
    }
}

$(window).resize(function()
{
    const navbar=document.querySelector("#navbar-list");
    const menu=document.querySelector("#menu");
    menu.style.display="none";
    navbar.style.display="flex";
    widthFunc();
});


widthFunc();
menu.addEventListener("click",clicked)
document.querySelector("#logo").addEventListener("click",()=>{window.location.reload();});


