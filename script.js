"use strict"

fetch('https://dummyjson.com/products')
.then((response) => response.json())
.then((json)=>showProduct(json))

function showProduct(json){
    let nazvanieCategorii = [];
    for(let product of json.products){
        if(nazvanieCategorii.indexOf(product['category']) == -1){
            nazvanieCategorii.push( product['category']);
        }
    }
    for(let category of nazvanieCategorii){
        content.innerHTML += `<h1 class = "title">${category} ${category} ${category}</h1>`;
        for(let product of json.products){
            if(category != product.category) {
                continue;
            }
            content.innerHTML += `
        <div class ="element">
                <h2 class = "titlee"> Название продукта: ${product.title}</h2> 
                <a href="#inf"> <img class="image" src="${product["images"][0]}"> </a> 
            <div id="inf">
                <div id="okno">
                    <span>${product.description}</span>
                    <a href="#" class="close">Закрыть окно</a>
                    <a href="#" class="close">Купить</a>
                </div>
            </div>
                <h2 class="price"> Стоимость: ${product.price}$ </h2>
                <button class="butbuy">Купить товар</button>
            </div>
        </div>
        <br>
            `;
            
           content.innerHTML += '<br>';
        }
    }
}





