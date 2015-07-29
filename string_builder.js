function StringBuilder(){
    this. _array = [];
    this._index = 0;
};

StringBuilder.prototype.append = function(str){
    this._array[this._index] = str;
    this._index++;
};

StringBuilder.prototype.toString = function(){
    return this._array.join('');
};
