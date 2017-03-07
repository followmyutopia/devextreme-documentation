Currently, when clicking a product in the product list presented in the 'master' pane, the details of the clicked product are displayed in the 'detail' pane. However, it will be better if the clicked product is highlighted in the product list, so that it is clear for which product detailed information is given in the 'detail' pane.

- Save the currently chosen item in the **List** widget to the **selectedProductID** field of the 'products' ViewModel.

		<!--JavaScript-->MyApp.products = function (params) {
			var viewModel = {
				//...
				navigateToDetails: function (productId) {
					this.selectedProductID(productId);
					MyApp.app.navigate({ view: 'product-details', id: productId }, { root: true });
				},
				selectedProductID: ko.observable()
			};
			return viewModel;
		};

- Call the ViewModel's **navigateToDetails** method when the action associated with the list item is performed.

		<!--HTML--><div data-options="dxView : { name: 'products', title: 'Products', pane: 'master' } " >
			<div  data-options="dxContent : { targetPlaceholder: 'content' } " >
				<div data-bind="dxList: { dataSource: dataSource }">
					<div data-options="dxTemplate : { name: 'item' }"
							data-bind="dxAction: function () {$root.navigateToDetails($data.ProductID);}">
						<div data-bind="text: ProductName"/>
					</div>
				</div>
			</div>  
		</div>

- Add a CSS file for the 'products' view. Introduce the following styles in it.

		<!--CSS-->.dx-theme-ios7.dx-device-tablet .list-item-selected {
			background: #ccf;
		}
		.dx-theme-android.dx-device-tablet .list-item-selected {
			background: rgba(44,159,201,.8);
		}
		.dx-theme-win10 .list-item-selected {
			background: #00c1ec;
		}

- Add the introduced 'list-item-selected' style to the product in the **List** widget whose ID equals the one that is saved to the **selectedProductID** field. For this purpose, use [css](http://knockoutjs.com/documentation/css-binding.html) Knockout binding.

		<!--HTML--><div data-options="dxView : { name: 'products', title: 'Products', pane: 'master' } " >
			<div  data-options="dxContent : { targetPlaceholder: 'content' } " >
				<div data-bind="dxList: { dataSource: dataSource }">
					<div data-options="dxTemplate : { name: 'item' }"
							data-bind="dxAction: function () {$root.navigateToDetails($data.ProductID);},
							css: { 'list-item-selected': ProductID === $root.selectedProductID()}">
						<div data-bind="text: ProductName"/>
					</div>
				</div>
			</div>  
		</div>