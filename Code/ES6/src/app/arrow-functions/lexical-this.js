function User() { 
  _id = '123abc';

  const display = () => { 
    name = 'ashutosh';

    return () => { 
      return `Id: ${this._id}, Name: ${this.name}`;
    }
  }
}
var a = new User();
console.log(a.display())


function User() { 
  _id = '123abc';

  function display(){ 
    name = 'ashutosh';

    return () => { 
      return `Id: ${this._id}, Name: ${this.name}`;
    }
  }
}

var a = new User();
console.log(a.display())