'use client'

import Link from 'next/link'
import CodeBlock from '@/components/CodeBlock'
import Quiz from '@/components/Quiz'

export default function AngularJSPage() {
  const quizQuestions = [
    {
      question: 'What is the purpose of ng-model directive?',
      options: [
        'To style elements',
        'To create two-way data binding',
        'To make HTTP requests',
        'To define routes'
      ],
      correct: 1,
      explanation: 'ng-model creates two-way data binding between the view and the model, automatically syncing data changes.'
    },
    {
      question: 'What does ng-repeat do?',
      options: [
        'Repeats a function',
        'Creates a loop in JavaScript',
        'Iterates over a collection and creates DOM elements',
        'Refreshes the page'
      ],
      correct: 2,
      explanation: 'ng-repeat is a directive that instantiates a template once per item from a collection, creating repeated DOM elements.'
    },
    {
      question: 'What is dependency injection in AngularJS?',
      options: [
        'A way to inject CSS',
        'A design pattern for passing dependencies to components',
        'A method to create bugs',
        'A way to load images'
      ],
      correct: 1,
      explanation: 'Dependency Injection is a design pattern where components receive their dependencies from external sources rather than creating them.'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">🅰️ AngularJS Fundamentals</h1>
          <p className="text-xl text-gray-600">Build dynamic web applications with AngularJS!</p>
        </div>

        {/* Introduction */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">📚 What is AngularJS?</h2>
          <p className="text-gray-700 mb-4">
            AngularJS is a JavaScript framework that extends HTML with new attributes and makes building
            dynamic, single-page applications easy. It uses the MVC (Model-View-Controller) pattern and
            features powerful two-way data binding.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
            <p className="font-semibold text-blue-800">💡 Key Features:</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Two-way data binding</li>
              <li>Dependency injection</li>
              <li>Directives for extending HTML</li>
              <li>Services for reusable business logic</li>
              <li>Routing for single-page applications</li>
            </ul>
          </div>
        </section>

        {/* Setup */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">⚙️ Getting Started</h2>

          <CodeBlock
            title="Basic HTML Setup"
            code={`<!DOCTYPE html>
<html ng-app="myApp">
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>
<body>
  <div ng-controller="MainController">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>

  <script>
    // Create module
    var app = angular.module('myApp', []);

    // Create controller
    app.controller('MainController', function($scope) {
      $scope.title = 'Hello AngularJS!';
      $scope.message = 'Welcome to your first Angular app!';
    });
  </script>
</body>
</html>`}
            language="html"
          />
        </section>

        {/* Data Binding */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">🔄 Two-Way Data Binding</h2>
          <p className="text-gray-700 mb-4">
            The magic of AngularJS! Changes in the model automatically update the view, and vice versa.
          </p>

          <CodeBlock
            title="ng-model Example"
            code={`<div ng-app="myApp" ng-controller="BindingController">
  <!-- Input updates model -->
  <input type="text" ng-model="username" placeholder="Enter your name">

  <!-- Model updates view -->
  <h2>Hello, {{ username }}!</h2>
  <p>Your name has {{ username.length }} characters.</p>
  <p ng-show="username.length > 5">That's a long name!</p>
</div>

<script>
  angular.module('myApp', [])
    .controller('BindingController', function($scope) {
      $scope.username = 'Guest';
    });
</script>`}
            language="html"
          />

          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-lg p-6 mt-4">
            <h3 className="font-bold text-green-800 mb-2">🎯 Try it yourself:</h3>
            <p className="text-gray-700 mb-3">Copy this code into an HTML file and open it in your browser. Type in the input field and watch the magic happen!</p>
            <CodeBlock
              code={`<!DOCTYPE html>
<html ng-app="demoApp">
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <style>
    body { font-family: Arial; padding: 20px; }
    input { padding: 10px; font-size: 16px; margin: 10px 0; width: 300px; }
  </style>
</head>
<body ng-controller="DemoCtrl">
  <h1>Two-Way Binding Demo</h1>
  <input type="text" ng-model="name" placeholder="Type your name">
  <h2 style="color: #DD0031;">Hello, {{ name || 'Friend' }}! 👋</h2>

  <script>
    angular.module('demoApp', [])
      .controller('DemoCtrl', function($scope) {
        $scope.name = '';
      });
  </script>
</body>
</html>`}
              language="html"
            />
          </div>
        </section>

        {/* Directives */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">🎨 Built-in Directives</h2>
          <p className="text-gray-700 mb-4">
            Directives are markers on DOM elements that tell AngularJS to attach special behavior.
          </p>

          <CodeBlock
            title="Common Directives"
            code={`<div ng-app="myApp" ng-controller="DirectiveController">
  <!-- ng-show / ng-hide: Show/hide elements -->
  <p ng-show="isVisible">I'm visible!</p>
  <button ng-click="isVisible = !isVisible">Toggle</button>

  <!-- ng-if: Add/remove from DOM -->
  <div ng-if="user.isLoggedIn">
    Welcome, {{ user.name }}!
  </div>

  <!-- ng-repeat: Loop through items -->
  <ul>
    <li ng-repeat="item in items">
      {{ item.name }} - \${{ item.price }}
    </li>
  </ul>

  <!-- ng-class: Dynamic classes -->
  <div ng-class="{ 'active': isActive, 'error': hasError }">
    Styled dynamically
  </div>

  <!-- ng-click: Handle clicks -->
  <button ng-click="addItem()">Add Item</button>

  <!-- ng-submit: Handle form submission -->
  <form ng-submit="submitForm()">
    <input ng-model="formData.name">
    <button type="submit">Submit</button>
  </form>
</div>

<script>
  angular.module('myApp', [])
    .controller('DirectiveController', function($scope) {
      $scope.isVisible = true;
      $scope.items = [
        { name: 'Laptop', price: 999 },
        { name: 'Mouse', price: 25 },
        { name: 'Keyboard', price: 75 }
      ];

      $scope.addItem = function() {
        $scope.items.push({
          name: 'New Item',
          price: 0
        });
      };

      $scope.user = {
        isLoggedIn: true,
        name: 'Alice'
      };
    });
</script>`}
            language="html"
          />
        </section>

        {/* Controllers */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">🎮 Controllers</h2>
          <p className="text-gray-700 mb-4">
            Controllers manage the data and behavior of your application.
          </p>

          <CodeBlock
            title="Controller Example"
            code={`<div ng-app="todoApp" ng-controller="TodoController">
  <h2>Todo List ({{ todos.length }} items)</h2>

  <form ng-submit="addTodo()">
    <input ng-model="newTodo" placeholder="What needs to be done?">
    <button type="submit">Add</button>
  </form>

  <ul>
    <li ng-repeat="todo in todos" ng-class="{ 'completed': todo.done }">
      <input type="checkbox" ng-model="todo.done">
      <span ng-click="todo.done = !todo.done">{{ todo.text }}</span>
      <button ng-click="removeTodo($index)">×</button>
    </li>
  </ul>

  <p>{{ remaining() }} of {{ todos.length }} remaining</p>
</div>

<script>
  angular.module('todoApp', [])
    .controller('TodoController', function($scope) {
      $scope.todos = [
        { text: 'Learn AngularJS', done: false },
        { text: 'Build an app', done: false }
      ];

      $scope.newTodo = '';

      $scope.addTodo = function() {
        if ($scope.newTodo.trim()) {
          $scope.todos.push({
            text: $scope.newTodo,
            done: false
          });
          $scope.newTodo = '';
        }
      };

      $scope.removeTodo = function(index) {
        $scope.todos.splice(index, 1);
      };

      $scope.remaining = function() {
        return $scope.todos.filter(function(todo) {
          return !todo.done;
        }).length;
      };
    });
</script>

<style>
  .completed { text-decoration: line-through; opacity: 0.6; }
</style>`}
            language="html"
          />
        </section>

        {/* Filters */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">🔍 Filters</h2>
          <p className="text-gray-700 mb-4">
            Filters format and transform data in your templates.
          </p>

          <CodeBlock
            title="Built-in Filters"
            code={`<div ng-app="myApp" ng-controller="FilterController">
  <!-- Uppercase / Lowercase -->
  <p>{{ name | uppercase }}</p>
  <p>{{ name | lowercase }}</p>

  <!-- Currency -->
  <p>Price: {{ price | currency }}</p>
  <p>Euro: {{ price | currency:'€' }}</p>

  <!-- Date -->
  <p>{{ today | date:'fullDate' }}</p>
  <p>{{ today | date:'short' }}</p>
  <p>{{ today | date:'yyyy-MM-dd' }}</p>

  <!-- Number -->
  <p>{{ decimal | number:2 }}</p>

  <!-- LimitTo -->
  <p>{{ longText | limitTo:50 }}...</p>

  <!-- OrderBy -->
  <ul>
    <li ng-repeat="user in users | orderBy:'age'">
      {{ user.name }} ({{ user.age }})
    </li>
  </ul>

  <!-- Filter (search) -->
  <input ng-model="searchText" placeholder="Search...">
  <ul>
    <li ng-repeat="item in items | filter:searchText">
      {{ item }}
    </li>
  </ul>

  <!-- Custom Filter -->
  <p>{{ text | reverse }}</p>
</div>

<script>
  angular.module('myApp', [])
    .controller('FilterController', function($scope) {
      $scope.name = 'Angular JS';
      $scope.price = 99.99;
      $scope.today = new Date();
      $scope.decimal = 3.14159;
      $scope.longText = 'This is a very long text that needs to be truncated';
      $scope.users = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 20 }
      ];
      $scope.items = ['Apple', 'Banana', 'Cherry', 'Date'];
    })
    .filter('reverse', function() {
      return function(input) {
        return input.split('').reverse().join('');
      };
    });
</script>`}
            language="html"
          />
        </section>

        {/* Services */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">🔧 Services & Dependency Injection</h2>
          <p className="text-gray-700 mb-4">
            Services are singleton objects that encapsulate reusable business logic.
          </p>

          <CodeBlock
            title="Creating and Using Services"
            code={`<div ng-app="myApp" ng-controller="UserController">
  <h2>Users</h2>
  <ul>
    <li ng-repeat="user in users">{{ user.name }}</li>
  </ul>
  <button ng-click="loadUsers()">Reload Users</button>
</div>

<script>
  var app = angular.module('myApp', []);

  // Create a service
  app.service('UserService', function($http, $q) {
    this.getUsers = function() {
      // Simulate API call
      var deferred = $q.defer();

      setTimeout(function() {
        deferred.resolve([
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
          { id: 3, name: 'Charlie' }
        ]);
      }, 500);

      return deferred.promise;
    };

    this.getUserById = function(id) {
      return this.getUsers().then(function(users) {
        return users.find(function(u) { return u.id === id; });
      });
    };
  });

  // Factory alternative
  app.factory('MathService', function() {
    return {
      add: function(a, b) { return a + b; },
      multiply: function(a, b) { return a * b; }
    };
  });

  // Inject service into controller
  app.controller('UserController', function($scope, UserService, MathService) {
    $scope.users = [];

    $scope.loadUsers = function() {
      UserService.getUsers().then(function(users) {
        $scope.users = users;
      });
    };

    // Load on init
    $scope.loadUsers();

    // Use MathService
    var result = MathService.add(5, 3);
    console.log('5 + 3 =', result);
  });
</script>`}
            language="html"
          />

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mt-4">
            <p className="font-semibold text-purple-800">🎯 Dependency Injection:</p>
            <p className="text-gray-700 mt-2">
              Notice how services are "injected" into the controller as function parameters?
              This is dependency injection - AngularJS automatically provides the service instances!
            </p>
          </div>
        </section>

        {/* HTTP Requests */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">🌐 HTTP Requests</h2>
          <p className="text-gray-700 mb-4">
            Use $http service to communicate with APIs.
          </p>

          <CodeBlock
            title="Making HTTP Requests"
            code={`<div ng-app="apiApp" ng-controller="ApiController">
  <h2>API Data</h2>
  <button ng-click="fetchData()">Fetch Data</button>
  <p ng-if="loading">Loading...</p>
  <div ng-if="!loading && data">
    <h3>{{ data.title }}</h3>
    <p>{{ data.body }}</p>
  </div>
</div>

<script>
  angular.module('apiApp', [])
    .controller('ApiController', function($scope, $http) {
      $scope.loading = false;
      $scope.data = null;

      $scope.fetchData = function() {
        $scope.loading = true;

        // GET request
        $http.get('https://jsonplaceholder.typicode.com/posts/1')
          .then(function(response) {
            $scope.data = response.data;
            $scope.loading = false;
          })
          .catch(function(error) {
            console.error('Error:', error);
            $scope.loading = false;
          });
      };

      // POST request example
      $scope.createPost = function() {
        $http.post('https://jsonplaceholder.typicode.com/posts', {
          title: 'New Post',
          body: 'This is a new post',
          userId: 1
        })
        .then(function(response) {
          console.log('Created:', response.data);
        });
      };

      // PUT request example
      $scope.updatePost = function(id) {
        $http.put('https://jsonplaceholder.typicode.com/posts/' + id, {
          title: 'Updated Post',
          body: 'This post has been updated'
        })
        .then(function(response) {
          console.log('Updated:', response.data);
        });
      };

      // DELETE request example
      $scope.deletePost = function(id) {
        $http.delete('https://jsonplaceholder.typicode.com/posts/' + id)
          .then(function() {
            console.log('Deleted post', id);
          });
      };
    });
</script>`}
            language="html"
          />
        </section>

        {/* Complete Example */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">🎉 Complete Example: Movie Database</h2>
          <p className="text-gray-700 mb-4">
            A full-featured AngularJS app bringing everything together!
          </p>

          <CodeBlock
            title="movie-app.html"
            code={`<!DOCTYPE html>
<html ng-app="movieApp">
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <style>
    body { font-family: Arial; max-width: 800px; margin: 0 auto; padding: 20px; }
    .movie-card { border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 8px; }
    .movie-card:hover { box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
    input, select { padding: 10px; margin: 5px; font-size: 14px; }
    button { padding: 10px 20px; background: #DD0031; color: white; border: none;
             border-radius: 5px; cursor: pointer; }
    button:hover { background: #b3002a; }
    .rating { color: gold; font-size: 20px; }
  </style>
</head>
<body ng-controller="MovieController">
  <h1>🎬 Movie Database</h1>

  <!-- Add Movie Form -->
  <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
    <h2>Add New Movie</h2>
    <form ng-submit="addMovie()">
      <input ng-model="newMovie.title" placeholder="Title" required>
      <input ng-model="newMovie.year" type="number" placeholder="Year" required>
      <input ng-model="newMovie.rating" type="number" step="0.1" min="0" max="10" placeholder="Rating">
      <select ng-model="newMovie.genre">
        <option value="">Select Genre</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
      <button type="submit">Add Movie</button>
    </form>
  </div>

  <!-- Search and Filter -->
  <div style="margin-bottom: 20px;">
    <input ng-model="searchText" placeholder="🔍 Search movies..." style="width: 300px;">
    <select ng-model="genreFilter">
      <option value="">All Genres</option>
      <option value="Action">Action</option>
      <option value="Comedy">Comedy</option>
      <option value="Drama">Drama</option>
      <option value="Sci-Fi">Sci-Fi</option>
    </select>
    <select ng-model="sortBy">
      <option value="title">Sort by Title</option>
      <option value="year">Sort by Year</option>
      <option value="rating">Sort by Rating</option>
    </select>
  </div>

  <!-- Movie List -->
  <h2>Movies ({{ filteredMovies().length }})</h2>
  <div class="movie-card" ng-repeat="movie in filteredMovies() | orderBy:sortBy:sortReverse">
    <h3>{{ movie.title }} ({{ movie.year }})</h3>
    <p><strong>Genre:</strong> {{ movie.genre }}</p>
    <p class="rating">{{ getStars(movie.rating) }} {{ movie.rating }}/10</p>
    <button ng-click="removeMovie($index)" style="background: #dc3545;">Delete</button>
  </div>

  <p ng-if="filteredMovies().length === 0" style="text-align: center; color: #999;">
    No movies found. Add some movies to get started!
  </p>

  <script>
    angular.module('movieApp', [])
      .controller('MovieController', function($scope) {
        // Initial movies
        $scope.movies = [
          { title: 'Inception', year: 2010, rating: 8.8, genre: 'Sci-Fi' },
          { title: 'The Dark Knight', year: 2008, rating: 9.0, genre: 'Action' },
          { title: 'Interstellar', year: 2014, rating: 8.6, genre: 'Sci-Fi' },
          { title: 'The Hangover', year: 2009, rating: 7.7, genre: 'Comedy' }
        ];

        $scope.newMovie = {};
        $scope.searchText = '';
        $scope.genreFilter = '';
        $scope.sortBy = 'title';
        $scope.sortReverse = false;

        // Add movie
        $scope.addMovie = function() {
          if ($scope.newMovie.title && $scope.newMovie.year) {
            $scope.movies.push(angular.copy($scope.newMovie));
            $scope.newMovie = {};
          }
        };

        // Remove movie
        $scope.removeMovie = function(index) {
          $scope.movies.splice(index, 1);
        };

        // Filter movies
        $scope.filteredMovies = function() {
          return $scope.movies.filter(function(movie) {
            var matchesSearch = !$scope.searchText ||
              movie.title.toLowerCase().includes($scope.searchText.toLowerCase());
            var matchesGenre = !$scope.genreFilter ||
              movie.genre === $scope.genreFilter;
            return matchesSearch && matchesGenre;
          });
        };

        // Get star rating
        $scope.getStars = function(rating) {
          var stars = Math.round(rating / 2);
          return '⭐'.repeat(stars);
        };
      });
  </script>
</body>
</html>`}
            language="html"
          />

          <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
            <p className="font-semibold text-green-800">🚀 Challenge:</p>
            <p className="text-gray-700 mt-2">
              Save this as an HTML file and open it in your browser. Try adding, searching,
              filtering, and deleting movies. Can you add more features like editing movies or
              saving to localStorage?
            </p>
          </div>
        </section>

        {/* Quiz */}
        <Quiz questions={quizQuestions} title="AngularJS Quiz" />

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">🎉 Congratulations!</h3>
          <p className="text-lg mb-6">
            You've completed the AngularJS fundamentals! You now know JavaScript basics, ES6 features,
            and how to build dynamic applications with AngularJS.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/playground" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all">
              Try the Playground →
            </Link>
            <Link href="/" className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
