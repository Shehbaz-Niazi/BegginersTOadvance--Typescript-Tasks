//_______________________________________________________Question No 2________________________________________________________
/* Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
would you like to learn some Python today?”*/

let yourName: string = "Hello Eric";
console.log(`${yourName}, would you like to learn some python today?`);

//______________________________________________________Question No 3_______________________________________

/*. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/

let personName: string = "Dawid Warner";
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());

let sentence: string = "twinkle twinkle little stars"
let convertArray: string[] = sentence.split(" ")
let titlecase: string = ""

for(let i=0; i < convertArray.length; i++){
    titlecase += convertArray[i].charAt(0).toUpperCase() +  convertArray[i].slice(1).toLowerCase() + " "
}
console.log(titlecase);

//___________________________________________________Question No 4______________________________________________________________
/*4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
following, including the quotation marks: 
Albert Einstein once said, “A person who never made a mistake never tried anything new.” */

let author_Name: string = "Julia Carney";
console.log(`${author_Name} once said, "Be Patience Rides The Waves."`);

//____________________________________________________Question No 5__________________________________________________________
/* Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
Then compose your message and store it in a new variable called message. Print your message. */

let famous_person: string = "Shehbaz Niazi"
let message: string = "Two And Two Makes Four"
console.log(`${famous_person} once said, "${message}."`);

//____________________________________________________Question No 6_______________________________________________________
/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. 
Then print the name after striping the white spaces.*/

let name: string = "\t \n  Shehbaz Niazi"
console.log("Nmae With White Spaces:", name);

let withOutSpaces: string = name.trim()
console.log("Name Without White Spaces:" ,withOutSpaces);

//_____________________________________________________Question No7________________________________________________________________

/*. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. */

console.log("Opration Addition :", 5 + 3);
console.log("Opration Subtraction :", 10-2);
console.log("Opration Division :", 64 / 8);
console.log("Opration Multiplication :", 4* 2);

//_____________________________________________________Question NO 8_____________________________________________--
/* You should create four lines that look like this:
_____________________________________________

console.log(5 + 3)
_____________________________________________
Your output should simply be four lines with the number 8 appearing once on each line.*/

console.log("-".repeat(20));
console.log(5+3);
console.log("-".repeat(20));
console.log(5+3);
console.log("-".repeat(20));
console.log(5+3);
console.log("-".repeat(20));
console.log(5+3);
console.log("-".repeat(20));

//_____________________________________________________Question No 9_______________________________________
/*  Favorite Number: Store your favorite number in a variable. Then, using that variable, 
create a message that reveals your favorite number. Print thatmessage.*/

const favoriteNumber: number = 9;
console.log("My Favourite Number Is:", favoriteNumber);

//______________________________________________________Question No 10___________________________________
/* Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
describing what the program does. */

let number1: number = 19
let number2: number = 97

console.log(number1 + number2);

//________________________________________________________Question No 11______________________________________________
/* Names: Store the names of a few of your friends in a array called names. 
Print each person’s name by accessing each element in the list, one at a time.*/

let myFriend: string[] = ["John William", "Julia Carney", "Tabraish Shamsi", "Joes Buttler"];
for(let name of myFriend){
    console.log(name);
}

//__________________________________________________________Question No 12__________________________________________
/*. Greetings: Start with the array you used in Exercise 11,
 but instead of just printing each person’s name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name. */

myFriend.forEach(name => {
    console.log(`Hello ${name} How Are You ?`);
});

//_________________________________________________________Question No 13_______________________________________
/* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
to print a series of statements about these items, such as “I would like to own a Honda motorcycle." */

let vechicles: string[] = ["Tesla Model S Plaid", "Ford Mustang Mach-E", "Toyota GR Supra", "Chevrolet Corvette Stingray"]
vechicles.forEach(vehicle => {
    console.log(`Riding into the future, I dream of owning a sleek ${vehicle}`);
});

//___________________________________________________________Question No 14_______________________________
/*14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner. */

let guestList: string[] = ["Emma Watson", "Chris Hemsworth", "Jennifer Lawrence", "Dwayne Johnson"];
guestList.forEach(guest => {
    console.log(`Join us for dinner, ${guest}! Laughter and good company await`);
});

//_____________________________________________________________Question No 15___________________________
/* Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite. 

• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still */

let removeGuest: string = guestList.splice(2,1)[0];
console.log(`\t \n ${removeGuest} can't make the Dinner \n`);

guestList.push("Stefin Robbort");

guestList.forEach(lists => {
    console.log(`Hello ${lists} You Are Inviting To Dinner`);
})

//_______________________________________________________________Question No 16____________________________
/*More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */

console.log("\t  \n  Good News... We Found A Bigger Dinner Table. \n");
guestList.unshift("William Shakespeare");
guestList.splice(2,0, "Nelson Mandela")
guestList.push("Martin")

guestList.forEach(lists => {
    console.log(`${lists} Come join us for an evening filled with joy, warmth, and delicious food.`);
});

//_________________________________________Question No 17_________________________________________
/*. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program. */

console.log("\t  \n  I can only host two guests, sorry. \n ");
while(guestList.length > 2){
    let popped = guestList.pop()
    console.log(`Sorry ${popped}, only two can come`);
}

console.log("\t  \n  Updated Guest Lists \n");
guestList.pop()
guestList.pop()
console.log(guestList);

// __________________________________________Question No 18_____________________________
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its
order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

let places: string[] =  ["Hunza Valley","Amalfi Coast","Banff National Park"];
console.log("\t  \n Orignal Order  \n");
console.log(places);
console.log("\t  \n Alphbetical Order \n");
console.log([...places].sort());
console.log("\t\n Orignal Order \n ");
console.log(places);
console.log("\t\n Reverse Order \n ");
console.log([...places].reverse());
console.log("\t\n Orignal Order \n ");
console.log(places);
console.log("\t\n Reverse Order \n ");
console.log(places.reverse());
console.log("\t \n Orignal Order \n");
console.log(places.reverse());
console.log("\t \n Alphabetical Order  \n");
console.log(places.sort());
console.log("\t \n Revesre Alphabetical Order \n");
console.log(places.reverse().sort());

// ___________________________________________________Question No19_______________________________-
/*. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
of people you are inviting to dinner. */

console.log(`print a message indicating the number of people you are inviting to dinner.`);
console.log(
    `We Have Finally Invited ${guestList.length} Guest In Dinner Party`
  );

//____________________________________________________Question No 20___________________________________
/* Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
else you’d like. Write a program that creates a list containing these items. */

let cities: string[] = ["Karachi", "Abbotobad", "Hazara", "Peshawar"];
console.log("\t \n List Of Cities In Pakistan \n");
for(let city of cities){
    console.log(city);
};

//____________________________________________________Question No 21_______________________________________
/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/

let object : {
    name: string;
    age: number;
} = {

    name: "Shehbaz",
    age: 18
};
console.log(object.name);
console.log(object["age"]);

type Name = {
    full_Name: string;
    last_Name : string;
    age: number
};

type Hobbies = {
    hobbies : string;
    favourite_Player: Name
    favourite_Number : number
};

const detail: Hobbies = {
    hobbies: "Cricket",
    favourite_Player: {
        full_Name: "Shehbaz",
        last_Name: "Niazi",
        age: 18
    },
    favourite_Number: 1997
};
console.log(detail.favourite_Player.full_Name);
console.log(detail.favourite_Number);

// _________________________________________Question No 22__________________________________________
/* Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
to produce an index error. Make sure you correct the error before closing the program. */

let fruits: Array<string> = ["Sir zia", "Osama", "Abdullah", "Israr Khan"]
let no: Array<number> = [1,2,3,4,5,6,7];
let error = fruits[6];

if(error !== undefined){
    console.log(`Index Error ${error}`);
}else{
    console.log("Index 5 is out of bounds");
}

//_________________________________________Question No 23________________________________________
/*
23. Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False */

let car: string = "Honda Civic";

console.log("is car ===  'Honda Civic'? I Predicate True");
console.log(car === "Honda Civic");

console.log("is car ===  'Honda Civic'? I Predicate False");
console.log(car === "Honda Civc");

console.log("is car ===  'Honda Civic'? I Predicate True");
console.log(car === "Honda Civic");

console.log("is car ===  'Honda Civic'? I Predicate False");
console.log(car === "honda Civic");

console.log("is car ===  'Honda Civic'? I Predicate True");
console.log(car === "Honda Civic");

console.log("is car ===  'Honda Civic'? I Predicate False");
console.log(car === "Honda civic");

console.log("is car ===  'Honda Civic'? I Predicate True");
console.log(car === "Honda Civic");

console.log("is car ===  'Honda Civic'? I Predicate False");
console.log(car === "Honda Cvic");

console.log("is car ===  'Honda Civic'? I Predicate True");
console.log(car === "Honda Civic");

let Predicate: boolean = false;
if(car === "Honda Civic"){
   Predicate = true
   console.log(`Is Car === 'Honda Civic'? I Predicate\n${Predicate}\n`);

}else {
    Predicate = false
    console.log(`Is Car === 'Honda Civic'? I Predicate ${Predicate}`);
};
// 2nd Methode For Loop;

let customArray: Array<string> = ["Honda Civic", "honda Civic", "Honda Civic", "Honda civic", "Honda Civic", "Honda Civc"];
let result = customArray.forEach((list) => {
    // console.log(list);
    if(list === "Honda Civic"){
        console.log(`car === 'Honda Civic'? I Predicate True`);
    }else{
        console.log("Is car === 'Honda Civic' I Predicate False");
    }
});

//_______________________________________Question No 24__________________________--
/*. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */

let myStrings: string = "Pakistan";
console.log("\nTest Of Equality And Inequality");
console.log(myStrings == "Pakistan");
console.log(myStrings != "Pakistan");

console.log("\nTests using the lower case function");
console.log(myStrings.toLowerCase() == "pakistan");
console.log(myStrings.toLowerCase() != "pakistan ");

let num: number = 19
console.log('\nNumerical tests involving Equality And Inequality');
console.log(num == 19);
console.log(num != 19);
console.log(num >= 19);
console.log(num < 19);
console.log(num >= 19);
console.log(num !> 20);

console.log('\nTests using "and" and "or" operators');
console.log(myStrings === "Pakistan" && num == 19);
console.log(myStrings === "pakistan" && num == 19);
console.log(num <= 19 || num > 19);
console.log(num < 19 || num > 19);

console.log("\nTest whether an item is in a array");
let array = ["\n\tShehbaz", "Osama", "Umer Aftab"]
console.log(array.includes("Osama"));

console.log("\n Test whether an item is not in a array");
console.log(array.includes("Khan"));

//__________________________Question No 25___________________________
/*
25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

• Write an if statement to test whether the alien’s color is green. If it is, print
a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that
fails. (The version that fails will have no output.) */

let alian_Color = "Green";
if (alian_Color === "Green") {
  console.log("Player Earned 5 Pionts..");
} else if (alian_Color === "Yellow") {
  console.log("Player Earned 3 Points");
} else if (alian_Color === "Red") {
  console.log("Player Earned 0 Points");
};


///________________________Question No 26___________________________
/* Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block. */

let alian_Color1: string = "Green";
if(alian_Color1 === "Green"){
    console.log("player just earned 10 points.");
}else{
    console.log("This Player Earn 20 points");   
}

// version 2

let alian_Color2: string = "Yellows";
if(alian_Color2 === "Yellow"){
    console.log("Player Earnerd  50 Points");
}else{
    console.log("Player Earn No Points");
    
}

//_________________________________Question No 27____________________________
/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien. */

let alien_colour = "green";
if (alien_colour === "green") console.log("player earned 5 points.");
else if (alien_colour === "red") console.log("player earned 10 points.");
else if (alien_colour === "yellow") console.log("player earned 15 points.");

//                         VERSION 2

let alien_Colour = "red";
if (alien_Colour === "green") console.log("player earned 5 points.");
else if (alien_Colour === "red") console.log("player earned 10 points.");
else if (alien_Colour === "yellow") console.log("player earned 15 points.");

//                         VRESION 3

let Alien_colour = "yellow";
if (Alien_colour === "green") console.log("player earned 5 points.");
else if (Alien_colour === "red") console.log("player earned 10 points.");
else if (Alien_colour === "yellow") console.log("player earned 15 points.");

//_____________________________Question No 28______________________________
/* Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder. */

let person: number = 5;

if(person < 2)console.log("Person Is Baby");
else if (person >= 2 && person < 4){console.log("person is a toddler");}
else if (person >= 4 && person < 13){console.log("person is a kid.");}
else if (person >= 13 && person < 20){console.log("person is a teenager.");}
else if (person >= 20 && person < 65){console.log("pperson is an adult.");}
else if (person > 65){console.log(" person is an elder.");}

//_______________________________Question No 29________________________
/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
such as You really like bananas! */

let favotite_fruite: string[] = ["Apple", "Banana", "Cheery", "Grapes"];
console.log(favotite_fruite);

if (favotite_fruite.includes("Banana")) console.log("You really like bananas!");
if (favotite_fruite.includes("Apple")) console.log("You really like Apple!");
if (favotite_fruite.includes("Cheery")) console.log("You really like Cheery!");
if (favotite_fruite.includes("Grapes")) console.log("You really like Grapes!");

//___________________________________Question No 30___________________________
/*
30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. */

let names: Array<string> = ["Saad ali", "Ibarar Khan", "Shehbaz Niazi", "Admin"];
for(let list of names){
    if(list === "Admin"){
        console.log(`\n \t Hello ${list}, would you like to see a status report`);
    }else {
        console.log(`such as Hello ${list}, thank you for logging in again.`);
    };
};

//____________________________________Question no 31______________________________
/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */


let names1: Array<string> = ["Stephin", "Joseph", "Martin Madroso"];
if(names1.length > 0){
    console.log("List Of Users:");
    for(let name of names1){
        console.log(name);
    }
}
names = [];

if(names.length === 0){
    console.log("We need to find some users!");
}else{
    console.log("We need to find some users!");
    
}

// ___________________________________Question No 32______________________________
/* Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

function isUsernameTaken(username: string, existingUsernames: string[]): boolean {
    return existingUsernames.some(name => name.toLowerCase() === username.toLowerCase());
}

const current_users: string[] = ["iBRAHIM", "joe", "hales", "zia khan", "IBAD"];

const new_users: string[] = ["sarah", "ibad", "IBRAHIM", "henry", "mark"];

for (let new_username of new_users) {
    if (isUsernameTaken(new_username, current_users)) {
        console.log(`Sorry, the username '${new_username}' is already taken. Please choose a different one.`);
    } else {
        console.log(`Congratulations! The username '${new_username}' is available.`);
    }
}

//____________________________________________Question No 33__________________________________________
/*
33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
7th 8th 9th", and each result should be on a separate line. */

let numbers: number[] = [1,2,3,4,5,6,7,8,9,10]
for(let no of numbers) {
    if(no === 1) {
        console.log("1st");
    }else if(no === 2) {
        console.log("2nd");
    }else if(no === 3) {
        console.log("3rd");
    }else{
        console.log(no + "th");
    }
};

 //________________________________________Question No 34___________________________________________
 /*
34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
pizza names in a array, and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza
instead of printing just the name of the pizza. For each pizza you should
have one line of output containing a simple statement like I like pepperoni
pizza.

• Add a line at the end of your program, outside the for loop, that states
how much you like pizza. The output should consist of three or more lines
about the kinds of pizza you like and then an additional sentence, such as
I really love pizza! */

let favorite_Pizza: string[] = [" Hawaiian Pizza", " Meat Pizza", " Margherita Pizza"]
for(let loop of favorite_Pizza){
    console.log(loop);    
};
for(let loop of favorite_Pizza){
    console.log("I Really like" + loop);
};
console.log(`I eat Hawaiian boti pizza every day i also like Meat flavor of pizza as well.I really love pizza!`);


//_________________________________________Question no 35____________________________________________
/*
35. Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.
• Modify your program to print a statement about each animal, such as
A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in
common. You could print a sentence such as Any of these animals would
make a great pet! */

let animals: string[] = ["Hippopotamus", "Giraffe", "Wild Boar"]
for(let loops of animals) {
    console.log(loops);   
}
for(let loops of animals) {
    console.log(`${loops} is Wild Animal`);
}
console.log("All of Them Are Wild Animals");

//________________________________________Question No 36__________________________________________
/* T-Shirt: Write a function called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt. The function should print
a sentence summarizing the size of the shirt and the message printed on it.
Call the function. */

let make_shirt = (size: number, text: string) => {
    console.log(`This is a kids shirt and the shirt size is ${size}m And ${text} printed on his shirt`);
}
make_shirt(10, "Pakistan Zindabad")

//_______________________________________Question No 37_________________________________________
/* Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message. */


function make_shirt1 (size: string = "Large",text: string = "I Love Typescript",  ){
    console.log(`Size of the shirt is ${size} and the message printed on the shirt is ${text}.`);   
};

make_shirt1()
make_shirt1("Small", "I love Pakistan")
make_shirt1("Medium")



//________________________________________Question No 38_________________________________
/* Cities: Write a function called describe_city() that accepts the name of
a city and its country. The function should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the
default country. */

function describe_city (name: string, text: string = "Pakistan"){
    console.log(`${name} is in ${text}`);
}
describe_city("Lahore")
describe_city("Islamabad")
describe_city("Washington", "USA");


//___________________________________________Question No 39_________________________________
/* City Names: Write a function called city_country() that takes in the name
 of a city and its country. The function should return a string formatted like this:
 "Lahore, Pakistan"
 Call your function with at least three city-country pairs, and print the value
 that’s returned. */ 


let city_country = (name: string, country: string) => {
    console.log(`${name}, ${country}`);
}
city_country("karachi", "Pakistan")
city_country("Lahore", "Pakistan")
city_country("Kolkata", "India")

//__________________________________Question No 40_______________________________________
/*
40. Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and an
album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the
album information correctly.
Add an optional parameter to make_album() that allows you to store the
number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new
function call that includes the number of tracks on an album.*/
  

let  make_album = (name: string, title: string, track?: number ) => {
    return{
        name: name,
        title : title,
        track : track ?? 0
    }
}
console.log(make_album("Atif Aslam", "Tajdare Haram"));
console.log(make_album("Sahir Ali Baggah", "Pakistan Zindabad"));
console.log(make_album("Amina Baig", "Pyar Hua tha", 8));



//___________________________________Question No 41__________________________________
/* Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array. */


let show_magicians0 = (magician: string[]): void => {
    magician_names.forEach((value) => {
      console.log(value);
    });
  };
  
  let magician_names: string[] = [
    "Osama",
    "Warrm Mini Magician",
    "joes bachlor",
    "joe david",
  ];
  show_magicians0(magician_names);

/*
-------------------------------QUESTION NO 42 ---------------------------
 Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.
*/
function make_great1(magicians: string[]): string[] {
    const greatMagicians = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}

function show_magicians1(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magicians: string[] = ["David Copperfield", "Houdini", "Dynamo"];
const greatMagicians1 = make_great1(magicians);
show_magicians1(greatMagicians1);


//___________________________________Question No 43_____________________________
/* Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name. */

function make_great(magicians: string[]): string[] {
    const greatMagicians = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const originalMagicians: string[] = ["David Copperfield", "Houdini", "Dynamo"];

const copyOfOriginalMagicians: string[] = originalMagicians.slice();

const greatMagicians = make_great(copyOfOriginalMagicians);

console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);

//____________________________________________Question No 44______________________________
/* Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time. */

let sandwich = (...items: string[]): void => {
    if (items.length === 0) {
      console.log("\nYou ordered an empty sandwich. Please specify some items.");
    } else {
      console.log("\nYou ordered a sandwich with the following items:");
      for (let item of items) {
        console.log(`- ${item}`);
      }
    }
  };
  sandwich("Egg Sandwich", "Grilled Chicken ", "Seafood Sandwich")
  sandwich("Grilled Cheese", "Nutella Sandwich")
  sandwich()

//_______________________________________Question No 45___________________________
/*Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature. 
Print the Object that’s returned to make sure all the information was
stored correctly. */


let about_car = (
    manufactured: string,
    model: string,
    ...extra_qualities: string[]
  ) => {
    return {
      manufactured,
      model,
      extra_qualities,
    };
  };
  console.log(about_car("Honda", "Civic 2012", "Red Color", "Auto Driving Mod"));
  console.log(
    about_car("Harley Devidson", "Alpha 2018", "Multi-Colors", "120+ Speed..")
  );




