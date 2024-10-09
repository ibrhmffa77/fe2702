let showCard = document.querySelector('#showCard')
let iconCard = document.querySelector('#iconCard')

let card = JSON.parse(localStorage.getItem('card')) || [];



function updateCountCard(){
    const countCard = document.getElementById('card-count');
    countCard.innerHTML = card.length;
}

function addToCard(productName, image, price){
    const product = { name: productName,image: image, price: price};
    card.push(product);
    localStorage.setItem('card', JSON.stringify(card));
    updateCountCard();

}


function toggleCard(){
    const shoppingCard = document.querySelector('.shopping-card');
    const shoppingItem = document.querySelector('.shopping-item');

    shoppingCard.style.display = shoppingCard.style.display === 'none' ? 'block' : 'none';
    shoppingItem.innerHTML = '';

    card.forEach(item =>{
        const itemElement = document.createElement('div');
        itemElement.classList.add('shopping-item');
        itemElement.innerHTML = `
        <div class="shopping-item">
                <div class="item-img">
                    <img src="assets/images/1.png" alt= "chair" >
                </div>     
                <div class="name">
                ${item.name}
                </div>  
                <div class="totalPrice">${item.price}</div> 
                <div class="quantity">
                    <span class="minus">< </span>
                    <span>1</span>
                    <span class="plus">></span>
                </div> 


            </div>
        `;
        shoppingItem.appendChild(itemElement);
    })

}

function clearCard(){
    card = [];
    localStorage.removeItem('card');
    updateCountCard();
    document.getElementsByClassName('shopping-card').style.display = 'none';

}
updateCountCard();