angular.module('idyangu.controllers', [])

.controller('mainCtlr', ['$scope', '$state', '$stateParams', 'idyangservice', 
 
 function($scope ,$state, $stateParams) {
   
         console.log("inside mainCtlr");
   
            
              $scope.searchCall = function(itemId, itemType){
                        
                        $scope.itemType = itemType;
                        $scope.itemId = itemId;
                
                        console.log('clicked search ' + itemType  + ' : ' + itemId);
                
                
                      $state.go('search', {itemid: itemId, itemtype: itemType} );
                  
              } 
   
   
                 $scope.me = "passports";
                 $scope.hello = "About"; 

              }
])


.controller('searchCtlr', ['$scope', '$state', '$stateParams', 'idyangservice', 
 
 function($scope ,$state, $stateParams) {
          
          $scope.itemid = $stateParams.itemtype;
          $scope.itemtype = $stateParams.itemid;
   
   
     
         console.log("inside searchCtlr" );
   
              }
])



.controller('navbarCtlr', ['$scope', '$state', '$stateParams', 'idyangservice', 
 
 function($scope ,$state, $stateParams) {
   
   
    
         console.log("inside navbarCtlr");
   
              }
])









