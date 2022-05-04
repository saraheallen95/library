function main() {
  //initialize library array

  let myCookBookLibrary = [];

  const bookColors = ["red", "blue", "yellow", "orange", "green", "purple"];

  //prototype to get random item from array
  Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
  };

  //get body tag to start adding dom elements
  const body = document.getElementsByTagName("body")[0];

  //create shelf for books
  const shelf = document.createElement("div");
  shelf.style.display = "flex";
  shelf.style.backgroundColor = "saddlebrown";
  shelf.style.border = "16px solid black";
  shelf.style.minWidth = "100%";
  shelf.style.maxWidth = "100%";
  shelf.style.minHeight = "33%";
  body.appendChild(shelf);

  //constructs books with attributes for title, author, triedRecipe/nottriedRecipe status, cuisine, and fav recipe
  class cookBook {
    constructor(title, author, triedRecipe, cuisine, recipe) {
      this.title = title;
      this.author = author;
      this.triedRecipe = triedRecipe;
      this.cuisine = cuisine;
      this.recipe = recipe;
    }
    markBookAstriedRecipe = function () {
      if ((this.triedRecipe = false)) {
        this.triedRecipe = true;
      } else {
        this.triedRecipe = false;
      }
    };
    addToShelf() {
      const bookDiv = document.createElement("div");
      shelf.appendChild(bookDiv);
      bookDiv.style.display = "flex";
      bookDiv.style.flexDirection = "column";

      const color = bookColors.random();
      bookDiv.style.backgroundColor = color;
      bookDiv.style.border = "8px black solid";
      bookDiv.style.maxWidth = "20%";
      bookDiv.style.minWidth = "20%";

      for (const value of Object.values(this)) {
        if (typeof value == "string") {
          bookDiv.innerText += " " + value;
        }
      }
    }
  }

  //crate button associated with the toggle recipe function once cookBook is created
  function createToggleTriedRecipeBtn(myCookBookLibrary) {
    const toggleTriedRecipeBtn = document.createElement("button");
    toggleTriedRecipeBtn.innerText = "I've Tried a Recipe From This Cookbook";
    toggleTriedRecipeBtn.onclick(this.markBookAstriedRecipe);
    return toggleTriedRecipeBtn;
  }

  //functions to open/close form
  function openForm(myCookBookLibrary) {
    document.getElementById("popUpForm").style.display = "block";
    if (!document.body.contains(document.getElementById("cancelBtn"))) {
      document.getElementById("popUpForm").appendChild(addCancelBtn());
    }

    //event listener to call function to add new cookbook when submit is pressed
    const form = document.querySelector("#newCookBookForm");

    form.addEventListener("submit", function (event) {
      let book = addNewCookBook(this);

      //this cookbook library is a global constant that needs to be removed...also TOP said I should use an array but I'm not using it so far
      myCookBookLibrary.push(book);
      book.addToShelf();
      document.getElementById("popUpForm").style.display = "none";
      event.stopImmediatePropagation();
      event.preventDefault();
    });
  }

  //function to call on submit to add a new cookbook to the array
  function addNewCookBook(form) {
    let formData = new FormData(form);

    let title = formData.get("title");
    let author = formData.get("author");
    let cuisine = formData.get("cuisine");
    let favrecipe = formData.get("favrecipe");
    let triedRecipe = false;

    const inputs = document.querySelectorAll(
      "#title, #author, #cuisine, #favrecipe, #triedRecipe"
    );
    inputs.forEach((input) => {
      input.value = "";
    });

    return new cookBook(title, author, triedRecipe, cuisine, favrecipe);
  }

  function addCancelBtn() {
    const cancelBtn = document.createElement("button");
    cancelBtn.innerText = "Cancel";
    cancelBtn.setAttribute("id", "cancelBtn");
    cancelBtn.onclick = function () {
      document.getElementById("popUpForm").style.display = "none";
    };
    return cancelBtn;
  }

  //button to add new cookbook
  function addNewCookBookBtn(myCookBookLibrary) {
    const addNewCookBookBtn = document.createElement("button");
    addNewCookBookBtn.innerText = "Add A New Cookbook";
    addNewCookBookBtn.onclick = function () {
      openForm(myCookBookLibrary);
    };
    return addNewCookBookBtn;
  }

  //NEED TO WRITE

  //function to add to submit event listener to add a new element to the DOM based on the cookbooklibrary array

  function addCookBookDiv(myCookBookLibrary) {
    for (const [key, value] of formData) {
      console.log("»", key, value);
    }
  }

  //function to add the toggle tried recipe value once the element has been added to the dom (book on shelf)

  //test function to make sure my functions work and library exists
  function test() {
    console.log("test runs!");

    const el = document.createElement("pre");
    el.style.color = "black";
    document.body.appendChild(el);

    function log(text) {
      console.log(text);
      el.innerText += `\n${text}`;
    }

    function assert(assertion, message) {
      if (!assertion) {
        log(message);
      }
    }

    let library = [];

    let spanishCuisine = new cookBook(
      "Spanish Cuisine",
      "Rosa",
      false,
      "Spanish",
      "Paella"
    );

    library.push(spanishCuisine);

    assert(1 + 1 == 2, "Math is wrong");
    let book = library.find((book) => book.title === "Spanish Cuisine");
    assert(book.title == "Spanish Cuisine", "Spanish Cuisine should exist");
  }

  document.body.appendChild(addNewCookBookBtn(myCookBookLibrary));
  test();
}

main();
