# NBA Info

This web application implements three microservices to generate and display information on all thirty NBA teams and all current active players in the NBA. All
information (other than the team names) is scraped directly off of Wikipedia. 

The three microservices used are Wikipedia text scraping, Wikipedia image scraping, and language translation, which is the one microservice that I created and the 
code can be found at https://github.com/hrachid12/Language-Translation-Microservice

On page load, the site dynamically generates team info and displays that information when a user requests it. From there a user can request information on a player.
Since there are hundreds of active players in the NBA, player information is only scraped off of Wikipedia when a user requests it.

This application was created using React, Typescript, Google's Datastore, and is hosted on Google Cloud Platform.

The site can be seen in action in the video, below:

https://media.oregonstate.edu/media/t/1_t1u8uqxx
