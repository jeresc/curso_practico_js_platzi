const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const shoppingCartCloseIcon = document.querySelector('.shopping-cart-close')
const mobileMenu = document.querySelector('.mobile-menu');
const cartAside = document.querySelector('.shopping-cart-container')
const cardsContainer = document.querySelector('.cards-container')
const productDetail = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)
shoppingCartCloseIcon.addEventListener('click', toggleCartAside)

function toggleDesktopMenu() {
  cartAside.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  productDetail.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
  cartAside.classList.add('inactive');
  desktopMenu.classList.add('inactive')
  productDetail.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive')
  productDetail.classList.add('inactive');
  cartAside.classList.toggle('inactive');
}

function renderProductDetail(product) {

  const imgProduct = document.querySelector('.product-detail-image')
  imgProduct.src = product.image

  const priceProduct = document.querySelector('.product-detail-price')
  priceProduct.textContent = '$' + product.price

  const nameProduct = document.querySelector('.product-detail-name')
  nameProduct.textContent = product.name

  const descriptionProduct = document.querySelector('.product-detail-description')
  descriptionProduct.textContent = product.description

}

function openProductDetailAside(product) {
  productDetail.classList.remove('inactive')
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive')
  cartAside.classList.add('inactive');
}

function closeProductDetailAside() {
  productDetail.classList.add('inactive')
}

const productList = [];

productList.push({
  name: 'Watch',
  price: 120,
  description: "This watch has all the features you need to stay always connected. This wristwatch has a built-invoice remote, so you can control your music playback, device settings and more hands free. Durable and comfortable, it's perfect for everyday wear.",
  image: 'https://images.pexels.com/photos/9107751/pexels-photo-9107751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
  name: 'Camera',
  description: "You need a camera to take amazing pictures and videos. Take your photography and videography to the next level with our top rated camera! Our camera has great features that will help you capture stunning photos and video no matter what you're shooting. Whether you're a beginner looking for an easy-to-use camera, or an experienced photographer or videographer who wants to step up your game, we have the perfect camera for you.",
  price: 260,
  image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
  name: 'Sneakers',
  description: "Looking for sneakers that will help you workout like a pro? Look no further than the Nike Romaleo Total II. These sneakers have an ultra lightweight construction and are engineered with a revolutionary flywire technology in the sole that provides unparalleled stability and flexibility when you're working out, so you can push yourself to your absolute limits.",
  price: 200,
  image: 'https://i.imgur.com/zuLlg7K.jpg'
})
productList.push({
  name: 'Headphones',
  description: "Sonic Gear headphones offer great sound quality for music and video playback, thanks to their superior noise Cancellation technology. They come with a detachable cable, which makes them perfect for traveling. The headphones are also foldable for easy storage and transport",
  price: 400,
  image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80'
})
productList.push({
  name: 'Watch',
  price: 120,
  description: "This watch has all the features you need to stay always connected. This wristwatch has a built-invoice remote, so you can control your music playback, device settings and more hands free. Durable and comfortable, it's perfect for everyday wear.",
  image: 'https://images.pexels.com/photos/9107751/pexels-photo-9107751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
  name: 'Camera',
  description: "You need a camera to take amazing pictures and videos. Take your photography and videography to the next level with our top rated camera! Our camera has great features that will help you capture stunning photos and video no matter what you're shooting. Whether you're a beginner looking for an easy-to-use camera, or an experienced photographer or videographer who wants to step up your game, we have the perfect camera for you.",
  price: 260,
  image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
  name: 'Sneakers',
  description: "Looking for sneakers that will help you workout like a pro? Look no further than the Nike Romaleo Total II. These sneakers have an ultra lightweight construction and are engineered with a revolutionary flywire technology in the sole that provides unparalleled stability and flexibility when you're working out, so you can push yourself to your absolute limits.",
  price: 200,
  image: 'https://i.imgur.com/zuLlg7K.jpg'
})
productList.push({
  name: 'Headphones',
  description: "Sonic Gear headphones offer great sound quality for music and video playback, thanks to their superior noise Cancellation technology. They come with a detachable cable, which makes them perfect for traveling. The headphones are also foldable for easy storage and transport",
  price: 400,
  image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80'
})
productList.push({
  name: 'Watch',
  price: 120,
  description: "This watch has all the features you need to stay always connected. This wristwatch has a built-invoice remote, so you can control your music playback, device settings and more hands free. Durable and comfortable, it's perfect for everyday wear.",
  image: 'https://images.pexels.com/photos/9107751/pexels-photo-9107751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
  name: 'Camera',
  description: "You need a camera to take amazing pictures and videos. Take your photography and videography to the next level with our top rated camera! Our camera has great features that will help you capture stunning photos and video no matter what you're shooting. Whether you're a beginner looking for an easy-to-use camera, or an experienced photographer or videographer who wants to step up your game, we have the perfect camera for you.",
  price: 260,
  image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
  name: 'Sneakers',
  description: "Looking for sneakers that will help you workout like a pro? Look no further than the Nike Romaleo Total II. These sneakers have an ultra lightweight construction and are engineered with a revolutionary flywire technology in the sole that provides unparalleled stability and flexibility when you're working out, so you can push yourself to your absolute limits.",
  price: 200,
  image: 'https://i.imgur.com/zuLlg7K.jpg'
})
productList.push({
  name: 'Headphones',
  description: "Sonic Gear headphones offer great sound quality for music and video playback, thanks to their superior noise Cancellation technology. They come with a detachable cable, which makes them perfect for traveling. The headphones are also foldable for easy storage and transport",
  price: 400,
  image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80'
})



function renderProducts(arr) {

  for (const product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.classList.add('product-image')
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside)
    productImg.addEventListener('click', () => {renderProductDetail(product)})

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
