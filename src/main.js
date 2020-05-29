/**** What's Next? ****
-Add the <div> with the multiplication X to the end of each <li>
-Add the ability to press the X to remove that specific <li>
-Add a way to check off a finished item
-Add a javascript hover for the X to show up and hide:
    A.) Add CSS that hides the X div
    B.) Add javascript to change the css state based on mouseOver
*/

const domList = document.getElementById( 'list' );
const toDoInput = document.getElementById( 'todo-input' );
const userList = []
const form = document.forms['todo-list'];
const liDiv = document.querySelector( 'li div' );

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

// Show the multiplication X when mouse is hovering
domList.addEventListener( 'mouseover', ( event ) => {
    liDiv.style.visibility = 'visible';
})

// Hide the multiplication X when the mouse is elsewhere
domList.addEventListener( 'mouseleave', ( event ) => {
    liDiv.style.visibility = 'hidden';
})

// Create LI Node with child Text and add text to userList ARRAY
function createElement( toDoText ) {
    const el = document.createElement( 'li' );
    userList.push( toDoText );

    el.textContent = toDoText;

    domList.appendChild( el );
}

