# fLEXpx

fLEXpx is a full stack single page web app inspired by 500px. It was built with React/Redux and Ruby on Rails. It also has a custom user authentication pattern that implements BCrypt for end-to-end security, utilizes Paperclip/AWS for photo uploading, and has a Follow feature through ActiveRecord associations.

[Live Site](http://flexpx.herokuapp.com/)


## Description

![screencap](https://github.com/Eden12345/fLEXpx/blob/master/assets/screencaps/screencap_landing.png)

As this is a single page web app, components are reused on every page. On the landing page, the nav bar does not display any profile options until the visiting user is bootstrapped through the custom user authentication portal. This is because it is the same nav bar component that is rendered after a user successfully logs in.

Clean, responsive styling techniques were paramount when coding the CSS for this app in order to reproduce the design quality of widely used photo sharing apps like 500px. The profile page utilizes flex-box display and z-index to ensure these design principles.

![screencap](https://github.com/Eden12345/fLEXpx/blob/master/assets/screencaps/screencap_profile.png)

As this site hosts images uploaded by external users, Amazon Web Services seemed to be the most appropriate option for a secure and reliable data bucket. The Paperclip gem allows users to upload content to the app's AWS server through the Ruby on Rails backend, and provides options on the development end for storing alternate image versions with ImageMagick (eg. a smaller format for thumbnail displays).


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
