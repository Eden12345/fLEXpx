# fLEXpx

fLEXpx is a full stack single page web app inspired by 500px. It was built with React/Redux and Ruby on Rails. It also has a custom user authentication pattern that impliments BCrypt for end-to-end security, utilizes Paperclip/AWS for photo uploading, and has a Follow feature through ActiveRecord associations.

[Live Site](http://flexpx.herokuapp.com/)


## Description

The landing page does not display any profile options in the nav bar until the visiting user is bootstrapped through the custom user authentication portal.

![screencap](https://github.com/Eden12345/fLEXpx/blob/master/assets/screencaps/screencap_landing.png)

The profile page utilizes flex-box display and z-index so that its layout is smooth and responsive.

![screencap](https://github.com/Eden12345/fLEXpx/blob/master/assets/screencaps/screencap_profile.png)

The Paperclip gem to allow users to upload content to the app's AWS server through the Ruby on Rails backend.

![screencap](https://github.com/Eden12345/fLEXpx/blob/master/assets/screencaps/screencap_upload.png)


## Languages Used

Languages/libraries/formats used on the frontend:
 * React
 * Redux
 * Javascript
 * HTML
 * JBuilder

Languages/libraries/formats used on the backend:
 * Ruby
 * Rails
 * SQL


## Feature Rollout Schedule

Week 1, Day 3:
  * Add User Auth

Week 1, Day 5:
  * Add Profile Page structure

Week 2, Day 2:
  * Add Follow feature
  * Add Home Feed

Week 2, Day 3:
  * Add Upload feature

Week 2, Day 4:
  * Add User/Photo Search


## Upcoming Changes

  * Likes feature - this will allow users to Like photos and view all of their Likes through a link in their profile drop-down menu
  * fLEXible ordering -- users will be able to reorder their uploaded images on their profile pages
