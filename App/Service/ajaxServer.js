/**
 * Created by Admin on 2017/10/18.
 */
app.factory("ajaxServer",function($http,$q){
    var factory={
        ajax:function(type,url,data){
            var defer=$q.defer();
            if(type=="JSONP"){
                $.ajax({
                    url:url,
                    dataType:"jsonp",
                    success:function(data){
                        defer.resolve(data);
                    },
                    error:function(error){
                        defer.reject(error);
                    }
                });
                return defer.promise;
            }else{
                $http({
                    url:url,
                    method:type||get,
                    data:data||null
                }).then(function(data){
                    defer.resolve(data);
                }).then(function(error){
                    defer.reject(error);
                });
            }
            return defer.promise;
        }
    }
    return factory;
});