/**
 * Created by Admin on 2017/10/18.
 */
app.factory("shopServer",["ajaxServer",function(ajaxServer){
    var shopServer={
        getData:function(type,url){
            return ajaxServer.ajax(type,url);
        }
    };
    return shopServer;
}]);