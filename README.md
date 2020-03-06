# escape580
An escape room simulation for people with disabilities. Created for UNC's COMP 580 course.

Developed by Mary Halvorsen, Saumya Ray, and Cassidy Soutter

# Adding Audio: 
 
 With react, the best way to add audio elements is with React Sound. React sound can be installed with 
 
 npm install react-sound. 
 
The dependencies for this should automatically be added when you have pulled the latest code, because the package-json files have been updated. If not, run npm install again. If that does not work, use the above command.
 
 https://www.npmjs.com/package/react-sound
 
 Import react Sound at the start of each javascript file you want to use it in with 
 
 import Sound from 'react-sound';
 
 The basic structure of a sound component is shown below, and should be incoroproated into the html of the component you are rendering on the page you want the music to play on. Different attributes to the sound component control how long it plays, 
 from what point within the music file it starts playing, etc.
 
 <Sound 
  url={"filename.mp3"}
  playStatus={Sound.status.PLAYING}
 />
