angular.module('idyangu.routes', [])

  .config( function($stateProvider, $urlRouterProvider) {
  
    $stateProvider
        
//         // HOME STATES AND multiple named views ========================================
        .state('home', {
            url: '/home',
      
            views: {  '': {   templateUrl: './views/home.html',
                               controller : 'mainCtlr' 
                         
                         },
                    
                     'homeHeader@home':{ templateUrl : './views/home-header.html',
                                         controller : 'mainCtlr'
                     
                         },
                    
                     'homeContent@home': {  templateUrl : './views/home-content.html',
                          
                                             controller : 'mainCtlr'
                        
                         }
               
                   }
          
        }) 
        
        // SEARCH PAGE AND MULTIPLE NAMED VIEWS =================================
    
        .state('search', {
      
             url : '/search/:itemtype/:itemid',
            views: {   '@': { templateUrl: './views/home.html',
                              controller: 'searchCtlr'
                           },
                    
                       'searchResults@search': {
                                  templateUrl: './views/search-default.html',
                                  controller: 'searchCtlr'
                           }
                   
                   }    
        });
        
  $urlRouterProvider.otherwise('/home');  // default route
});