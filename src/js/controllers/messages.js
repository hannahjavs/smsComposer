// This folder & file is directory for controllers

// Below is the angular module which will be linked in the HTMl fil:
angular
  .module('smsComposer')
  .controller('MessagesCtrl', MessagesCtrl);

// Below is some initial seed data:

// MessagesCtrl is the constructor function - we normally capitalise it:
function MessagesCtrl() {
  console.log('MessagesCtrl');
  // Often it's necessary to namespace the value of THIS inside a controller, because the value of THIS can sometimes changes.
  // There's several conventions for name-spacing THIS, icluding: controller, self and vm.
  // We're using vm because it reminds us we're talking about the >>> ViewModel.
  const vm = this;

  vm.newMessage = { topic: ''};
  vm.items   = [
    { topic: 'Pruning coffee'},
    { topic: 'Chicken routine'},
    { topic: 'Cows'},
    { topic: 'Maize'},
    { topic: 'Young beans'},
    { topic: 'Blossom End Rot In Tomatoes'},
    { topic: 'Irrigation'}
  ];
  // Above is an aray of simple objects

  // This function below is adding the topics to a list
  // .push is pushing them into an array of topics
  function addItem() {
    vm.items.push(vm.newMessage);
    // Here you can see the list of seed data and the added items pushed into the array in the web console:
    console.log(vm.items);
    vm.newMessage = { topic: ''};
  }
  vm.addItem = addItem;
}


// So, in Angular's flavour of MV*, controllers are intended to primarily:
// 1. Respond to user actions.
// 2. Provide data to the view (occasionally referred to as the view-model).


// With Javascript in play, our browser is naturally event-driven. For example, when you have an onClick event listener placed on a button, you also have an event handler that can update the DOM in some way. The 'magic' behind Angular, the way that it seemingly knows to update the DOM when need be, is due to the fact that it extends the traditional js event-loop by extending it with angular context.

// Every time you use Angular to bind something in the UI, whether it be via handlebars or any ngDirective, you are telling your related Angular module that they are extensions of your angular context and to watch them for changes by adding them to the $watch list. This event loop is known as the $digest cycle and whenever there is a change in Angular context ($scope), Angular will go through ALL of its context and update any model(s) with a value that has been updated, a concept known as "dirty-checking."
