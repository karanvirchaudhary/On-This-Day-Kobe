# On-This-Day-Kobe
Created a responsive web app to display the achievements of Kobe Bryant on any given day

## How It Works
When a user opens the page, there is a button present for the user to submit the csv file containing the career stats of Kobe Bryant.
Then the file is read as text, and the data is processed using the processData() function. processData() is responsible for 
removing the delimitter from the csv file, and then calls analyzeStats(). 
analyzeStats() is used to search for entries in our data that match today's date and then calculate the total points scored 
and display a list of all the games Kobe Bryant played today along with any meaningful stats such as the opposing team, # of points scored and the year. 
