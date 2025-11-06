'use client'

import Link from 'next/link'
import CodeBlock from '@/components/CodeBlock'
import InteractiveDemo from '@/components/InteractiveDemo'
import Quiz from '@/components/Quiz'

export default function JSBasicsPage() {
  const quizQuestions = [
    {
      question: 'What is the correct way to declare a variable in JavaScript?',
      options: ['variable x = 5', 'let x = 5', 'var x := 5', 'x = 5 (only)'],
      correct: 1,
      explanation: 'Use "let" or "const" for modern JavaScript. "let" allows reassignment while "const" creates a constant.'
    },
    {
      question: 'What will console.log(typeof null) output?',
      options: ['null', 'undefined', 'object', 'error'],
      correct: 2,
      explanation: 'This is a famous JavaScript quirk! typeof null returns "object" due to a legacy bug that can\'t be fixed without breaking existing code.'
    },
    {
      question: 'Which is the correct way to write a function?',
      options: ['function myFunc() {}', 'function:myFunc() {}', 'func myFunc() {}', 'def myFunc() {}'],
      correct: 0,
      explanation: 'Functions in JavaScript are declared with the "function" keyword followed by the name and parentheses.'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">🚀 JavaScript Basics</h1>
          <p className="text-xl text-gray-600">Master the fundamentals of JavaScript programming!</p>
        </div>

        {/* Variables Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">📦 Variables & Data Types</h2>
          <p className="text-gray-700 mb-4">
            Variables are containers for storing data. JavaScript has three ways to declare variables:
          </p>

          <CodeBlock
            title="Variable Declarations"
            code={`// Modern way (recommended)
let age = 25;           // Can be reassigned
const name = "Alice";   // Cannot be reassigned

// Old way (avoid)
var count = 10;         // Function-scoped

// JavaScript has dynamic types
let value = 42;         // Number
value = "Hello";        // Now it's a String
value = true;           // Now it's a Boolean
value = null;           // Now it's null
value = undefined;      // Now it's undefined`}
          />

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
            <p className="font-semibold text-blue-800">💡 Pro Tip:</p>
            <p className="text-gray-700">Use <code className="bg-blue-100 px-2 py-1 rounded">const</code> by default, only use <code className="bg-blue-100 px-2 py-1 rounded">let</code> when you need to reassign the variable.</p>
          </div>

          <InteractiveDemo
            title="Try it yourself!"
            description="Experiment with different variable types"
            initialCode={`let greeting = "Hello, World!";
let number = 42;
let isAwesome = true;

console.log(greeting);
console.log("Type:", typeof greeting);
console.log(number * 2);
console.log("Is JS awesome?", isAwesome);`}
            runCode={(code) => {
              const logs: string[] = []
              const console = {
                log: (...args: any[]) => logs.push(args.join(' '))
              }
              eval(code)
              return logs.join('\n')
            }}
          />
        </section>

        {/* Functions Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">⚙️ Functions</h2>
          <p className="text-gray-700 mb-4">
            Functions are reusable blocks of code that perform specific tasks.
          </p>

          <CodeBlock
            title="Function Syntax"
            code={`// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function Expression
const add = function(a, b) {
  return a + b;
};

// Call the functions
console.log(greet("Alice"));  // "Hello, Alice!"
console.log(add(5, 3));        // 8

// Functions with default parameters
function welcome(name = "Guest") {
  return "Welcome, " + name;
}

console.log(welcome());        // "Welcome, Guest"
console.log(welcome("Bob"));   // "Welcome, Bob"`}
          />

          <InteractiveDemo
            title="Create your own function!"
            description="Write a function that calculates the area of a circle"
            initialCode={`function circleArea(radius) {
  return Math.PI * radius * radius;
}

console.log("Area of circle (r=5):", circleArea(5));
console.log("Area of circle (r=10):", circleArea(10));`}
            runCode={(code) => {
              const logs: string[] = []
              const console = {
                log: (...args: any[]) => logs.push(args.join(' '))
              }
              eval(code)
              return logs.join('\n')
            }}
          />
        </section>

        {/* Control Flow Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">🔀 Control Flow</h2>
          <p className="text-gray-700 mb-4">
            Control the flow of your program with conditions and loops.
          </p>

          <CodeBlock
            title="If/Else Statements"
            code={`let temperature = 25;

if (temperature > 30) {
  console.log("It's hot! 🔥");
} else if (temperature > 20) {
  console.log("Nice weather! ☀️");
} else {
  console.log("It's cold! ❄️");
}

// Ternary operator (shorthand)
let message = temperature > 25 ? "Warm" : "Cool";
console.log(message);`}
          />

          <CodeBlock
            title="Loops"
            code={`// For loop
for (let i = 0; i < 5; i++) {
  console.log("Count:", i);
}

// While loop
let count = 0;
while (count < 3) {
  console.log("While count:", count);
  count++;
}

// For...of loop (arrays)
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}`}
          />

          <InteractiveDemo
            title="FizzBuzz Challenge!"
            description="Classic programming problem: Print numbers 1-15, but for multiples of 3 print 'Fizz', for multiples of 5 print 'Buzz', and for multiples of both print 'FizzBuzz'"
            initialCode={`for (let i = 1; i <= 15; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}`}
            runCode={(code) => {
              const logs: string[] = []
              const console = {
                log: (...args: any[]) => logs.push(args.join(' '))
              }
              eval(code)
              return logs.join('\n')
            }}
          />
        </section>

        {/* Arrays Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">📚 Arrays</h2>
          <p className="text-gray-700 mb-4">
            Arrays are ordered collections of values.
          </p>

          <CodeBlock
            title="Array Operations"
            code={`// Creating arrays
const numbers = [1, 2, 3, 4, 5];
const mixed = [42, "hello", true, null];

// Accessing elements (zero-indexed)
console.log(numbers[0]);  // 1
console.log(numbers[2]);  // 3

// Array methods
numbers.push(6);          // Add to end
numbers.pop();            // Remove from end
numbers.unshift(0);       // Add to beginning
numbers.shift();          // Remove from beginning

// Useful array methods
console.log(numbers.length);           // 5
console.log(numbers.includes(3));      // true
console.log(numbers.indexOf(3));       // 2
console.log(numbers.slice(1, 3));      // [2, 3]`}
          />

          <InteractiveDemo
            title="Array Fun!"
            description="Manipulate arrays with different methods"
            initialCode={`const superheroes = ["Iron Man", "Spider-Man", "Thor"];

console.log("Heroes:", superheroes);
superheroes.push("Black Widow");
console.log("After push:", superheroes);

const lastHero = superheroes.pop();
console.log("Removed:", lastHero);
console.log("Final list:", superheroes);`}
            runCode={(code) => {
              const logs: string[] = []
              const console = {
                log: (...args: any[]) => logs.push(args.map((a: any) =>
                  typeof a === 'object' ? JSON.stringify(a) : String(a)
                ).join(' '))
              }
              eval(code)
              return logs.join('\n')
            }}
          />
        </section>

        {/* Objects Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">🎁 Objects</h2>
          <p className="text-gray-700 mb-4">
            Objects store collections of key-value pairs.
          </p>

          <CodeBlock
            title="Working with Objects"
            code={`// Creating an object
const person = {
  name: "Alice",
  age: 25,
  city: "New York",
  isStudent: false,
  greet: function() {
    return "Hi, I'm " + this.name;
  }
};

// Accessing properties
console.log(person.name);        // "Alice"
console.log(person["age"]);      // 25

// Calling methods
console.log(person.greet());     // "Hi, I'm Alice"

// Adding/modifying properties
person.email = "alice@example.com";
person.age = 26;

// Checking if property exists
console.log("name" in person);   // true
console.log("phone" in person);  // false`}
          />

          <InteractiveDemo
            title="Build a Car Object!"
            description="Create an object representing a car"
            initialCode={`const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2024,
  isElectric: true,
  start: function() {
    return this.brand + " " + this.model + " is starting!";
  }
};

console.log("Car:", car.brand, car.model);
console.log(car.start());
console.log("Electric?", car.isElectric);`}
            runCode={(code) => {
              const logs: string[] = []
              const console = {
                log: (...args: any[]) => logs.push(args.join(' '))
              }
              eval(code)
              return logs.join('\n')
            }}
          />
        </section>

        {/* Quiz */}
        <Quiz questions={quizQuestions} title="JavaScript Basics Quiz" />

        {/* Navigation */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready for the next level? 🚀</h3>
          <Link href="/es6" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all">
            Learn ES6 Features →
          </Link>
        </div>
      </div>
    </main>
  )
}
