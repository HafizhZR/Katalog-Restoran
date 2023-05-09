import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <div class="container_info">
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.title}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Rating</h4>
    <p>${restaurant.rating} / 5</p>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Kategori</h4>
    <p>${restaurant.categories.reduce((show, kategori) => show.concat(`<li>${kategori.name}</li>`), '')}</p>
  </div>
  </div>
  <div class="description">
    <h4>Deskripsi</h4>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant_menu_list">
    <h4>Daftar Makanan</h4>
    <p>${restaurant.menus.foods.reduce((show, food) => show.concat(`<li>${food.name}</li>`), '')}</p>
    <h4>Daftar Minuman</h4>
    <p>${restaurant.menus.drinks.reduce((show, drink) => show.concat(`<li>${drink.name}</li>`), '')}</p>
  </div>
  <div class="restaurant__review">
    <h3>Review Customer</h3>
    ${restaurant.customerReviews.reduce((show, value) => show.concat(`<br>
        <p>Nama: <span>${value.name}</span></p>
        <p>Tanggal: <span>${value.date}</span></p>
        <p>Review: <span>${value.review}</span></p>
        `), '')}
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="content-container">
      <article class="list_content">
        <div>
        <a href="/#/detail/${restaurant.id}">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
        </a>
        <p class="rating">${restaurant.rating}</p>
        </div>
        <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
        <p class="city">Kota: <span>${restaurant.city}</span></p>
        <p>${restaurant.description.slice(0, 230)}...</p>
      </article>
    </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
