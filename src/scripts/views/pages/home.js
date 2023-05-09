import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="hero_section">
        <h1>Temukan Restoran Terbaik di Kota Anda</h1>
        <p>Dengan banyaknya restoran yang tersedia, kami membantu Anda menemukan tempat makan terbaik sesuai dengan selera dan keinginan Anda. Nikmati pengalaman kuliner yang tak terlupakan bersama keluarga dan teman-teman Anda.</p>
      </div>
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
