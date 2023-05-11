import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="content">
        <div class="title_content">
            <h1>Explore Food Heaven</h1>
        </div>
            <div class="restaurants" id="resto"></div>
      </section>
    `;
  },

  async afterRender() {
    const restosContainer = document.querySelector('#resto');
    const data = await RestaurantDbSource.getRestaurantList();
    data.restaurants.forEach((resto) => {
      restosContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default Home;
