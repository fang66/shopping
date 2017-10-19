/**
 * Created by Admin on 2017/10/18.
 */
app.controller("shopController",["$scope","shopServer",function($scope,shopServer){
    $scope.flag=false;
    shopServer.getData("GET","http://localhost:8090/products").then(function(result){
        $scope.products=JSON.parse(result.data.data);
    });
    $scope.$on("deleteItem",function(event,index){
         $scope.products.splice(index,1);
    });
    $scope.$on("itemChange",function(event,index){
        var count=0;
        $scope.products[index].state=!$scope.products[index].state;
        for(var i=0;i<$scope.products.length;i++){
            if($scope.products[i].state){
                count++;
            }
            if(count==$scope.products.length){
                $scope.flag=true;
            }else{
                $scope.flag=false;
            }
        }

    });
    $scope.checkAll=function(){
        $scope.flag=!$scope.flag;
        for(var i=0;i<$scope.products.length;i++){
            if($scope.flag){
                $scope.products[i].state=true;
            }else{
                $scope.products[i].state=false;
            }
        }
    }
}]);