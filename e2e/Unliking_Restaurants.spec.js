const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const restaurantKosong = 'Tidak ada restaurant untuk ditampilkan';
Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('.restaurants');
  I.see(restaurantKosong, '.restaurants');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.dontSeeElement('.restaurant-link');
  I.amOnPage('/');

  I.seeElement('.restaurant-link');

  // I. wait();
  const firstRestaurant = locate('.restaurant-link').first();
  const firstRestaurantTitles = await I.grabTextFrom(firstRestaurant);
  I.wait();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.wait();
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants');

  const unlikedRestaurantTitle = await I.grabTextFrom('.restaurant-link');
  assert.strictEqual(firstRestaurantTitles, unlikedRestaurantTitle);

  I.seeElement('.restaurant-link');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.restaurant-link');
});