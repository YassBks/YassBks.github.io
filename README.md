####IT SOCIETY MANANAGER####

TEST APPLICATION HERE: https://angular-6-application.firebaseapp.com

LOGIN: angular@test.com (id) test123(password)

----DESCRIPTION-------------------------

It's an application based on the framwork Angular's 6 version.

- The authentification is running with Firebase. https://firebase.google.com/
- Angular material inputs are implemented. https://material.angular.io/FFSD
- JQuery is implemented with the Tablesorter plugin. http://tablesorter.com/docs/ 

----FUNCTIONALITIES----------------------

---- Home:
- Click on consultant to see details

---- Consultant details
- See and edit consultants attributes
- -> If the room is already full a message is displayed asking to change the room 

---- Manage consultants:
- Click on column label to order the list 
- Click on consultant to see details
- Add consultant with the "+" at the end of the list
- Delete consultant with the "x" beside the consultant

---- Add Consultant
- Edit new consultants attributes
- -> Firstname and Lastname are required (no defauts values)
- -> If the room is already full a message is displayed asking to change the room

---- Manage Room
- Edit room properties (names and capacities)
- Add room with the "+" at the end of the list
- Delete room with the "x" beside the room
- -> A room can't have a capacity inferior to the number of consultants already in it
- -> The capacity number must bee between 1 and 100)
- -> Delete a room delete the consultants associated to it (a message is displayed to warn it)
