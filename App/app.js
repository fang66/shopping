/**
 * Created by Admin on 2017/10/18.
 */
var app=angular.module("myApp",["ui.router"]);
app.config(function($stateProvider,$locationProvider,$urlRouterProvider){
    $locationProvider.hashPrefix('');
    $stateProvider
        .state("shop",{
            url:"/shop",
            templateUrl:"./App/View/_shop.html",
            controller:"shopController"
        });
    $urlRouterProvider.otherwise("/shop");
})