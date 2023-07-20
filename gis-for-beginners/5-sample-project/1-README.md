We can make a README where we roughly outline what we want our map to do and what we're trying to build.

Overall goal:
- Show the number of McDonald's in each state in the USA in a way that's easy for the user to see

Data
- Need to get the location of different McDonald's, either by address (and then get lat and lng) or just the number per state
- https://docs.google.com/spreadsheets/d/1eT1_sk8fyWSkXANHKZrNGBXtnv001qYIXgTivYnsf9k/edit#gid=0
- Need to get the state boundaries so we can display this on the map somehow
- https://github.com/PublicaMundi/MappingAPI/blob/master/data/geojson/us-states.json

Design
- We could just show dots on the map for each McDonald's, but probably that will be kind of hard to count easily
- We could show all the states, and show a popup on mouseover with the number of stores
- We could color the states incrementally based on the number of McDonald's in them

Tech
- We could use Leaflet or Maplibre, either would do fine -- just about personal preference.
- Here we're going to use Maplibre because I think it's good to get used to the paradigms in Maplibre
