function loadProducts(products,productbody){
    for(var i=0;i<products.length;i++){
                var product=products[i];
                productID=product.id;
                productName=product.name;
                //create tr element 
                tr=document.createElement("tr");
                //create 3td
                td1=document.createElement("td");
                td2=document.createElement("td");
                td3=document.createElement("td");
                //img remove
                img=document.createElement("img");
                img.width=20;
                img.setAttribute("onclick","removeProduct(this)");
                img.setAttribute("src","images/remove.png");
                //assign value to td
                td1.innerHTML=productID;
                td2.innerHTML=productName;
                td3.appendChild(img);
                //append td to tr
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                //append tr to tbody
                productbody.appendChild(tr);
    }
}

function removeProduct(img){
    if(confirm("Are you sure to remove this product?")){
        img.parentElement.parentElement.remove();
    }
}