//  Defining a model.
function EmailModel(data){
  //  Store e-mail addresses inside an array.
  this._emailAddresses = data || [];
};

EmailModel.prototype = {
  add: function(email){
    //  Add a new e-mail to the front of the array.
    this._emailAddresses.unshift(email);
    //  Broadcast to all clients.
    observer.publish('model.email-address.added', email);
  },
  remove: function(email){
    var index = 0,
        length = this._emailAddresses.length;

    for(; index < length; index++){
      if(this._emailAddresses[index] === email){
        //  Remove the e-mail.
        this._emailAddresses.splice(index, 1);
        //  Broadcast to all clients.
        observer.publish('model.email-address.removed', email);
        break;
      }
    }
  },
  getAll: function(){
    return this._emailAddresses;
  }
};