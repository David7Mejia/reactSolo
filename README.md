# Travlr :airplane:
   Travlr is your photo companion when you travel. The app allows you to share your photos instantly for all users to see on the feed page. Interactivity through posts include, CRUD image functionality and CRUD comment functionality. You can check out a users profile and see all their posts! Check out the live app: [Travlr](https://travlr-react.herokuapp.com)
   
# Technologies 
   Travlr uses modern React/Redux to handle frontend and state efficiently. The backend was created using NodeJS/Express with PostgreSQL utilizing the Sequelize ORM.  
   <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" title="JavaScript"><img src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg" alt="JavaScript" width="21px" height="21px"></a>
   <a href="https://reactjs.org/" title="React"><img src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="React" width="21px" height="21px"></a>
   <a href="https://redux.js.org/" title="Redux"><img src="https://github.com/get-icon/geticon/raw/master/icons/redux.svg" alt="Redux" width="21px" height="21px"></a>
   <a href="https://nodejs.org/" title="Node.js"><img src="https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg" alt="Node.js" width="21px" height="21px"></a>
   <a href="https://www.postgresql.org/" title="PostgreSQL"><img src="https://github.com/get-icon/geticon/raw/master/icons/postgresql.svg" alt="PostgreSQL" width="21px" height="21px"></a>
   <a href="https://expressjs.com/" title="Express"><img src="https://github.com/get-icon/geticon/raw/master/icons/express.svg" alt="Express" width="21px" height="21px"></a>
# Components 
## Landing
   - Landing uses keyframes for CSS slideshow and modals for Login and Signup Components. 
## Feed
   - Once authorized users will be redirected to the feed page. The feed contains all posts from all the users of the app. You may choose to navigate to a specific image by hovering over and clicking an image. This redirects the user to the posts individual page where they may see comments from other users. 
## Upload & Caption Image
   - As an authorized user, users can upload an image by navigating to the corresponding navlink. (For the moment images are uploaded through URLs)
### Edit & Delete Image
   - By clicking on the elipses icon a drop down menu containing the edit and delete functionality appear. 
## Comments 
   - Users can read and leave their own comments on an image. 
### Edit & Delete Comments
   - Users may only edit or delete their own comments. 
## Login
   - Existing users may log in to their account or through the use of a Demo button anyone may login and interact with the site for testing purposes. 
## Signup
   - Signup uses secure BCrypt encryption to store hashed passwords and email info. No passwords are stored directly in the database for security purposes.
 
 
