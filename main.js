const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart')
const mobileMenu = document.querySelector('.mobile-menu');
const cartAside = document.querySelector('.shopping-cart-container')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);

function toggleDesktopMenu() {
  cartAside.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
  cartAside.classList.add('inactive');
  desktopMenu.classList.add('inactive')
  mobileMenu.classList.toggle('inactive')
}

function toggleCartAside() {
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive')
  cartAside.classList.toggle('inactive')
}

const productList = [];

productList.push({
  name: 'Watch',
  price: 120,
  image: 'https://images.pexels.com/photos/9107751/pexels-photo-9107751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
  name: 'Camera',
  price: 260,
  image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
  name: 'Sneakers',
  price: 200,
  image: 'https://i.imgur.com/zuLlg7K.jpg'
})
productList.push({
  name: 'Headphones',
  price: 400,
  image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80'
})
productList.push({
  name: 'Watch',
  price: 120,
  image: 'https://images.pexels.com/photos/9107751/pexels-photo-9107751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
  name: 'Camera',
  price: 260,
  image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
  name: 'Sneakers',
  price: 200,
  image: 'https://i.imgur.com/zuLlg7K.jpg'
})
productList.push({
  name: 'Headphones',
  price: 400,
  image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80'
})
productList.push({
  name: 'Watch',
  price: 120,
  image: 'https://images.pexels.com/photos/9107751/pexels-photo-9107751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
  name: 'Camera',
  price: 260,
  image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
  name: 'Sneakers',
  price: 200,
  image: 'https://i.imgur.com/zuLlg7K.jpg'
})
productList.push({
  name: 'Headphones',
  price: 400,
  image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80'
})

function renderProducts(arr) {

  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerHTML = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerHTML = product.name;
  
    productInfoDiv.append(productPrice, productName)
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './assets/icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.append(productInfoDiv, productInfoFigure);
  
    productCard.append(productImg, productInfo);
    
    cardsContainer.appendChild(productCard)
  }
}

renderProducts(productList)