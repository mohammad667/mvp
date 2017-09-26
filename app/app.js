angular.module('app', [])
  .component('todoList', {
    controller: function() {
      this.todos = [
        "Wake up",
        "shopping foods",
        "breakfast"
      ];
      this.addTodo = () => {
        this.todos.push(this.newTodo);
        this.newTodo = "";
      };
      this.removeTodo = (index) => {
        this.todos.splice(index, 1);
      }
    },
    template: `
    <center><h1>T o D o   L i s t</h1></center>
     
    <center><input ng-model="$ctrl.newTodo"></center></br>
    <center><button ng-click="$ctrl.addTodo()"><h2>+ADD+</h2></button></center>
   
    <ul>
      <entry
        todo="todo"
        ng-repeat="todo in $ctrl.todos track by $index"
        ng-click="$ctrl.removeTodo($index)"
        />
    </ul>
    <hr/>
    <pre {{"$ctrl.todos | json"}}/>
    `
  })
  .component('entry', {
    bindings: {
      todo: '<'
    },
    template: `
      <li>
        {{$ctrl.todo}}
      </li>
    `
  })