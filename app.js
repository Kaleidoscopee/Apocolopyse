// The Scenes
let gameScenes = [
    {
        sceneDescription: "It's the end of the world. A zombie contagion has infected the world and you must survive until help arrives. A zombie hoard is coming. Where do you go?",
        sceneChoices: ["Take the car", "Enter the house"],
        nextSceneIndexes: [1, 2]
    },
    {
        sceneDescription: "The car has trouble starting and the zombies surround the car until the window breaks. You have lost :(. Click Reset to try again!",
        sceneChoices: [],
        nextSceneIndexes: []
    },
    {
        sceneDescription: "You managed to lock the doors and set up a barrier. You also boarded up the windows and there was enough food to last 7 days. A helicopter has come to save you! You Win!",
        sceneChoices: [],
        nextSceneIndexes: []
    }
];

// Set scene index to main screen or 0
let currentSceneIndex = 0;

// Human & Dog class
class Human {
    constructor(name) {
        this.name = name;
    }
    humanChoice(choiceIndex) {
        // Scene index based on choice
        currentSceneIndex = gameScenes[currentSceneIndex].nextSceneIndexes[choiceIndex];

        // Update story and choices
        updateGameStory();
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
    dogChoice(actionIndex) {
        // Scene index based on choice
        currentSceneIndex = gameScenes[currentSceneIndex].nextSceneIndexes[actionIndex];

        // Update story and choices
        updateGameStory();
    }
}

// Makes Jack and a dog named Chonk
let jack = new Human("Jack");
let chonk = new Dog("Chonk");

// Function to update the story and choices
function updateGameStory() {
    //Get the current scene
    let currentScene = gameScenes[currentSceneIndex];

    //Update the story text
    document.getElementById("story").textContent = currentScene.sceneDescription;

    //Update the choices
    document.getElementById("choice1").textContent = currentScene.sceneChoices[0] || "";
    document.getElementById("choice2").textContent = currentScene.sceneChoices[1] || "";

}

//Makes choice buttons work
document.getElementById("choice1").addEventListener("click", function(){ jack.humanChoice(0);});
document.getElementById("choice2").addEventListener("click", function(){ jack.humanChoice(1);});


// Reset button
document.getElementById("reset").addEventListener("click", function() {currentSceneIndex = 0; updateGameStory(); });

// Begin Game Button
document.getElementById("begin").addEventListener("click", function() {updateGameStory(); });