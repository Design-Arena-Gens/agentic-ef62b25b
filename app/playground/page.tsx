'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PlaygroundPage() {
  const [html, setHtml] = useState(`<!DOCTYPE html>
<html ng-app="playgroundApp">
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <style>
    body {
      font-family: Arial;
      padding: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.3);
      color: #333;
    }
    input {
      padding: 12px;
      width: 100%;
      margin: 10px 0;
      border: 2px solid #667eea;
      border-radius: 8px;
      font-size: 16px;
    }
    button {
      padding: 12px 24px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s;
    }
    button:hover {
      background: #764ba2;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
    .result {
      background: #f0f4ff;
      padding: 20px;
      border-radius: 8px;
      margin-top: 20px;
      border-left: 4px solid #667eea;
    }
  </style>
</head>
<body ng-controller="MainController">
  <div class="container">
    <h1 style="color: #667eea;">🎮 AngularJS Playground</h1>
    <p>Try editing this code and see the changes instantly!</p>

    <div>
      <label><strong>What's your name?</strong></label>
      <input ng-model="name" placeholder="Enter your name">
    </div>

    <div>
      <label><strong>Favorite number?</strong></label>
      <input ng-model="number" type="number" placeholder="Enter a number">
    </div>

    <button ng-click="calculate()">Calculate Magic!</button>

    <div class="result" ng-if="result">
      <h2>✨ Results</h2>
      <p><strong>Hello, {{ name || 'Friend' }}!</strong></p>
      <p>Your number doubled: <strong>{{ number * 2 }}</strong></p>
      <p>Your number squared: <strong>{{ number * number }}</strong></p>
      <p ng-if="number > 10">Wow, that's a big number! 🚀</p>
      <p ng-if="number <= 10 && number > 0">Nice choice! 👍</p>
    </div>
  </div>

  <script>
    angular.module('playgroundApp', [])
      .controller('MainController', function($scope) {
        $scope.name = '';
        $scope.number = 0;
        $scope.result = false;

        $scope.calculate = function() {
          $scope.result = true;
        };
      });
  </script>
</body>
</html>`)

  const [showPreview, setShowPreview] = useState(false)

  const examples = [
    {
      name: '🎨 Color Picker',
      code: `<!DOCTYPE html>
<html ng-app="colorApp">
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <style>
    body { font-family: Arial; padding: 20px; text-align: center; }
    .color-box {
      width: 200px; height: 200px; margin: 20px auto;
      border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      transition: all 0.3s;
    }
    input[type="color"] { width: 100px; height: 50px; cursor: pointer; }
  </style>
</head>
<body ng-controller="ColorController">
  <h1>🎨 Color Picker</h1>
  <input type="color" ng-model="selectedColor">
  <div class="color-box" ng-style="{'background-color': selectedColor}"></div>
  <h2>{{ selectedColor }}</h2>
  <p>RGB: {{ hexToRgb(selectedColor) }}</p>

  <script>
    angular.module('colorApp', [])
      .controller('ColorController', function($scope) {
        $scope.selectedColor = '#667eea';

        $scope.hexToRgb = function(hex) {
          var r = parseInt(hex.slice(1,3), 16);
          var g = parseInt(hex.slice(3,5), 16);
          var b = parseInt(hex.slice(5,7), 16);
          return 'rgb(' + r + ', ' + g + ', ' + b + ')';
        };
      });
  </script>
</body>
</html>`
    },
    {
      name: '🎲 Dice Roller',
      code: `<!DOCTYPE html>
<html ng-app="diceApp">
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <style>
    body { font-family: Arial; padding: 20px; text-align: center; background: #2c3e50; color: white; }
    .dice {
      font-size: 100px; margin: 30px; display: inline-block;
      animation: roll 0.5s ease-in-out;
    }
    @keyframes roll {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    button {
      padding: 20px 40px; font-size: 20px; background: #e74c3c;
      color: white; border: none; border-radius: 10px; cursor: pointer;
    }
    button:hover { background: #c0392b; }
  </style>
</head>
<body ng-controller="DiceController">
  <h1>🎲 Dice Roller</h1>
  <div class="dice" ng-repeat="die in dice track by $index">
    {{ getDiceEmoji(die) }}
  </div>
  <p style="font-size: 24px;">Total: {{ total }}</p>
  <button ng-click="rollDice()">Roll the Dice!</button>

  <script>
    angular.module('diceApp', [])
      .controller('DiceController', function($scope) {
        $scope.dice = [1, 1];
        $scope.total = 2;

        $scope.rollDice = function() {
          $scope.dice = [
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1
          ];
          $scope.total = $scope.dice[0] + $scope.dice[1];
        };

        $scope.getDiceEmoji = function(num) {
          var emojis = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
          return emojis[num - 1];
        };
      });
  </script>
</body>
</html>`
    },
    {
      name: '⏱️ Countdown Timer',
      code: `<!DOCTYPE html>
<html ng-app="timerApp">
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <style>
    body {
      font-family: Arial; padding: 20px; text-align: center;
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
      color: white;
    }
    .timer { font-size: 80px; font-weight: bold; margin: 30px; }
    input { padding: 15px; font-size: 18px; margin: 10px; border-radius: 5px; border: none; }
    button {
      padding: 15px 30px; font-size: 18px; margin: 5px;
      border: none; border-radius: 5px; cursor: pointer;
      background: #27ae60; color: white;
    }
    button:hover { background: #229954; }
    .stop { background: #e74c3c; }
    .stop:hover { background: #c0392b; }
  </style>
</head>
<body ng-controller="TimerController">
  <h1>⏱️ Countdown Timer</h1>
  <div class="timer">{{ formatTime(seconds) }}</div>

  <div ng-if="!running && seconds === 0">
    <input type="number" ng-model="inputSeconds" placeholder="Enter seconds">
    <button ng-click="startTimer()">Start</button>
  </div>

  <div ng-if="running">
    <button class="stop" ng-click="stopTimer()">Stop</button>
  </div>

  <div ng-if="!running && seconds > 0">
    <button ng-click="resumeTimer()">Resume</button>
    <button class="stop" ng-click="resetTimer()">Reset</button>
  </div>

  <script>
    angular.module('timerApp', [])
      .controller('TimerController', function($scope, $interval) {
        $scope.seconds = 0;
        $scope.inputSeconds = 60;
        $scope.running = false;
        var timer;

        $scope.startTimer = function() {
          $scope.seconds = parseInt($scope.inputSeconds) || 60;
          $scope.running = true;
          timer = $interval(function() {
            $scope.seconds--;
            if ($scope.seconds <= 0) {
              $scope.stopTimer();
              alert("Time's up!");
            }
          }, 1000);
        };

        $scope.stopTimer = function() {
          $scope.running = false;
          if (timer) $interval.cancel(timer);
        };

        $scope.resumeTimer = function() {
          $scope.startTimer();
        };

        $scope.resetTimer = function() {
          $scope.seconds = 0;
          $scope.running = false;
        };

        $scope.formatTime = function(sec) {
          var mins = Math.floor(sec / 60);
          var secs = sec % 60;
          return (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
        };
      });
  </script>
</body>
</html>`
    }
  ]

  const loadExample = (code: string) => {
    setHtml(code)
    setShowPreview(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">🎮 Interactive Playground</h1>
          <p className="text-xl text-gray-600">Write AngularJS code and see it run instantly!</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">📚 Example Projects</h3>
            <div className="space-y-2">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => loadExample(example.code)}
                  className="w-full text-left p-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 transition-all"
                >
                  {example.name}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">💻 Code Editor</h3>
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="px-6 py-2 rounded-lg font-semibold text-white transition-all bg-green-500 hover:bg-green-600"
              >
                {showPreview ? '📝 Edit Code' : '▶️ Run Code'}
              </button>
            </div>

            {!showPreview ? (
              <textarea
                value={html}
                onChange={(e) => setHtml(e.target.value)}
                className="w-full h-96 p-4 font-mono text-sm bg-gray-900 text-green-400 rounded-lg border-2 border-gray-700 focus:border-blue-500 outline-none"
                spellCheck={false}
              />
            ) : (
              <div className="border-4 border-gray-200 rounded-lg overflow-hidden">
                <iframe
                  srcDoc={html}
                  className="w-full h-96 bg-white"
                  title="preview"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">💡 Tips for the Playground</h2>
          <ul className="space-y-2 text-lg">
            <li>✏️ Edit the code directly in the editor</li>
            <li>▶️ Click "Run Code" to see your changes</li>
            <li>🎨 Try the example projects to learn new techniques</li>
            <li>🚀 Experiment and break things - that's how you learn!</li>
            <li>📱 All examples use AngularJS 1.8.2 from CDN</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
