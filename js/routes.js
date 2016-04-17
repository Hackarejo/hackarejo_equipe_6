angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page3',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('page', {
    url: '/page6',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('cartO', {
    url: '/page7',
    templateUrl: 'templates/cartO.html',
    controller: 'cartOCtrl'
  })

  .state('compras', {
    url: '/page8',
    templateUrl: 'templates/compras.html',
    controller: 'comprasCtrl'
  })

  .state('bNus', {
    url: '/page9',
    templateUrl: 'templates/bNus.html',
    controller: 'bNusCtrl'
  })

  .state('usuario', {
    url: '/page10',
    templateUrl: 'templates/usuario.html',
    controller: 'usuarioCtrl'
  })

  .state('formasDePagamento', {
    url: '/page11',
    templateUrl: 'templates/formasDePagamento.html',
    controller: 'formasDePagamentoCtrl'
  })

  .state('page2', {
    url: '/page12',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

$urlRouterProvider.otherwise('/page2')

  

});