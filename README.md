## Pets on Earth

### Background and Overview
Our World in D3 is a educational website that shows world demographics through data visualization. Using different visualization gives different perspective of same information and allows us to see hidden trends and relationships.

### Functionality & MVP  

In Our World in D3, users will be able to:

- [ ] Click each category to zoom in
- [ ] Click the center to zoom out
- [ ] button to zoom out all the way
- [ ] visualize the population size of each category

### Wireframes

<img width="885" alt="screen shot 2018-08-19 at 4 59 32 pm" src="https://user-images.githubusercontent.com/39206890/44314777-525b2f00-a3d1-11e8-9deb-01ac6d8b855e.png">

This app will consist of a single screen with the simulation canvas, click button on the bottom to zoom all the way out, and nav links to the Github and my LinkedIn. 

The upper most layer will show general type of pets, such as dogs, cats, or birds. The inner most layer will consist of detailed information of the selected breed.

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript for overall structure and game logic,
- D3 library to implement visual representation
- Web Audio API for zoom in and zoom out sound generation.

There will be two scripts involved in this project:

`d3.js`: this script will handle the logic for creating the necessary DOM elements.

`audio.js`: this script will handle the audio logic and the creation of `AudioEvent`s based on users input.

### Implementation Timeline

**Over the weekend**:
- [ ] Do D3 tutorial to understand basics of D3.
- [ ] Finish readme.

**Day 1**: Learn D3 to implement some visual representation of all pets:

- [ ] Learn enough D3 to render some data in basic D3 chart.
- [ ] Import relevent data of pets.

**Day 2**: Continue learning D3 and how to implement visual. Be able to visually represent the population of each catergory. Goals for the day:

- [ ] Continue learning D3.
- [ ] Link the external data to the graph.
- [ ] Implement more visualization of the graph.
- [ ] Implement click zoom in and zoom out functionality.
- [ ] Make sure the size of each slice represents the population.
- [ ] Make sure all data is shown correctly.



**Day 3**: Visual implementation of zoom in and zoom out effect. Additional sound effect when zooming in or out. Goals for the day:

- [ ] Continue learning D3.
- [ ] Build visual effects of zoom in and zoom out.
- [ ] Add sound effects for zoom in and zoom out.
- [ ] Make sure that starting, stopping, and resetting works.
- [ ] Make sure zoom in and zoom out shows correct information.


**Day 4**: Add a button to zoom all the way out. Add more styling and visual effects, making it polished and professional. Goals for the day:

- [ ] Continue learning D3.
- [ ] Make sure 'zoom out all the way' button functions correctly.
- [ ] Style professionally.
- [ ] Make sure all data is shown correctly.
- [ ] Finish the project.

### Bonus features

There are many directions in which this project could evolve.

- [ ] Add more hierarchy.
- [ ] Last layer of information will show other useful statistics of selected breed.
- [ ] Add search bar.
