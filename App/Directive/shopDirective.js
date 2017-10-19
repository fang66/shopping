/**
 * Created by Admin on 2017/10/18.
 */
app.directive("shop",function(){
   return {
       restrict:"EA",
       scope: {
           item: "=item",
           index: "@index"
       },
       templateUrl:"./App/View/temp/shop.html",
       controller:"shopItemController"
   }
});