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
  }
};