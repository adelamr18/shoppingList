
app.controller("ProductListCtrl", ["getproductsService", "$scope", ProductListCtrl])
function ProductListCtrl(getproductsService, $scope) {
  var productNumber = 0;
  var count=0;
  var vm = this;
  var price = 0;
  vm.productsarray = [];
  vm.predicate = 'category';
  vm.reverse = true;
  vm.logProduct = function (productName) {
    productNumber++;
    count++;
    price = count + price;
    if (productName.toLowerCase() === 'wasa' || productName.toLowerCase() === 'corny') {
      let categoryadd = { category: 'Brot & Bakwaren' };
      let result = categoryadd.category;
      let category = result;
      if(productName.toLowerCase() === 'wasa' ){
        toastr.success("Product Added");
        let image='client/assets/images/wasa.jpg';
        vm.productsarray.push({ productName, price, productNumber, category,image});
      }
      if(productName.toLowerCase() === 'corny' ){
        toastr.success("Product Added");
        let image='client/assets/images/corny.jpg';
        vm.productsarray.push({ productName, price, productNumber, category,image});
      }
    }
    else if (productName.toLowerCase() === 'hipp' || productName.toLowerCase() === 'pampers') {
      let categoryadd = { category: 'Babynahrung & Pflege' };
      let result = categoryadd.category;
      let category = result;
      if(productName.toLowerCase() === 'hipp' ){
        toastr.success("Product Added");
        let image='client/assets/images/hipp.jpg';
        vm.productsarray.push({ productName, price, productNumber, category,image});
      }
      if(productName.toLowerCase() === 'pampers' ){
        toastr.success("Product Added");
        let image='client/assets/images/pampers.jpg';
        vm.productsarray.push({ productName, price, productNumber, category,image});
      }
    }
    else if (productName.toLowerCase() === 'volvic' || productName.toLowerCase() === 'cocacola') {
      let categoryadd = { category: 'Getränke' };
      let result = categoryadd.category;
      let category = result;
      if(productName.toLowerCase() === 'volvic' ){
        toastr.success("Product Added");
        let image='client/assets/images/volvic.jpg';
        vm.productsarray.push({ productName, price, productNumber, category,image});
      }
      if(productName.toLowerCase() === 'cocacola' ){
        toastr.success("Product Added");
        let image='client/assets/images/cocacola.jpg';
        vm.productsarray.push({ productName, price, productNumber, category,image});
      }
    }
    else if (productName.toLowerCase() === 'langnese' || productName.toLowerCase() === 'frosta' ) {
      let categoryadd = { category: 'Tiefkühlkost' };
      let result = categoryadd.category;
      let category = result;
      if(productName.toLowerCase() === 'langnese' ){
        toastr.success("Product Added");
        let image='client/assets/images/langnese.jpg';
        vm.productsarray.push({ productName, price, productNumber, category,image});
      }
      if(productName.toLowerCase() === 'frosta' ){
        toastr.success("Product Added");
        let image='client/assets/images/frosta.jpg';
        vm.productsarray.push({ productName, price, productNumber, category,image});
      }
    }
    else if (productName.toLowerCase() === 'haribo' || productName.toLowerCase() === 'milka' || productName.toLowerCase() === 'ferrero'  ) {
      let categoryadd = { category: 'Süßwaren & Knabbereien' };
      let result = categoryadd.category;
      let category = result;
      if(productName.toLowerCase() === 'haribo' ){
        toastr.success("Product Added");
        let image='client/assets/images/haribo.jpg';
        vm.productsarray.push({ productName, price, productNumber, category,image});
      }
      if(productName.toLowerCase() === 'milka' ){
        toastr.success("Product Added");
        let image='client/assets/images/milka.jpg';
        vm.productsarray.push({ productName, price, productNumber, category,image});
      }
      if(productName.toLowerCase() === 'ferrero' ){
        toastr.success("Product Added");
        let image='client/assets/images/ferrero.jpg';
        vm.productsarray.push({ productName, price, productNumber, category,image});
      }
    }
    else {
      alert("Sie haben ein ungültiges Produkt eingegeben"); 
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
