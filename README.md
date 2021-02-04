# On-This-Day-Kobe
Created a responsive web app to display the achievements of Kobe Bryant on any given day

## How It Works
When a user opens the page, there is a button present for the user to submit the csv file containing the career stats of Kobe Bryant.
Then the file is read as text, and the data is processed using the processData() function. processData() is responsible for 
removing the delimitter from the csv file, and then calls analyzeStats(). 
analyzeStats() is used to search for entries in our data that match today's date and then calculate the total points scored 
and display a list of all the games Kobe Bryant played today along with any meaningful stats such as the opposing team, # of points scored and the year. 

## Next Steps 
To improve the app, the next step is to remove the button used to select the csv file. The app should already have access to the file and should run when the page is loaded. Additionally, I want to remake the app using the React framework instead of JS. 

![SS](https://user-images.githubusercontent.com/43581986/106825423-d8779880-6652-11eb-8742-dfe7c67d9ad7.jpg)
