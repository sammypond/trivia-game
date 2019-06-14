1. Title and Description of project: 
-Trivia! is a two player trivia game which organizes questions into four different categories.  Before answering each question a user must select a point value to wager.  If the question is answered correctly the user's point total will increase by the amount which they wagered.  If the question is answered incorrectly the user's point value will increase by the amount which they wagered.  

-To win the game one of the users must accumulate a point total equal to or greater than 1000 AND have correctly answered at least one question from each category.  Users may only bet a point value between 1 and 200.  Categories answered correctly are tracked at the bottom of the page, where the color button which corresponds to it's category counterpart at the top of the page will turn white.  

2. Technologies used
-I made my colorful buttons using bootstrap.  
-I referenced W3 Schools for help with the modals that indicate scoring and error messages.  

3. Planning details - including wireframes, screenshots, other planning details
-I didn't wire frame this project and that's something I will for sure do differently next time.  I should have used objects to store data so that I did not constantly have to reference the DOM for updating data points.  

4. A development journal detailing your thought process and general chronology of work
-My first task was just to set up AJAX query to pull in trivia questions from an API.  I soon learned, the hard way, about declaring global variables so that variables can be passed between functions.  
5. Remaining issues or bugs that need fixing
-If you do not click exactly on the radio button target the game will recognize the input as false, even if your intended target was the correct choice. 
6. Features to add / wishlist
-A wider target for user input.  
-Remove the radio buttons before the questions load
-Modal to indicate which player's turn it is.  
