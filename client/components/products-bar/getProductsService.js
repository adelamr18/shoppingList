app.factory("getproductsService", function ($http) {
    return {
        getRequest: function () {
            return $http({
                method: 'get',
                url: 'http://localhost:3000/api/products'
            });
        },
    }
})


