Title: Apocolypse

Hello, this is a zombie Apocalypse Survival Game. 
It is capable of beginning screen, with a reset button, and working story options.

The game mainly focuses on DOM.
I uses an array called "gameScenes" and to keep track and move the scenes based on the button clicks.
In the array we have 3 properties of
- "sceneDescription" 
- "sceneChoices"
- "nextSceneIndexes"



- "sceneDescription" - This is a string for the current context of the story before the player is to make a choice. 
For ex. "It's the end of the world. A zombie contagion has infected the world and you must survive until help arrives."

- "sceneChoices" - This was the array of strings for the text that fills in the choices.
For ex. "Take the car", "Enter the house"

- "nextSceneIndexes" - This is the array of integers that indexes what scene should load in your in the gameScenes array. 


There is a "Human" class and a "Dog" class. You are playing as the human and the choices you make interact with the corresponding code.

1. So when you make a choice the nextSceneIndexes was set to the currenSceneIndex. 
2. Then the currentSceneIndex got the new scene from the gameScenes array. 
3. Then the updateGameStory functiono would show the sceneDescription and sceneChoices of the new scenario based on the human player choices.

Notes:

I am hoping to add dog class player choices, further story, and images to the background depending on the story context. 





