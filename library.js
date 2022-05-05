const bookColors = ["red", "blue", "yellow", "orange", "green", "purple"];

function test() {
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

  assert(1 + 1 == 2, "Math is wrong");
  let book = library.find((book) => book.title === "Spanish Cuisine");
  assert(book.title == "Spanish Cuisine", "Spanish Cuisine should exist");
}

function main() {
  class cookBook {
    constructor(title, author, recommendedYN, cuisine, recipe) {
      this.title = title;
      this.author = author;
      this.recommendedYN = recommendedYN;
      this.cuisine = cuisine;
      this.recipe = recipe;
    }
  }

  cookBook.prototype.markBookAsRecommendedYN = function () {
    if ((this.recommendedYN = false)) {
      this.recommendedYN = true;
    } else {
      this.recommendedYN = false;
    }
  };

  function setBodyHTMLAttributes() {
    let bodyHTML = document.querySelectorAll(".bodyHTML");
    let i = bodyHTML.length;
    while (i--) {
      bodyHTML[i].style.backgroundColor = "white";
      bodyHTML[i].style.display = "flex";
      bodyHTML[i].style.alignItems = "center";
      bodyHTML[i].style.justifyContent = "center";
      bodyHTML[i].style.flexDirection = "column";
      bodyHTML[i].style.boxSizing = "border-box";
    }
  }

  function createHeaders() {
    //make header container
    const headerContainer = document.createElement("div");
    headerContainer.style.display = "flex";
    headerContainer.style.flexDirection = "column";
    headerContainer.style.justifyContent = "center";
    headerContainer.style.alignItems = "center";
    headerContainer.style.textAlign = "center";

    //add header
    const header = document.createElement("h1");
    header.innerText = "My Cookbook Library";
    headerContainer.appendChild(header);

    //add subtitlte
    const subtitle = document.createElement("para");
    subtitle.innerText = "Add your favorite cookbooks below.";
    headerContainer.appendChild(subtitle);
    subtitle.style.marginBottom = "24px";

    return headerContainer;
  }

  //create shelf for books

  function buildShelf() {
    const shelf = document.createElement("div");
    shelf.style.display = "grid";
    shelf.style.gridTemplateColumns = "repeat(auto-fill, 350px)";
    shelf.style.justifyContent = "center";
    shelf.style.alignItems = "center";
    shelf.style.minWidth = "70%";
    //shelf.style.minHeight = "50%";
    return shelf;
  }

  function buildLibrary(library, shelf) {
    for (i = 0; i < library.length; i++) {
      shelf.appendChild(createBookDiv(library[i]));
    }
    return shelf;
  }

  function createLibrary() {
    let library = [];
    return library;
  }

  function addBookToLibrary(book, library) {
    library.push(book);

    return library;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function createBookDiv(book) {
    //create an element bookDiv
    const bookDiv = document.createElement("div");
    bookDiv.style.display = "flex";
    bookDiv.style.justifyContent = "space-between";
    bookDiv.style.alignItems = "center";
    bookDiv.style.flexDirection = "column";
    bookDiv.style.backgroundColor = "grey";
    bookDiv.style.border = "8px black solid";
    //bookDiv.style.maxHeight = "252px";
    //bookDiv.style.minWidth = "33%";
    bookDiv.style.padding = "16px";
    bookDiv.style.margin = "12px";

    //add text to the bookDiv
    for (const key of Object.keys(book)) {
      if (typeof book[key] == "boolean") {
        const para = document.createElement("p");
        para.style.margin = "8px";
        para.innerText = "Tried recipe?";
        //need to add way to show if recipe was tried
        bookDiv.appendChild(para);
      } else if (typeof book[key] == "string") {
        if (key == "title") {
          const title = document.createElement("h1");
          title.style.margin = "12px";
          bookDiv.appendChild(title);
          title.innerText = book[key];
        } else {
          const para = document.createElement("p");
          para.style.margin = "8px";
          bookDiv.appendChild(para);
          let keyString = capitalizeFirstLetter(key);
          para.innerText = `${keyString}: ${book[key]}`;
        }
      }
    }
    return bookDiv;
  }

  let spanishCuisine = new cookBook(
    "Spanish Cuisine",
    "Rosa",
    true,
    "Spanish",
    "Papas Bravas"
  );

  let chineseCooking = new cookBook(
    "Chinese Cooking",
    "Ming",
    false,
    "Chinese",
    "Fried Rice"
  );

  let koreanFood = new cookBook(
    "Korean Food",
    "Song",
    true,
    "Korean",
    "Kimchi"
  );

  let italianClassics = new cookBook(
    "Italian Classics",
    "Mario",
    false,
    "Italian",
    "pasta"
  );

  let american = new cookBook("American", "Bob", false, "American", "pizza");

  //function to create form container
  function makeFormContainer() {
    const formContainer = document.createElement("div");
    formContainer.style.display = "none";
    document.body.appendChild(formContainer);
    return formContainer;
  }

  //function to create form
  function makeForm(formContainer) {
    // Create a break line element
    let br = document.createElement("br");

    //create strong element
    const strong = document.createElement("strong");

    //create a form dynamically
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "?");
    formContainer.appendChild(form);

    // Create an input element for title
    const recipeTitle = document.createElement("input");
    recipeTitle.setAttribute("type", "text");
    recipeTitle.setAttribute("name", "recipeTitle");
    recipeTitle.setAttribute("placeholder", "Spanish Cuisine");

    // Create an input element for author
    const author = document.createElement("input");
    author.setAttribute("type", "text");
    author.setAttribute("name", "author");
    author.setAttribute("placeholder", "Rosa Madrid");

    // Create an input element for typeOfCuisine
    const typeOfCuisine = document.createElement("input");
    typeOfCuisine.setAttribute("type", "text");
    typeOfCuisine.setAttribute("name", "typeOfCuisine");
    typeOfCuisine.setAttribute("placeholder", "Spanish");

    // Create an input element for favRecipe
    const favRecipe = document.createElement("input");
    favRecipe.setAttribute("type", "text");
    favRecipe.setAttribute("name", "favRecipe");
    favRecipe.setAttribute("placeholder", "Paella");

    // Create an input element for recommendedYN
    const recommendedYN = document.createElement("input");
    recommendedYN.setAttribute("type", "checkbox");
    recommendedYN.setAttribute("name", "recommendedYN");
    recommendedYN.setAttribute("placeholder", "yes");

    //create a submit button
    const s = document.createElement("button");
    s.innerText = "Submit";
    form.onsubmit = (e) => e.preventDefault();

    s.addEventListener("click", function (event) {
      //create a new array called library with the latest book
      library = addBookToLibrary(addNewCookBook(form), library);

      //add a new DOM element newShelf to replace the old shelf
      const newShelf = buildLibrary(library, buildShelf());
      document.body.lastChild.replaceWith(newShelf);

      //prevent from refreshing unnecessarily
      event.stopImmediatePropagation;
      event.preventDefault;
    });

    //s.setAttribute("type", "button");
    //s.setAttribute("value", "Submit");
    //s.addEventListener("submit", addNewCookBook(form));

    //append title input to form
    const strongTitle = strong.cloneNode();
    strongTitle.innerText = "Cookbook Title";
    form.appendChild(strongTitle);

    //add line break
    form.appendChild(br.cloneNode());

    //append title input to form
    form.appendChild(recipeTitle);

    //add line break
    form.appendChild(br.cloneNode());

    //append author input title to form
    const authorTitle = strong.cloneNode();
    authorTitle.innerText = "Author";
    form.appendChild(authorTitle);

    //add line break
    form.appendChild(br.cloneNode());

    //add author input
    form.appendChild(author);

    //add line break
    form.appendChild(br.cloneNode());

    //append typeOfCuisine input title to form
    const typeOfCuisineTitle = strong.cloneNode();
    typeOfCuisineTitle.innerText = "Type Of Cuisine";
    form.appendChild(typeOfCuisineTitle);

    //add line break
    form.appendChild(br.cloneNode());

    //add typeOfCuisine input
    form.appendChild(typeOfCuisine);

    //add line break
    form.appendChild(br.cloneNode());

    //append favRecipe input title to form
    const favRecipeTitle = strong.cloneNode();
    favRecipeTitle.innerText = "Favorite Recipe?";
    form.appendChild(favRecipeTitle);

    //add line break
    form.appendChild(br.cloneNode());

    //add favRecipe input
    form.appendChild(favRecipe);

    //add line break
    form.appendChild(br.cloneNode());

    //append recommendedYN input title to form
    const recommendedYNTitle = strong.cloneNode();
    recommendedYNTitle.innerText = "Recommended?";
    form.appendChild(recommendedYNTitle);

    //add line break
    form.appendChild(br.cloneNode());

    //add favRecipe input
    form.appendChild(recommendedYN);

    //add line break
    form.appendChild(br.cloneNode());

    //append submit button
    form.appendChild(s);

    return form;
  }

  //function to get data from form and return CookBook object
  function addNewCookBook(form) {
    let formData = new FormData(form);

    let title = formData.get("recipeTitle");
    let author = formData.get("author");
    let cuisine = formData.get("typeOfCuisine");
    let favrecipe = formData.get("favRecipe");
    let triedRecipe = false;

    console.log("I did a thing");
    console.log(formData);

    return new cookBook(title, author, triedRecipe, cuisine, favrecipe);
  }

  //function to add a button that opens the form
  function makeOpenFormBtn(formContainer) {
    const openFormBtn = document.createElement("button");
    openFormBtn.addEventListener("click", () => {
      openForm(formContainer);
    });
    openFormBtn.innerText = "Add A New Cookbook";
    return openFormBtn;
  }

  //function to add a button that closes the form
  function makeCloseFormBtn(formContainer) {
    const closeFormBtn = document.createElement("button");
    closeFormBtn.addEventListener("click", () => {
      closeForm(formContainer);
    });
    closeFormBtn.innerText = "Close";
    return closeFormBtn;
  }

  //function to Open Form
  function openForm(formContainer) {
    formContainer.style.display = "block";
  }

  //function to close form
  function closeForm(formContainer) {
    formContainer.style.display = "none";
  }

  /*let library = addBookToLibrary(spanishCuisine);
  library = addBookToLibrary(chineseCooking);
  library = addBookToLibrary(koreanFood);
  library = addBookToLibrary(italianClassics);
  library = addBookToLibrary(american);*/

  //get body tag to start adding dom elements
  const body = document.getElementsByTagName("body")[0];
  body.setAttribute("class", "bodyHTML");

  const html = document.getElementsByTagName("html")[0];
  html.setAttribute("class", "bodyHTML");

  //set attributes on body/html
  setBodyHTMLAttributes();

  //make the header container
  const headerContainer = createHeaders();
  document.body.appendChild(headerContainer);

  let library = createLibrary();

  //make form container and form
  const formContainer = makeFormContainer();
  const openFormBtn = makeOpenFormBtn(formContainer);
  document.body.appendChild(openFormBtn);

  const form = makeForm(formContainer);
  document.body.appendChild(formContainer);
  formContainer.appendChild(form);
  form.appendChild(makeCloseFormBtn(formContainer));
}

main();
