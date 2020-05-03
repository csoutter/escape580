# Escape The Maze: A Hogwarts Quest
In this game, you are a student at Hogwarts School of Witchcraft and Wizardry. To prove your mastery of magic, you are competing in the Triwizard Tournament. You are about to start the Third Task, the final task in this Tournament. You will begin by entering a magical maze, with challenges and obstacles at every turn. These will test your magical knowledge and quick thinking. You will use your keyboard to navigate through these obstacles.

Created for UNC's COMP 580 course.

Developed by Mary Halvorsen, Saumya Ray, and Cassidy Soutter

Demo Link: https://csoutter.github.io/escape580/

# Game Controls
Each level of the maze will begin with a description of the obstacle for that maze level. After this you will hear four options and will have to choose the correct option to proceed to the next level.

To repeat the description of the obstacle, press the "right arrow" key at any time.

To hear all possible options in a level, press the "tab" key on your keyboard. Continue to press the tab key to hear more options. Once you have heard all options, pressing tab again will repeat the options. On most keyboards, the tab button will be the second button below the top left button, or the escape key. After identifying the top left button, move down 2 keys with your finger and you should be at the tab key.

To select the latest option you have heard, press the space bar key. This will select that option. You will then hear a response indicating if you chose the correct option. If it is not correct, continue tabbing and select another option. If you do not hear any response after pressing the space bar, press tab again and then press the space bar.

Press the "left arrow" key at any time to hear a condensed version of these instructions

---
Report for 580

# Escape The Maze: A Hogwarts Quest
Mary Halvorsen, Saumya Ray, Cassidy Soutter

# Description of your project:
Escape The Maze: A Hogwarts Quest is a simulation of a series of obstacles and challenges intended to represent a magical maze. This game is modeled and inspired by the maze and Triwizard Cup in Harry Potter and the Goblet of Fire. The levels are based on events in the first five books of the Harry Potter series and progress in increasing levels of difficulty. This game involves simple tab and space-bar navigation and places an emphasis on narrated instructions and sound effects. At each level, a player must choose the correct answer from multiple choices given. Each choice is spoken out loud and has a sound effect. Selecting each choice gives feedback on whether it was the correct choice or not. If the choice is correct, the game automatically moves to the next level. Otherwise, the player can choose another answer choice. After passing all challenges, the player ends the game by winning the Triwizard Cup!

# Intended audience:
Children and adults with visual impairments and a love for Harry Potter.

# Technologies: 
This game can be played on a laptop or desktop browser using keyboard input. 

# Libraries/Frameworks used: 
The React JS library was used to develop this web-application. The react-sound package was used to utilize Sound as a component.

# How to build and deploy it: 
This game is accessible at the listed link. This link must be accessed in a Google Chrome browser. https://csoutter.github.io/escape580

# Problems encountered and future work: 
One of the greatest obstacles encountered throughout the development of this web-application was simulating automatic play of our audio elements through rendering of components. Another issue was using the tab key to select elements and circling through all of the options through tabbing. We also had to consider how we implemented audio. Initially, we tried generating speech within the React app, but this did not work well with the other sound effects. As a result, we pre-recorded all spoken audio files based on our script and imported them in the application. Since this was a Harry Potter-themed game, we used a lot of magical terminology that was not pronounced correctly by standard Text-To-Speech software (ex: Gryffindor, Triwizard, Blast-Ended Skrewt, etc.). When inputting these phrases in TTS, we had to consider alternative ways of spelling these words to output the desired pronunciation.

In the future, we would like to solidify the use of tabbing to focus elements and render their audio so that there are no lags in option navigation. We also wanted to add more levels and randomize the existing game levels so that the game can be replayable. The ordering of the levels could be shuffled. Level-specific questions could be randomized to ask about a different plant, spell, or prophecy.

