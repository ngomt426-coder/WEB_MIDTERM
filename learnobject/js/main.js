function load_product_data(dataset,mytable) {
    mytable.innerHTML = "";
    for(var i=0; i<dataset.length; i++) {
        mytable.innerHTML +=
        "<tr onclick='showProductDetail(" + dataset[i].id + ")'>"+
            "<td>" + dataset[i].id + "</td>"+
            "<td>" + dataset[i].name + "</td>"+
            "<td>" + dataset[i].price + "</td>"+
            "<td><img src='images/remove.png' width='20' alt='Remove' onclick='event.stopPropagation(); removeProduct(" + dataset[i].id + ")'></td>"+
        "</tr>";
    }
}

function removeProduct(id) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            products.splice(i, 1);
            break;
        }
    }
    load_product_data(products, document.getElementById("mytbody"));
    clearProductDetail();
}

function showProductDetail(id) {
    var product = products.find(function(p) {
        return p.id === id;
    });
    if (!product) {
        clearProductDetail();
        return;
    }
    document.getElementById("detailId").value = product.id;
    document.getElementById("detailName").value = product.name;
    document.getElementById("detailPrice").value = product.price;
}

function clearProductDetail() {
    document.getElementById("detailId").value = "";
    document.getElementById("detailName").value = "";
    document.getElementById("detailPrice").value = "";
}

function getNextProductId() {
    var nextId = 0;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id > nextId) {
            nextId = products[i].id;
        }
    }
    return nextId + 1;
}

function addNewProduct() {
    var newName = document.getElementById("detailName").value.trim();
    var newPriceText = document.getElementById("detailPrice").value.trim();
    var newPrice = parseFloat(newPriceText);

    if (newName === "") {
        alert("Vui lòng nhập tên sản phẩm.");
        return;
    }
    if (newPriceText === "" || isNaN(newPrice) || newPrice <= 0) {
        alert("Vui lòng nhập giá sản phẩm hợp lệ.");
        return;
    }

    var newProduct = {
        id: getNextProductId(),
        name: newName,
        price: newPrice
    };

    products.push(newProduct);
    load_product_data(products, document.getElementById("mytbody"));
    clearNewProductForm();
}

function clearNewProductForm() {
    document.getElementById("detailId").value = "";
    document.getElementById("detailName").value = "";
    document.getElementById("detailPrice").value = "";
}