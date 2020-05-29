// Grabbing our empty unordered list tag
const domList = document.getElementById( 'list' );
const toDoInput = document.getElementById( 'todo-input' );
const userList = []
const form = document.forms['todo-list'];

/* For testing
const userList = [
    'test',
    'test',
    'test',
    'test'
]
*/

// Prevent the default ENTER/RETURN action of the <input> field
toDoInput.addEventListener( 'keydown', ( event ) => {
    if( event.keyCode === 13 ) {
        event.preventDefault();
        console.log( 'Default prevented' );
    }
})

// Grab the input value, create an <li> element /w text, and reset the value in the input
toDoInput.addEventListener( 'keyup', ( event ) => {
    if( event.keyCode === 13 ) {
        if( toDoInput.value === "" ) {
            alert( 'Do not leave blank' ); //improve this by not using an alert and ignoring and empty
        } else {
            userList.push( toDoInput.value );
            console.log( userList );
            createElement( toDoInput.value );
            toDoInput.value = "";
        }

    }
})

// Create LI Node with child Text and add text to userList ARRAY
function createElement( toDoText ) {
    const el = document.createElement( 'li' );
    userList.push( toDoText );

    el.textContent = toDoText;

    domList.appendChild( el );
}

// This adds, upon keyup, an object to the toDoList
//toDoInput.addEventListener( 'keyup', createElement );

