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
function Person(firstname,lname){
    this.firstname=firstname;
    this.lname=lname;

}

// greeting
Person.prototype.greeting=function(){
    return `Heloo ${this.firstname} ${this.lname}`
}

const person1=new Person('dee','aggrey');
console.log(person1)

function Customer(firstname,lname,phone,memebership){
    Person.call(this,firstname,lname);
    this.phone=phone;
    this.memebership=memebership

} 