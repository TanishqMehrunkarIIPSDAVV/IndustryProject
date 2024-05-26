document.querySelector(".shell").addEventListener("click", (e) =>{
    if(e.target.classList.contains("btn")){
        const prod = e.target.dataset.product;
        window.open(`./detail_product/${prod}.html`,`_self`);
    }
})