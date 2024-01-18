/**
 * SORTING NODES WITHIN A CONTAINER
 * Please, make sure to read the following files in the exercises-info folder before you start
 * * 01 SelectNodes.md
*/

/**
 * @task
 * Select all elements that have class of "item" as a NodeList.
 * Store them in the allItems variable
 * Example: const allItems = <Your code>;
 */

// Your code goes here...



/**
 * @task
 * Select the main container by the id of "main"
 * Store it in the main constant
 * Example: const main = <Your code>
 * */

// Your code goes here



/**
 * @task
 * Select the favorites container by id of "favs"
 * Store it in the favs constant
 * Example: const favs = <Your code>;
 */

// Your code goes here



/**
 * @task
 * Create the updateCollections(id, direction) function that follows the list of requirements:
 * Takes an argument of the item id (number)
 * Take an argument of direction as a string value of 'toMain' or 'toFavs'
 * Moves the element from the current parent to the new parent (from main to favs or vice versa)
 * Changes the icon of the element: fa-heart-circle-plus for main, fa-heart-crack for favs items.
 */

// Your code goes here



/**
 * @task
 * Iterate through the every item in allItems NodeList and apply the
 * addEventListener click event to each item.
 * The item click must execute/call the following:
 * * Get the current item's parent id ('main' or 'favs')
 * * Get the current item id (a number value)
 * * Set the direction constant to be equal to 'toFavs' or 'toMain', based off the current location
 * * The direction means the collection to move the item into, when the item is clicked
 * * If the correct item's location is the parent of id 'main' -> the direction is 'toFavs'
 * * If the correct item's location is the parent of id 'favs' -> the direction is 'toMain'
 * * Make the updateCollections function call, assign the item Id and the direction defined above
 */

// Your code goes here...

document.addEventListener("DOMContentLoaded", () => {
  const mainCollection = document.getElementById("main");
  const favsCollection = document.getElementById("favs");

  // Function to move items and update icon classes
  function moveItem(item, targetCollection) {
    // Change icon class based on the target collection
    const icon = item.querySelector('i');
    if (targetCollection === favsCollection) {
      icon.classList.remove('fa-heart-circle-plus');
      icon.classList.add('fa-heart-crack');
    } else if (targetCollection === mainCollection) {
      icon.classList.remove('fa-heart-crack');
      icon.classList.add('fa-heart-circle-plus');
    }

    // Move the item
    targetCollection.appendChild(item);
  }

  // Handle clicks in the Main Collection
  mainCollection.addEventListener("click", function(event) {
    if (event.target.classList.contains('fa-heart-circle-plus') || event.target.classList.contains('item')) {
      const item = event.target.closest('.item');
      moveItem(item, favsCollection);
    }
  });

  // Handle clicks in the Favorites Collection
  favsCollection.addEventListener("click", function(event) {
    if (event.target.classList.contains('fa-heart-crack') || event.target.classList.contains('item')) {
      const item = event.target.closest('.item');
      moveItem(item, mainCollection);
    }
  });
});




  
  

