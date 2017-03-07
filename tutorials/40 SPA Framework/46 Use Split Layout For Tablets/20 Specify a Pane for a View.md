Currently, all application views are displayed within the 'detail' pane.

*Navigation <-> Categories <-> Products <-> Product Details*

The Split layout is designed to organize the application screen so that there is no empty space on it. Typically, list/navigation information is displayed within the left pane - the 'master' pane, and detail information is displayed within the right pane - the 'detail' pane. To display the 'navigation', 'categories', 'products' and 'about' views within the 'master' pane, set the [pane](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#pane) option of the **dxView** markup component representing this view to *'master'* (by default, this option is set to 'detail').

	<!--HTML--><div data-options="dxView : { name: 'navigation', title: 'Menu', pane: 'master' } " >
		<div class="home-view"  data-options="dxContent : { targetPlaceholder: 'content' } " >
			<!--...-->
		</div>
	</div>
	
	<div data-options="dxView : { name: 'categories', title: 'Categories', pane: 'master' } " >
		<div  data-options="dxContent : { targetPlaceholder: 'content' } " >
			<!--...-->
		</div>
	</div>

	<div data-options="dxView : { name: 'products', title: 'Products', pane: 'master' } " >
		<div  data-options="dxContent : { targetPlaceholder: 'content' } " >
			<!--...-->
		</div>
	</div>

	<div data-options="dxView : { name: 'about', title: 'About', pane: 'master' } " >
		<div  data-options="dxContent : { targetPlaceholder: 'content' } " >
			<!--...-->
		</div>
	</div>

Now, the navigation scheme of the application looks different.

The 'master' pane:

*Navigation <-> Categories <-> Products*

The 'detail' pane:
	
*Product Details*

Generally, there can be views that are invoked from the 'product-details' view and displayed within the 'detail' pane. These views are added to the [navigation stack](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_History_in_Mobile_Apps) that is based on the view to which the application navigated as a result of clicking an item in the list on the "master" pane.

*Product Details <-> Another View <-> One more view*

In order for this scheme to function, the view that is navigated from the "master" pane must be a root view. So, set the **root** navigation parameter to *true* when navigating to the 'product-details' view.

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

<!--...-->

	<!--JavaScript-->MyApp.products = function (params) {
		var viewModel = {
			//...
			navigateToDetails: function (productId) {
				this.selectedProductID(productId);
				MyApp.app.navigate({ view: 'product-details', id: productId }, { root: true });
			}
		};
		return viewModel;
	};

[note]If you assign a URI (whether a string or an object) to the [dxAction](/Documentation/ApiReference/SPA_Framework/Markup_Components/#dxAction) binding directly, you cannot specify the **root** navigation parameter. However, the Split Layout controller catches such cases when a view configured for a "detail" pane is navigated from the "master" pane. In this instance, this view is turned into a root view automatically. Since this *trick* is invisible in your code, we recommend that you use the **navigate** method to navigate to a root view, and to have a capability to specify the **root** navigation parameter.
