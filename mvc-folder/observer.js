/*
  The observer pattern is used in larger code bases consisting of a number of individual code modules that depend on,
or must communicate between, each other. In such a code base, hardcoded references from one module to other
modules provides what is known as tight coupling, the need to know explicitly about every other module in the system
for the whole code to function correctly together. Ideally, however, modules in a large code base should be loosely
coupled. References aren’t made explicitly to other modules; rather, systemwide events are triggered and listened for
throughout the code base, like a custom version of the standard DOM event handling.
*/

/*
The system implementing the observer pattern must have three global methods avilable to the system code base:
publish(), which triggers an event by name, passing along any optional data; subscribe(), which allows a module
to assign a function to execute when a specific, named event is triggered; and unsubscribe(), which deassigns the
function so that it will no longer be executed when the named event is triggered. The code in Listing 7-6 demonstrates
a simple object that can be used globally in your applications to implement these methods in the observer pattern.
*/

var observer = (function() {

  var events = {};

  return {
    // Define the subscribe() method, which stores a function along with its associated
    // event name to be called at some later point when the specific event by that name
    // is triggered
    subscribe: function(eventName, callback) {
      // If an event by the supplied name has not already been subscribed to, create an
      // array property named after the event name within the events object to store
      // functions to be called at a later time when the event by that name is triggered
      if (!events.hasOwnProperty(eventName)) {
        events[eventName] = [];
      }
      // Add the supplied callback function to the list associated to the specific
      // event name
      events[eventName].push(callback);
    },
    // Define the unsubscribe() method, which removes a given function from the list of
    // functions to be executed when the event by the supplied name is triggered
    unsubscribe: function(eventName, callback) {
      var index = 0,
      length = 0;

      if (events.hasOwnProperty(eventName)) {
        length = events[eventName].length;
        // Cycle through the stored functions for the given event name and remove the
        // function matching that supplied from the list
        for (; index < length; index++) {
          if (events[eventName][index] === callback) {
            events[eventName].splice(index, 1);
            break;
          }
        }
      }
    },

    // Define the publish() method, which executes all functions associated with the given
    // event name in turn, passing to each the same optional data passed as arguments to
    // the method
    publish: function(eventName) {
      // Store all parameters but the first passed to this function as an array
      var data = Array.prototype.slice.call(arguments, 1),
      index = 0,
      length = 0;

      if (events.hasOwnProperty(eventName)) {
        length = events[eventName].length;
        // Cycle through all of the functions associated with the given event name and
        // execute them each in turn, passing along any supplied parameters
        for (; index < length; index++) {
          events[eventName][index].apply(this, data);
        }
      }
    }
  };
}());