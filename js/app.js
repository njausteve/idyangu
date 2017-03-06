 //idyangu

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'idyangu' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'idyangu.services' is found in services.js
// 'idyangu.controllers' is found in controllers.js
// use OcLazy load to load modules on the fly




// angular.module('idyangu', ['idyangu.controllers', 'id-yangu-routes', 'idyangu.directives', ' idyangu.services'])

var app = angular.module('idyangu', ['ui.router', 'idyangu.controllers', ' idyangu.services', 'idyangu.routes'])
