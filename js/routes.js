angular.module('idyangu.routes', ['ui.router'])

  .config( function($stateProvider, $urlRouterProvider) {
  
    $stateProvider
        
//         // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: './views/home.html',
            controller: 'mainCtlr'
        }) 
        
//         // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
// //         .state('about', {
// //              url : '/about',
// //              templateUrl: './pages/about.html',
// //              controller: 'aboutController'    
// //         });
        
  $urlRouterProvider.otherwise('/home');  // default route
});