LGM Matabane's Mar's Rover Mission
===

Intro
---
This project only works on the latest version of GOOGLE CHROME.

The aim of this js-coded rover mission is to attempt to use JS to create a re-enactment
of the challenge in terms of source code applied in Javascript.

Breakdown
---

The surface area will be created using two values representing the X & Y co-ordinates.
The UI Will ask for both when opened.

The program will then ask for the commands in the format given:

1 X: eg 3 (The full scope of the x plane in the surface view)

2 Y: eg 4 (The full scope of the y plane in the surface view)

3 Origin: 1,2 E (eg Where the Rover starts its exploration & the direction it's facing)

4 Navigational Instructions:
 MMLMRMMRRMML
 (These are the instructions given to the rover , so it knows where to move)

The best is to do a ```Simulation(bool possible)``` of motion to see if field actually can accomodate
all the instructions and then ```ExecuteMotion(bool done)```, if the field can then this set is relayed
back to HQ ```[SendToHQ(string Instructions)``` else the prompptclears the motions and asks form
another set of nav instructs.

The rover has the ability to either face East, West, North or South.

The Rover will have the ability to be initialized facing any of those directions.

The Rovre has the bility to turn either LEFT or RIGHT, the Rover can also MOVE.

Controls
---
M : Move ; This moves the Rover one step at a time. MM mmoves the rove in that direction twice.

L : Left ;This turns the Rover Left. This represents one motion.

R : Right ;This turns the Rover Right. This represents one motion.


Additional Concepts
---
Still needs work but I pushed it as far as I could.
