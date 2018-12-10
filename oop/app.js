// function Person(name,age,sex,){
//     this.name=name;
//     this.sex=sex;
//     this.age=age
// };

// function Job(title,description,salary){
//     this.title=title;
//     this.description=description;

//     this.salary=function (){
//         console.log(`${title} and ${salary}`)
//     };

// };
// var deo=new Job('manager',"intelligent",5000)
// console.log(deo.salary())

// var dee=new Person('dee',14,'male');
// console.log(dee.name,dee.age)


// person constructor
// function Person(firstname,lname){
//     this.firstname=firstname;
//     this.lname=lname;

// }

// // greeting
// Person.prototype.greeting=function(){
//     return `Heloo ${this.firstname} ${this.lname}`
// }

// const person1=new Person('dee','aggrey');
// console.log(person1)
// // inherit person prototype methods
// Customer.prototype=Object.create(Person.prototype);
// // make customer prototype return customer
// Customer.prototype.constructor=Customer;
// function Customer(firstname,lname,phone,memebership){
//     Person.call(this,firstname,lname);
//     this.phone=phone;
//     this.memebership=memebership

// } 
// const customer1=new Customer('tom','smith','555','standard');
// // prototype is used to add new properties
// Customer.prototype.greeting=function(){
//     return `Hey new ${firstname}`
// }
// console.log(customer1.greeting);  

// classes
class Person{
constructor(fname,lname,dob){
    this.fname=fname;
    this.lname=lname;
    this.birthday=new Date(dob);
}
greeting(){
    return `Heloo there ${this.fname}`
};
calculateAge(){
    const diff=Date.now() - this.birthday.getTime();
    const ageDate=new Date(diff);
    return Math.abs(ageDate.getFullYear()-1970);
};
getsMarried(newName){
    this.lname=newName;
}

};

const mary=new Person('Mary','wiilla',11-13-1980);

mary.getsMarried('dee');
console.log(mary.lname); 