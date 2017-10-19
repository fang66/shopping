/**
 * Created by Admin on 2017/10/18.
 */
app.controller("shopItemController",function($scope){
    $scope.deleteItem=function(index){
        $scope.$emit("deleteItem",index);
    };
    $scope.itemChange=function(index){
        $scope.$emit("itemChange",index);
    }
    $scope.countChange=function(){
        
    }
});