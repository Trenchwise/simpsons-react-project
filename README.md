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

✅ How to convert a class based file into a function one method one

Split the screen with the old component and in the new screen

- IMR
- FFC

1. Take everything that is inside the render method and copy across
2. Move over the imports
3. Remove this from the props. So its no lober this.props as it is no longer a class
4. Add the word props into the function. (Because props is no longer a member of the class, as its no longer a class based component).

✅ You can also do it this way - but this way is more prone to bugs

1. Remove the class sentence
   class Simpsons extends Component { (dont forget the other curly)
2. Rename the render method. On the following sentence remove the word render and adjust the sentence to read like the below. The key must be the component name and props has been written inside the brackets and sentce is turned into a fat arrow function
   const Search = (props) => {

3. Also need to remove any this. from the word props.

The Function part is really just the render part of the component. It should now function identically.

The weather component recieves props, destructers them

How to add state and life cycle methods in Functional.

Classes have members one of those members could be data called state. A Functional component is a new version very time. Therefore need a clever mechanism to make the data persist beyond the component rerendering.

✅ Things that are the same in Functional:

     - Props are read only
     - Conditional rendering
     - props. is the same
     - Spread operator
     - iteration, still need to use a key
     - Event handlers are the same
     - Raising the state

///// However managing State is quite different.

✅ A Hook

Gives you the ability to hook into functionality that traditionally is only in a class based component. We need hooks because everytime the component rerenders it is a new version. A new version has no memory of what has happend before.

✅ A hook helps data remain in the component.

----- Types of Hooks ------

✅ useState

✅ useEffect

✅ useCallback

When you call useState a special box is being created that holds the data and also holds a function that lets you manipulate the data that is inside. It does this using a closure. A closure is an action that has access to the upper scope. Therefore it can hold data beyond the rerender of the component.

UseState give you back two things: 1. The data 2. A way of changing the data

In class based, you have one set of state. But in functional you many bits of state.

Below Russell, demos counter

const App = () => {
const [count, setCount] = useState(0);
cost [name, setName] = useState(Tanyas Counter)
}

Use this way/convention to name useState boxes.
Best to use const
What you put in the parenthesis is the starting value

Return (
<>

<h1>{name}</h1> // This is display the same set above
<p>{count}</p> // This will isplay the starting number of the counter
</>
)

Above are two sets of data individually named

✅ lifecycles are also different in Functional

✅ useEffect is a hook and all hooks are functions.
There are three ways of writing useEffect. The difference is how the brackets are used. It cannot contain asyncronous behaviour

Lets you use the code off of the back of running some code. It is mixture of componentDidMount and componentDidUpdate

1. // component did mount and component did update
   useEffect (() => {
   console.log ("Use effect ran - without any dependencies");
   }, []) //// always run

2. // A version of component did mount
   useEffect (() => {
   console.log ("Use effet arn but only once");
   }, []) //// The empty square brackets means it only runs once

3. // component did update. In the brackets you write the things you want to cause it to trigger
   useEffect (() => {
   console.log ("Use effet arn but only when the count changes");
   }, [count]) //// Everytime count is updated it will run

✅useCallback

Wrapes the function inside a hook , which uses useCallback which means it only runs once and not over and over.

In Functional the order of the statements matter
Hooks always go at the top of the file

Once the data has made into functional. Have checked it is showing data in the terminal.

Set a loading message. If there is no data return loading. Otherwise show data.

Code below

if (!simpsons) return <h1>Loading</h1>;

return <Simpsons Simpsons={Simpsons} />;

Then made a wea
