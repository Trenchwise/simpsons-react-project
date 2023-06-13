Functional React.

React functional video 1

HW

Recreate the simpsons API project using functional, it should include

- sort
- filter
- like/dislike
- delete

You can think of the functional component as just being the the render method.

Its just a function that returns some html.

Converting a Project in functional React

In App - leave componentDidMount as classed based. Where setState is called.

If the component doesn't have state or life cycle methods - then it is candidate for changing in functional.

Candiates for making into Functional -

        Simpsons
        Name
        Quote
        Search
        Is character a good candidate for making into Functional. It splits state from App..

Time stamp: 10.55
Split the screen with the old component and in the new screen

- IMR
- FFC

1. Take everything that is inside the render method and copy across
2. Move over the imports
3. Remove this from the props. So its no lober this.props as it is no longer a class
4. Add the word props into the function. (Because props is no longer a member of the class, as its no longer a class based component).

You can also do it this way - but this way is more prone to bugs

1. Remove the class sentence
   class Simpsons extends Component { (dont forget the other curly)
2. On the following sentence remove the word render and adjust the sentence to read like the below. The key must be the component name and props has been written inside the brackets and sentce is turned into a fat arrow function
   const Search = (props) => {

The Function part is really just the render part of the component. It should now function identically.

The weather component recieves props, destructers them
