// let countries = ['Moldova', 'Ukraine'];  
// let otherCountries = ['USA', 'Japan'];  
// countries.push.apply(countries, otherCountries);  
// console.log(countries); 

let countries = [ 'Moldova', 'Ukraine' ];  
let otherCountries = [ 'USA', 'Japan' ];
  
countries.push(...otherCountries);

console.log(countries);


class King {  
   constructor(name, country) {
     this.name = name;
     this.country = country;     
   }
   getDescription() {
     return `${this.name} leads ${this.country}`;
   }
}

var details = ['Alexander the Great', 'Greece'];  

// with spread operator
var Alexander = new King(...details);  
Alexander.getDescription();

//Alexander.getDescription.apply(Alexander, details)