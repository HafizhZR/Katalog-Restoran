/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#restaurants.restaurants');
  I.see('Your Favorite Restaurant', '.content__heading');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('h3>a');
  I.wait();
  const firstRestaurant = locate('h3>a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.wait();
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('h3>a');

  const likedRestaurantTitle = await I.grabTextFrom('h3>a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  
  I.seeElement('h3>a');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.dontSeeElement('h3>a');
});
