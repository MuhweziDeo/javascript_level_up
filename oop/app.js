function Person(name,age,sex,){
    this.name=name;
    this.sex=sex;
    this.age=age
};

function Job(title,description,salary){
    this.title=title;
    this.description=description;

    this.salary=function (){
        console.log(`${title} and ${salary}`)
    };

};
var deo=new Job('manager',"intelligent",5000)
console.log(deo.salary())

var dee=new Person('dee',14,'male');
console.log(dee.name,dee.age)

