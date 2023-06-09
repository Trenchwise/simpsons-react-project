Session 1

HW 1
Wire up the delete button - done
Make the character face the correct direction - done
Show the total number of liked characters in the App component

HW 2

Take my latest simpsons project (or use your own) and extend it with the following:
Ability to sort the characters in at least two ways
Ability to filter the characters (search box)
Ability to reset the sort and filter

THINGS TO REMEMBER:

- State is an object that keeps track of variable changes in components.
- Prop drilling is simply passing down props to child components
- You can attach a message to the state

Resources:

Lifting State and prop drilling
https://medium.com/@kristinethejohnson/lifting-state-up-prop-drilling-in-react-3ef3367fca7a

When approaching this task. Good idea to draw a diagram to figuer out which files need to be amended.

The state for the characters live in App - so this is the part that needs to be amended.

You need to tell the programme what it should delete. To do that you need to write a function.
onDelete at line 17 on App.jsx As can be seen below. Its good practice to make a copy first

onDelete = (index)=> {
const copy = [...this.state.simpsons] // now there is a copy of what is in the state
copy.splice(index, 1); //Here you remove 1 from the copy
this.setState ({simpsons:copy}) // Now you tell React to replace the orginal w the copy

Any JS can go in the render section as long as its html.

- Its best to use turnarys in the render section

# simpsons-class-task

Simpons React class task

React Lesson 2

Conditional rendering - you can return different things based on what is in the State.

componentDidMount. The componentDidMount() method is called after the component is rendered. This is where you run statements that requires that the component is already placed in the DOM.

- Simpsons wiring up the delete buttons:

You must find the file where the state is set for thing you want to change.

Make a function to remove something from the state first.

When working with classed based React it doesn't matter what order the functions are in.

How does the function know what to delete. You will need to tell it something unique so it can figuer it out.

First Russell trys using index to configure the delete buttons - but there is a problem with this.

//// Using index to wire up the delete button.

        - This is will always delete the same character...

The function first will take index which will make a copy of the state, it will splice an item and then it will send the new array back to the state. (Its considered good practice to make a copy of the state)

Then you take the copy and splice at 1 in the index.

Then you say to React, I've now mutated the copy heres the copy, go and replace it.

The funcion lives in App - but the button lives in Delete. So now need to pass the prop down through Simpsons to character and then to delete.

> App (starts here)
> Simpsons
> Character
> Delete button

This process is known as prop drilling. Need to drill the props one level at a time.

To start this onDelete is sent to Simpsons at line 36. It will then be passed through the other classes until it gets to the delete button.

The syntax changes slightly as the function is passed down (App can pass it directly because it's in its current scope). This is because you only get things through your parent as a prop. See below. There is also an example of this in Simpsons on line 11.

onDelete={this.props.onDelete}

This is repeated until you get to character, which then gives the delete button the information it needs.

After this has been done, you need to check that the props have been drilled properly. You can do this by console.log'ing this.props. You should be able to see 50 versions of the on delete function, because there are 50 characters) usin dev tools.

// This has been returned correctly and was seen in the DOM

Now need to call back the function.

The button will now have the following code. On click of the delete button you need to call the this.props.onDelete

Because you pass the function all the way into another function. Now it can call the function the parent which sends that data upstairs.

onClick={() => this.props.onDelete(0)}

But what data to send the parent? Above we have hard coded the number zero. and wrap it in an annonymous otherwise it will happen instantaneously.

Now the button will always delete element zero.

--- This works BUT no matter which delete button you hit, it will always delete the first item, because we have hard coded the number zero.

A good way of doing this is to make it delete something unique.

First Russell tries to marry the quote and the character

In Character (line 27):
<Delete onDelete={this.props.onDelete} quote={quote} character={character}

The above has now passed information about the quote and the character to the delete button. Now the delete button knows the quote and the character that it is being created from.

In Delete (line 10):
<button
onClick={() =>
this.props.onDelete(this.props.quote, this.props.character, this.props.character)
} >

Now in onDelete in Delete - it is now sending character and quote information to the parent component using this.props.character ect. You can send many things not just one

In App - now re-setting what Ondelete does.

OnDelete will now take quote and character instead of index.

    QUESTION - Delete button now knows the character and quote information contained in the data. Therefore delete now knows which character and quote it is attached to. Why does the below need to be send back up to the parent component?

    After prop drilling ok. BUT the process after passing down charcter and quote to the delete button. Why do we need to apply indexOf?

     this.props.onDelete(this.props.quote, this.props.character, )

Here we are giving each character a unique number by using

const indexOf = this.state.simpsons.findIndex((char) => {
char.quote === quote && char.character === character;
});

const copy = [...this.state.simpsons]; // This makes a copy of the state
copy.splice(indexOf, 1); // This spices at position one in the index
this.setState({ simpsons: copy }); // This tells React to update the copyMaking

-- findIndex
The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

Splicing code is re-added (uncommented) and indexOf is added at line 24 of App instead of index.

The app can now delete the character it is clicked on. However it doesn't work if there are duplicates in the data. As then there no unique ID.

Russell then goes on to do this. In the demo.

////// Adding a unique ID to each character

- This is so program knows what character to delete. Adding an ID no into the data its self (into the array)

He does this by adding a unique ID to (line 16 in App)

-- The forEach() method executes a provided function once for each array element.

console.log(data); will show you the data

After the unique id information is added in App (in the data section)
Will then need to update the following: - Simpsons (line14) key and exchange character for ID - Character

N.B - You can attach a message to the state

///// Making the characters face different directions

When trying to make the characters face the correct direction. In Character - CharacterDirection was added to the destructering and the return was repeated and image and quote were switched around, this made the character appear as though it was facing the direction of the quote.

This does mean that chuncks of code have been repeated. However you can also wrap the quote in a div and add a class name of characterDirection and then use flex box to give it an order of plus or minus one - this is pure CSS solution

///// To show the number of liked characters

Lifting the state would be clunky because each character has its own state and using the onLikeToggle and lifting it in App would act like a big on/off switch.

Here Russell suggests to add to the character whether it is liked in App. He removes the onLikeToggle function from Character and the button from Name. This means that the liked button no longer does anything

Principal called - The single source of truth:

If there is a list of characters then all the data about the characters should live in the same place. Otherwise it can get confusing.

In App on line 24 OnLikeToggle - goes and finds the character and makes a copy of it. On line 29 adds a liked property of true to the item. Now need to pass the OnLikeToggle down.

After this has been passed down to character, Simpons and Name, then an event listener is added to the button. Line 10 in Name.

Now the information in the data has been changed. Each character will now have a liked property in the console log based on whether the liked button has been clicked or not.

Now there is a single source of truth. All the data now lives in one object.

However clicking the button again does not unlike the data.

There for a turnary is added. The button starts its life as being liked: false. Clicking the button then adds the liked property.

simpsons[indexOf].liked = !simpsons[indexOf].liked; // this line makes the character be the opposite of its self.

After this is done you need to tell the state that the information has changed.

After liked button toggle is working, now need to calculate the number of liked characters. This is done in render in App - because we dont want to store the number in the state. once its been used its not needed anymore.

In App
// Calculates the number of likes characters
let total = 0; //creates counter
simpsons.forEach(char => { // loops over the data
if(char.liked) total++; // if character is liked add one to the total
})

This creates a counter, loops over the data and if the character is like add one to the total.

total is then added into line 62 after the #.

As there is a single source of truth (one place where all the data lives). when a character is deleted this affects the number of liked.

Questions - why not jump from App (where data is pulled) and go straight into destrcuturing i.e character?

Because we seperate each part by concern. For example: - App: is where all the data lives. - Simpsons maps over the data and breaks data down into characters - Character breaks data down into name, image, quote and adds a delete button.

//// Filtering the characters 1.36

Add a search box underneath number of liked characters. To do this. Created a new component called search and returned Search in App.

Then need to listen on the event of someone writing in the text box.

To do this need to write a function in App. The contents of the search box needs to go into App because thats where the data lives. The function will take the event which is raised when the person starts typing. Then when the person types its going to store the information in the state. Then set the state to contain the search input.

// Function that listens for text going into text box
onSearchInput = (e) => {
this.setState({ searchInput: e.target.value });
};

Then Russell adds a console log in render to show the state.

Question:
Why do we destructure like this in Character?

Then the function is passed down into Search which I put in App.. Is this right?

To filter - you then just calculate when you need it. Instead of storing the data in the data and having two versions of the information

Need help - got to as far as line 21 in App to try and filter the characters. Not sure about how to destructure the data...
