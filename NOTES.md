## Objectives
Your goals with this project:

Design and architect features across frontend and backend
Integrate JavaScript and Rails
Debug issues in small- to medium-sized projects
Build and iterate on a project MVP
Communicate in a technical environment

## Project Deliverables
In order to schedule your Project Review, you must submit:

A link to your project repo, with code for your Rails backend and HTML / CSS / JavaScript frontend.
A README.md file describing your application
A Blog Post about your application
A 2-4 minute Video Demo introducing your application
Read below for more details about the technical requirements for your project. See the section "Communicating About Your Project" in the Project Planning and Tips document for more guidance on communicating about your project.

As always, your project must be your own work. For more details about the rules of the road, see Project Rules of the Road.

## Technical and Complexity Requirements
In order to demonstrate your proficiency with what you've learned about web development with JavaScript, here are the requirements for your project. You should view these guidelines as a minimum bar for the features you include in your application. It's your project, and you are encouraged to go above and beyond these requirements.

1. The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

2. The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

3. The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.

4. The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

## USER STORY  
When a user opens the app, there is a list of student juries.
User can add a jury.
User can click a jury to view information and add a comment to a jury.


## BUILD THE APPLICATION
Some things to consider:

To add nouns to your world, create models in rails

To show your nouns, you'll need:

A controller action to send the data
A fetch request to ask for the data
Some JavaScript code to handle DOM-rendering
To make your page respond to the user, you'll need event listeners

To keep your code clean, you should use JavaScript classes

To organize your code, you can use multiple JavaScript files (don't forget to add <script> tags for each one!)

<!-- Use this for active model serializer: -->
https://learn.co/lessons/using-active-model-serializer



<!-- inside of id="jury-show" div -->
<form id="new-comment">
    <label for="content">Enter your comment: </label>
    <textarea type="textarea" name="content" id="content" rows="10"></textarea>
    <label for="score">Overall Score: </label>
    <select name="score" id="score">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>

    </select>
    <input type="submit" value="Add your Comment">
</form>