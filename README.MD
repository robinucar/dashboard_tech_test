## TECH TEST
### Context

Before an event occurs, an event organiser needs to have a list of all the participants who are taking part in their event and which race they are running in . This list is called a ‘race startlist’.

When someone makes a booking through our site, we need to collect all their relevant information and display it to our event organisers in a clear, easy to read format.

### The data

We have created an API that returns an array of json objects that replicates our booking data. Each object holds key information about the booking, some or all of which may be useful information to include on an organiser’s race startlist

The data can be found [here](https://ldt-tech-test.herokuapp.com/api/startlistentries). To use the data provided in your application, you may either:

1. Query the endpoint provided (i.e. a simple GET request)
2. Copy and paste the data into a file (within your application)

It does not matter which option you choose.

### Specification

You have been asked to build a dashboard that makes it easy for for organisers to view race startlist entries and ticket sale revenue.

1. It must be possible for organisers to apply a filter so that they can see only their startlist entries.
2. It must also be possible for each organiser to see how much they have made in ticket sales.

If you have time, you have also been given the opportunity to build in one other feature you think will be useful for our event organisers. As an engineer at Let’s Do This, you are heavily involved in all parts of a product’s development, so in addition to testing your coding ability, we also want to see how you think about engineering in the context of a broader product. Hence, we’re giving you some space to build something you think might be useful.

Some questions that might be helpful to consider:

- What do other products in this space usually do?
- How much time will your proposed features likely take you to implement? Do you have enough time? If not, is there a simpler way to give a user 80% of the experience?

### Run Application

```
SERVER SIDE
- Clone the repo - https://github.com/robinucar/dashboard_tech_test
- cd server
- Run node server.js

CLIENT SIDE
- cd client
- Run npm start

```

## USER STORIES

### USER STORY 1
As a user,
I can see some of event details,
I would like to see data details on my browser.

### USER STORY 2
As a organiser,
I can see tickets I sold so far,
I would like to see the ticket details filtered by organiser title.

### USER STORY 3
As a user,
I can see the total confirmed ticket sales,
I would like to see total amount  on my browser.

### USER STORY 4
As a user,
I can see the total pending ticket sales,
I would like to see total amount  on my browser.

### USER STORY 5
As a user,
I can see the total refunded ticket sales,
I would like to see total amount  on my browser.

### USER STORY 6
As a organiser,
I can see the total of tickets I sold,
I would like to see total amount  on my browser.




# IMPROVEMENTS

 SORT ALL DATA BY RACE START DATE
SEARCH FUNCTION SHOUD ALSO WORK BY ORGANISERID, FIRSTNAME, LASTNAME, DATE
#RIGHT NOW WE ARE SEEING ALL ORGANISER TICKET SALES REPORT AT THE BOTTOM OF PAGE. WHICH CAN BE HIDE INSTEAD OF THAT WE SHOULD CREATE ORGANISER AUTHENTICATION. AND EACH ORGANISER SHOULD SEE THEIR OWN REPORT


## TDD
I can write unit tests using JEST and React Testing Library

## CSS

 I can do better styling using pure css or sass, Also I can import some css framework such as Bootstrap or MaterialUI 


## Test issue 
This issua is a dependency/enviroment issue. I made lots of research changed the @babel config. But unfortunatelly I have not sorted so far. I am still trying to sort it out.