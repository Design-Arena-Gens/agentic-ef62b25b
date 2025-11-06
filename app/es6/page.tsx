'use client'

import Link from 'next/link'
import CodeBlock from '@/components/CodeBlock'
import InteractiveDemo from '@/components/InteractiveDemo'
import Quiz from '@/components/Quiz'

export default function ES6Page() {
  const quizQuestions = [
    {
      question: 'What does the arrow function (x) => x * 2 do?',
      options: ['Multiplies x by 2', 'Divides x by 2', 'Adds 2 to x', 'Subtracts 2 from x'],
      correct: 0,
      explanation: 'Arrow functions with a single expression automatically return that expression. (x) => x * 2 is equivalent to function(x) { return x * 2; }'
    },
    {
      question: 'What will [...[1, 2], 3, 4] produce?',
      options: ['[[1, 2], 3, 4]', '[1, 2, 3, 4]', 'Error', '[1, 2, [3, 4]]'],
      correct: 1,
      explanation: 'The spread operator (...) spreads array elements. It unpacks [1, 2] into individual elements, creating [1, 2, 3, 4].'
    },
    {
      question: 'What is destructuring used for?',
      options: ['Deleting objects', 'Breaking code', 'Extracting values from arrays/objects', 'Creating loops'],
      correct: 2,
      explanation: 'Destructuring allows you to extract values from arrays or properties from objects into distinct variables.'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">⚡ ES6 Features</h1>
          <p className="text-xl text-gray-600">Modern JavaScript that makes coding more elegant and powerful!</p>
        </div>

        {/* Arrow Functions */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">🏹 Arrow Functions</h2>
          <p className="text-gray-700 mb-4">
            Arrow functions provide a shorter syntax and lexical <code>this</code> binding.
          </p>

          <CodeBlock
            title="Arrow Function Syntax"
            code={`// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => {
  return a + b;
};

// Shorthand (implicit return)
const add = (a, b) => a + b;

// Single parameter (parentheses optional)
const square = x => x * x;

// No parameters
const greet = () => "Hello!";

// Multiple lines
const processData = (data) => {
  const cleaned = data.trim();
  const upper = cleaned.toUpperCase();
  return upper;
};

console.log(add(5, 3));        // 8
console.log(square(4));        // 16
console.log(greet());          // "Hello!"`}
          />

          <InteractiveDemo
            title="Arrow Functions in Action!"
            description="Transform traditional functions to arrow functions"
            initialCode={`// Array methods with arrow functions
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("Doubled:", doubled);
console.log("Evens:", evens);
console.log("Sum:", sum);`}
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

        {/* Template Literals */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">📝 Template Literals</h2>
          <p className="text-gray-700 mb-4">
            Template literals make string interpolation and multi-line strings easy!
          </p>

          <CodeBlock
            title="Template Literal Magic"
            code={`// Old way
const name = "Alice";
const age = 25;
const oldWay = "My name is " + name + " and I'm " + age + " years old.";

// New way with template literals (backticks)
const newWay = \`My name is \${name} and I'm \${age} years old.\`;

// Multi-line strings
const poem = \`
  Roses are red,
  Violets are blue,
  JavaScript is awesome,
  And so are you!
\`;

// Expressions in templates
const a = 10;
const b = 20;
console.log(\`The sum of \${a} and \${b} is \${a + b}\`);

// Tagged templates (advanced)
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? \`**\${values[i]}**\` : '');
  }, '');
}

const result = highlight\`Hello \${name}, you are \${age} years old!\`;`}
          />

          <InteractiveDemo
            title="Create Dynamic Messages!"
            description="Use template literals to build formatted strings"
            initialCode={`const product = "Laptop";
const price = 999;
const discount = 10;

const finalPrice = price - (price * discount / 100);

const message = \`
🛍️ Product: \${product}
💰 Original Price: $\${price}
🎉 Discount: \${discount}%
✨ Final Price: $\${finalPrice}
\`;

console.log(message);`}
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

        {/* Destructuring */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">📦 Destructuring</h2>
          <p className="text-gray-700 mb-4">
            Extract values from arrays and objects with elegant syntax!
          </p>

          <CodeBlock
            title="Destructuring Arrays & Objects"
            code={`// Array Destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first);   // "red"
console.log(second);  // "green"

// Skip elements
const [primary, , tertiary] = colors;
console.log(tertiary); // "blue"

// Rest operator
const numbers = [1, 2, 3, 4, 5];
const [one, two, ...rest] = numbers;
console.log(rest);    // [3, 4, 5]

// Object Destructuring
const person = {
  name: "Alice",
  age: 25,
  city: "NYC"
};

const { name, age } = person;
console.log(name);    // "Alice"
console.log(age);     // 25

// Rename variables
const { name: personName, age: personAge } = person;

// Default values
const { name, country = "USA" } = person;
console.log(country); // "USA"

// Nested destructuring
const user = {
  id: 1,
  profile: {
    username: "alice123",
    email: "alice@example.com"
  }
};

const { profile: { username, email } } = user;
console.log(username); // "alice123"`}
          />

          <InteractiveDemo
            title="Destructuring Challenge!"
            description="Extract data from nested structures"
            initialCode={`const movie = {
  title: "Inception",
  year: 2010,
  director: {
    name: "Christopher Nolan",
    nationality: "British"
  },
  cast: ["DiCaprio", "Hardy", "Cotillard"]
};

const {
  title,
  director: { name: directorName },
  cast: [lead, ...supporting]
} = movie;

console.log("Movie:", title);
console.log("Director:", directorName);
console.log("Lead actor:", lead);
console.log("Supporting:", supporting);`}
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

        {/* Spread & Rest */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">🌟 Spread & Rest Operators</h2>
          <p className="text-gray-700 mb-4">
            The three dots (...) that do amazing things!
          </p>

          <CodeBlock
            title="Spread Operator"
            code={`// Spread arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Copy arrays
const original = [1, 2, 3];
const copy = [...original];

// Spread in function calls
const numbers = [5, 10, 15];
console.log(Math.max(...numbers)); // 15

// Spread objects
const person = { name: "Alice", age: 25 };
const employee = { ...person, job: "Developer" };
console.log(employee);
// { name: "Alice", age: 25, job: "Developer" }

// Override properties
const updated = { ...person, age: 26 };
console.log(updated);
// { name: "Alice", age: 26 }`}
          />

          <CodeBlock
            title="Rest Operator"
            code={`// Rest in function parameters
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(1, 2, 3, 4, 5));  // 15

// Rest in destructuring
const [first, ...others] = [1, 2, 3, 4];
console.log(first);   // 1
console.log(others);  // [2, 3, 4]

const { name, ...rest } = {
  name: "Alice",
  age: 25,
  city: "NYC"
};
console.log(name);    // "Alice"
console.log(rest);    // { age: 25, city: "NYC" }`}
          />

          <InteractiveDemo
            title="Spread & Rest Practice!"
            description="Combine and manipulate data structures"
            initialCode={`// Merge user data
const baseUser = { id: 1, name: "Alice" };
const details = { age: 25, city: "NYC" };
const preferences = { theme: "dark", lang: "en" };

const fullUser = {
  ...baseUser,
  ...details,
  ...preferences
};

console.log("Full user:", JSON.stringify(fullUser));

// Flexible calculator
function calculate(operation, ...nums) {
  if (operation === "sum") {
    return nums.reduce((a, b) => a + b, 0);
  }
  if (operation === "multiply") {
    return nums.reduce((a, b) => a * b, 1);
  }
}

console.log("Sum:", calculate("sum", 1, 2, 3, 4));
console.log("Product:", calculate("multiply", 2, 3, 4));`}
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

        {/* Promises */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">🎯 Promises & Async/Await</h2>
          <p className="text-gray-700 mb-4">
            Handle asynchronous operations elegantly!
          </p>

          <CodeBlock
            title="Promises"
            code={`// Creating a Promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ data: "Here's your data!" });
      } else {
        reject("Error: Failed to fetch");
      }
    }, 1000);
  });
};

// Using Promises
fetchData()
  .then(result => {
    console.log(result.data);
    return "Next step";
  })
  .then(next => {
    console.log(next);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("Done!");
  });`}
          />

          <CodeBlock
            title="Async/Await (Modern Approach)"
            code={`// Async function
async function getData() {
  try {
    const response = await fetchData();
    console.log(response.data);

    const moreData = await fetchMoreData();
    console.log(moreData);

    return "All done!";
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Cleanup complete");
  }
}

// Call async function
getData().then(result => console.log(result));

// Parallel async operations
async function fetchMultiple() {
  const [data1, data2, data3] = await Promise.all([
    fetchData(),
    fetchData(),
    fetchData()
  ]);

  return [data1, data2, data3];
}`}
          />

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
            <p className="font-semibold text-yellow-800">⚡ Quick Tip:</p>
            <p className="text-gray-700">Async/await is just syntactic sugar over Promises. It makes asynchronous code look and behave like synchronous code!</p>
          </div>
        </section>

        {/* Classes */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">🏛️ Classes</h2>
          <p className="text-gray-700 mb-4">
            Object-oriented programming with clean syntax!
          </p>

          <CodeBlock
            title="ES6 Classes"
            code={`// Define a class
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  // Method
  speak() {
    return \`\${this.name} makes a sound.\`;
  }

  // Getter
  get info() {
    return \`\${this.name} is a \${this.species}\`;
  }

  // Static method
  static compare(animal1, animal2) {
    return animal1.species === animal2.species;
  }
}

// Inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog"); // Call parent constructor
    this.breed = breed;
  }

  // Override method
  speak() {
    return \`\${this.name} barks!\`;
  }

  // New method
  fetch() {
    return \`\${this.name} fetches the ball!\`;
  }
}

// Create instances
const buddy = new Dog("Buddy", "Golden Retriever");
console.log(buddy.speak());     // "Buddy barks!"
console.log(buddy.fetch());     // "Buddy fetches the ball!"
console.log(buddy.info);        // "Buddy is a Dog"`}
          />

          <InteractiveDemo
            title="Build a Class!"
            description="Create a simple video game character class"
            initialCode={`class Character {
  constructor(name, health, power) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  attack(target) {
    target.health -= this.power;
    return \`\${this.name} attacks \${target.name} for \${this.power} damage!\`;
  }

  get isAlive() {
    return this.health > 0;
  }
}

const hero = new Character("Hero", 100, 20);
const monster = new Character("Monster", 80, 15);

console.log(hero.attack(monster));
console.log("Monster health:", monster.health);
console.log("Monster alive?", monster.isAlive);`}
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
        <Quiz questions={quizQuestions} title="ES6 Features Quiz" />

        {/* Navigation */}
        <div className="flex gap-4">
          <Link href="/js-basics" className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-6 text-white text-center hover:shadow-lg transition-shadow">
            <div className="text-sm mb-2">← Previous</div>
            <div className="font-bold">JavaScript Basics</div>
          </Link>
          <Link href="/angularjs" className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-6 text-white text-center hover:shadow-lg transition-shadow">
            <div className="text-sm mb-2">Next →</div>
            <div className="font-bold">AngularJS Fundamentals</div>
          </Link>
        </div>
      </div>
    </main>
  )
}
