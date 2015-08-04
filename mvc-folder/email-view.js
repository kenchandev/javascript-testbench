/*

  E-mail Form

*/

function EmailFormView(){
  this._form = document.createElement('form');
  this._input = document.createElement('input');
  this._button = document.createElement('button');

  this._input.setAttribute('type', 'text');
  this._input.setAttribute('placeholder', 'New E-mail Address');

  this._button.setAttribute('type', 'submit');
  this._button.innerHTML = 'Add';
};

EmailFormView.prototype = {
  render: function(){
    //  Nest the <input> field and <button> tag within the <form> tag
    this._form.appendChild(this._input);
    this._form.appendChild(this._button);

    //  Add the <form> to the end of the current HTML page.
    document.body.appendChild(this._form);

    //  Connect the events to the DOM elements.
    this.bindEvents();
  },
  bindEvents: function(){
    var that = this;

    this._form.addEventListener('submit', function(event){
      event.preventDefault();
      observer.publish('view.email-view.add', that._input.value);
    }, false);

    observer.subscribe("model.email-address.added", function() {
      that.clearInputField();
    });
  },
  clearInputField: function(){
    this._input.value = "";
  }
};

/*

  E-mail List

*/

function EmailListView() {
  // Create DOM elements for <ul>, <li>, <span> and <button> tags
  this._list = document.createElement("ul");
  this._listItem = document.createElement("li");
  this._listItemText = document.createElement("span");
  this._listItemRemoveButton = document.createElement("button");
  // Give the <button> tag the display text "Remove"
  this._listItemRemoveButton.innerHTML = "Remove";
}

EmailListView.prototype = {
  render: function(modelData) {
    var index = 0,
    length = modelData.length,
    email;
    // Loop through the array of Model data containing the list of stored email addresses
    // and create a list item for each, appending it to the list
    for (; index < length; index++) {
      email = modelData[index];
      this._list.appendChild(this.createListItem(email));
    }
    // Append the list to the end of the current HTML page
    document.body.appendChild(this._list);
    // Connect this View up to the system-wide events
    this.bindEvents();
  },
  // Define a method which, given an email address, creates and returns a populated list
  // item <li> tag representing that email
  createListItem: function(email) {
    // Cloning the existing, configured DOM elements is more efficient than creating new
    // ones from scratch each time
    var listItem = this._listItem.cloneNode(false),
    listItemText = this._listItemText.cloneNode(false),
    listItemRemoveButton = this._listItemRemoveButton.cloneNode(true);
    // Assign a "data-email" attribute to the <li> element, populated with the email
    // address it represents - this simplifies the attempt to locate the list item
    // associated with a particular email address in the removeEmail() method later
    listItem.setAttribute("data-email", email);
    listItemRemoveButton.setAttribute("data-email", email);
    // Display the email address within the <span> element, and append this, together with
    // the "Remove" button, to the list item element
    listItemText.innerHTML = email;
    listItem.appendChild(listItemText).appendChild(listItemRemoveButton);
    // Return the new list item to the calling function
    return listItem;
  },
  // Define a method for connecting this View to system-wide events
  bindEvents: function() {
    var that = this;
    // Create an event delegate on the list itself to handle clicks of the <button> within
    this._list.addEventListener("click", function(evt) {
      if (evt.target && evt.target.tagName === "BUTTON") {
        // When the <button> is clicked, broadcast a system-wide event which will be
        // picked up by the Controller. Pass the email address associated with the
        // <button> to the event
        observer.publish("view.email-view.remove", evt.target.getAttribute("data-email"));
      }
    }, false);

    // Listen for the event fired by the Model indicating that a new email address has
    // been added, and execute the addEmail() method
    observer.subscribe("model.email-address.added", function(email) {
      that.addEmail(email);
    });
    // Listen for the event fired by the Model indicating that an email address has been
    // removed, and execute the removeEmail() method
    observer.subscribe("model.email-address.removed", function(email) {
      that.removeEmail(email);
    });
  },
  // Define a method, called when an email address is added to the Model, which inserts a
  // new list item to the top of the list represented by this View
  addEmail: function(email) {
    this._list.insertBefore(this.createListItem(email), this._list.firstChild);
  },
  removeEmail: function(email) {
    var listItems = this._list.getElementsByTagName("li"),
    index = 0,
    length = listItems.length;
    // Loop through all the list items, locating the one representing the provided email
    // address, and removing it once found
    for (; index < length; index++) {
      if (listItems[index].getAttribute("data-email") === email) {
        this._list.removeChild(listItems[index]);
        // Once we've removed the email address, stop the for loop from executing
        break;
      }
    }
  }
};

// Define a generic View which can contain child Views. When its render() method is called, it
// calls the render() methods of its child Views in turn, passing along any Model data
// provided upon instantiation
function EmailView(views) {
  this._views = views || [];
}

EmailView.prototype = {
  // All Views need to have a render() method - in the case of this generic View, it simply
  // executes the render() method of each of its child Views
  render: function(modelData) {
    var index = 0,
    length = this._views.length;
    // Loop through the child views, executing their render() methods, passing along any
    // Model data provided upon instantiation
    for (; index < length; index++) {
      this._views[index].render(modelData);
    }
  }
};







