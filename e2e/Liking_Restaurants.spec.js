const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const restaurantKosong = 'Tidak ada restaurant untuk ditampilkan';
Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#restaurants');
  I.see(restaurantKosong, '#restaurants');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(restaurantKosong, '#restaurants');

  I.amOnPage('/#/home');
  I.seeElement('.restaurant__tittle');
  I.wait();
  const firstRestaurant = locate('.restaurant__tittle').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.wait();
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__tittle');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__tittle');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});