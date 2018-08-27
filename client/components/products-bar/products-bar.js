
app.controller("ProductListCtrl", ["getproductsService", "$scope", ProductListCtrl])
function ProductListCtrl(getproductsService, $scope) {
  var count = 0;
  var productNumber = 0;
  var vm = this;
  var price = 0;
  vm.productsarray = [];
  var categoryCounter = 0;
  vm.predicate = 'category';
  vm.reverse = true;
  vm.logProduct = function (productName) {
    productNumber++;
    count++;
    price = count + price;
    categoryCounter++;
    if (productName.toLowerCase() === 'wasa' || productName.toLowerCase() === 'corny') {
      toastr.success("Product Added");
      let categoryadd = { category: 'Brot & Bakwaren' };
      let result = categoryadd.category;
      let category = result;
      vm.productsarray.push({ productName, price, productNumber, category });
    }
    else if (productName.toLowerCase() === 'hipp' || productName.toLowerCase() === 'pampers') {
      toastr.success("Product Added");
      let categoryadd = { category: 'Babynahrung & Pflege' };
      let result = categoryadd.category;
      let category = result;
      vm.productsarray.push({ productName, price, productNumber, category });
    }
    else if (productName.toLowerCase() === 'volvic' || productName.toLowerCase() === 'cocacola') {
      toastr.success("Product Added");
      let categoryadd = { category: 'Getränke' };
      let result = categoryadd.category;
      let category = result;
      vm.productsarray.push({ productName, price, productNumber, category });
    }
    else if (productName.toLowerCase() === 'langnese') {
      toastr.success("Product Added");
      let categoryadd = { category: 'Tiefkühlkost' };
      let result = categoryadd.category;
      let category = result;
      vm.productsarray.push({ productName, price, productNumber, category });
    }
    else if (productName.toLowerCase() === 'haribo') {
      toastr.success("Product Added");
      let categoryadd = { category: 'Süßwaren & Knabbereien' };
      let result = categoryadd.category;
      let category = result;
      vm.productsarray.push({ productName, price, productNumber, category });
    }
    else {
      alert("You have entered an invalid product")
    }
  }
  $scope.order = function (predicate) {
    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
    $scope.predicate = predicate;
  };

  getproductsService.getRequest().then(function (res) {
    vm.products = res.data;
  }, function errorcallback(response) {
    console.log("Unable to get", Request)
  })

}
