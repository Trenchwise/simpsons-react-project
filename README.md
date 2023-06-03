Session 1

HW
Wire up the delete button
Make the character face the correct direction
Show the total number of liked characters in the App component

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

First Russell trys using index to configer the delet buttons - but there is a problem with this.

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

To start this ondelete is sent to Simpsons at line 36. It will then be passed throught the other classes until it gets to the delete button.

The syntax changes slightly as the function is passed down (App can pass it directly because it's in its current scope). This is because you only get things through your parent as a prop. See below. There is also an example of this in Simpsons on line 11.

onDelete={this.props.onDelete} //

This is repeated until you get to character, which then gives the delete button the information it needs.

After this has been done, you need to check that the props have been drilled properly. You can do this by console.log'ing this.props. You should be able to see 50 versions of the on delete function, because there are 50 characters) usin dev tools.

// This has been returned correctly and was seen in the DOM

Now need to call back the function.

The button will now have the following code. On click of the delete button you need to call the this.props.onDelete

Because you pass the function all the way into another function.Now it can call the function the parent which sends that data upstairs.

onClick={() => this.props.onDelete(0)}

But what data to send the parent? Above we have hard coded the number zero. and wrap it in an annonymous otherwise it will happen instantaneously.

Now the button will always delete element zero.

--- This works BUT no matter which delete button you hit, it will always delete the first item, because we have hard coded the number zero.

A good way of doing this is to make it delete something unique.

First Russell tries marry the quote and the character

In Character:
<Delete onDelete={this.props.onDelete} quote={quote} character={character}

Now the delete button know the quote and the character that it is being created from.

Now in Delete - send the quote and character - you can see this in on line 8 in delete
