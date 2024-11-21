//Q1.......
class Book{
    title;
    author;
    isbn;
    constructor(title, author, isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
    checkOut(){
        console.log(this.title ,"checked" );
    }
    returnBook(){
        console.log("the retired book author is" , this .author);
    }
    updateTitle(newTitle){
      console.log("title is upadated as" ,newTitle);
}
}
var book1 =new Book('harry potter','j.k.rowling', '200');
book1.checkOut();
book1.returnBook();
book1.updateTitle('harry potter');
console.log(book1);

//Q2........
class Product{
    name;
    price;
    category;
    constructor(name, price, category){
        this.name=name;
        this.price=price;
        this.category=category;
    }
applyDiscount(){
  console.log("applied 10% of discount");
}
getPriceAfterDiscount(){
    console.log("The price of the smartphone after discount ", this.price);
}
}
var p1 = new Product('vivo',22000,'smartphone');
p1.applyDiscount(22000);
p1.getPriceAfterDiscount();
console.log(p1);

//Q3
class bank{
    accountHolderName;
    accountNumber;
    balance;
    constructor(accountHolderName, accountNumber, balance){
        this.accountHolderName=accountHolderName;
        this.accountNumber=accountNumber;
        this.balance=balance;
    }
    deposite(){
    console.log(this.accountHolderName,'deposited 10000 money');
    }
    withdraw(){
        console.log('withdraw the money is 5000');
    }
    getBalance(){
    console.log('available balance is',this.balance);
    }
}
var indiabank=new bank('geetha reddy','01233948758','5000');
indiabank.deposite();
indiabank.withdraw();
indiabank.getBalance();
console.log(indiabank);


//Q4

class vehicle {
    model;
    licenseplate;
    mileage;
    constructor(model,licenseplate,mileage){
        this.model=model;
        this.licenseplate=licenseplate;
        this.mileage=mileage;
    }
    drive(){
     console.log(this.model,"mileage is",this.mileage);
    }
    getmilage(){
    console.log("this is increasing of milage",this.mileage);
    }
}
var v1=new vehicle("royal enfiled", "TS2026","350");
v1.drive();
v1.getmilage();
console.log(v1);

//Q5
class student{
    name;
    grade;
    subject;
    constructor(name,grade,subject){
        this.name=name;
        this.grade=grade;
        this.subject=subject;
    }
    setGrade(newGrade){
       console.log(this.grade,"grades are updated");
    }
    getgrade(){
    console.log(this .grade,'is the current grade of the student');
    }
}
var student1=new student('Afreen','10','maths');
student1.setGrade();
student1.getgrade();
console.log(student1);




