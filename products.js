document.querySelector(".shell").addEventListener("click", (e) =>{
    if(e.target.classList.contains("btn")){
        const prod = e.target.dataset.product;
        window.open(`./detail_product/${prod}.html`,`_self`);
    }
})

const iframe_ = document.querySelector(".product_details");

document.querySelectorAll(".product_").forEach((ele)=>{
    ele.addEventListener("click", ()=>{
        iframe_.classList.remove("product_details");
        iframe_.classList.add("product_desc");
        
    })
})

// document.addEventListener("click", (e)=>{
//     if(!e.target.classList.contains("product_desc") && !e.target.classList.contains("product_")){
//         window.location.reload();
//     }
// })