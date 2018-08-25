
    app.controller("ProductListCtrl", ["getproductsService","$scope", ProductListCtrl])
    function ProductListCtrl(getproductsService,$scope) {
        var vm = this;
        getproductsService.getRequest().then(function (res) {
              vm.products=res.data;
            }, function errorcallback(response) {
              console.log("Unable to get", Request)
            })
      
    }
