The Split layout is designed for tablet applications only. To run the application implemented based on the steps above on a phone, provide a [custom layout set](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Custom_Layout_Sets) for the application.

	<!--JavaScript-->window.MyApp = window.MyApp || {};
	$(function() {
		var layoutSet = [
			{ platform: "ios", tablet: true, controller: new DevExpress.framework.html.IOSSplitLayoutController() },
			{ platform: "android", tablet: true, controller: new DevExpress.framework.html.AndroidSplitLayoutController() },
			{ win: false, phone: true, controller: new DevExpress.framework.html.NavBarController() },
			{ win: true, phone: true, root: true, controller: new DevExpress.framework.html.PivotLayoutController() },
			{ platform: "android", phone: true, root: false, controller: new DevExpress.framework.html.SimpleLayoutController() },
			{ win: true, phone: true, root: false, controller: new DevExpress.framework.html.SimpleLayoutController() }
		];
		MyApp.app = new DevExpress.framework.html.HtmlApplication({
			namespace: MyApp,
			animationSet: DevExpress.framework.html.animationSets['default'],
			layoutSet: layoutSet,
			//...
		});
		//...
	});

According to the code above, the following layouts will be used for different devices.

- **iOS**  
	*Tablet*: [Split](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Split_Layout) layout;  
	*Phone*: [NavBar](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Navbar_Layout) layout.
- **Android**  
	*Tablet*: Split layout;  
	*Phone*, *Root views*: Navbar layout;  
	*Phone*, *Non-root views*: [Simple](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Simple_Layout) layout.
- **Windows**  
	*Phone*, *Root views*: [Pivot](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Pivot_Layout) layout;  
	*Phone*, *Non-root views*: Simple layout.

As you can see, the layouts used for phone application versions include a widget that serves as a global navigation control (the [NavBar](/Documentation/ApiReference/UI_Widgets/dxNavBar/) and [Pivot](/Documentation/ApiReference/UI_Widgets/dxPivot/) widgets). So when the application starts on a phone, the "navigation" view, which you set as a start view for the application, should be replaced with the "categories" view. So modify code in the *app.js* file as shown below.

	<!--JavaScript-->window.MyApp = window.MyApp || {};
	$(function () {
		var layoutSet = [
			{ platform: "ios", tablet: true, controller: new DevExpress.framework.html.IOSSplitLayoutController() },
			{ platform: "android", tablet: true, controller: new DevExpress.framework.html.AndroidSplitLayoutController() },
			{ win: false, phone: true, controller: new DevExpress.framework.html.NavBarController() },
			{ win: true, phone: true, root: true, controller: new DevExpress.framework.html.PivotLayoutController() },
			{ platform: "android", phone: true, root: false, controller: new DevExpress.framework.html.SimpleLayoutController() },
			{ win: true, phone: true, root: false, controller: new DevExpress.framework.html.SimpleLayoutController() }
		];
		var device = DevExpress.devices.current(),
			startupView = "navigation";
		if (device.phone) {
			startupView = "categories";
		};
		MyApp.app = new DevExpress.framework.html.HtmlApplication({
			namespace: MyApp,
			animationSet: DevExpress.framework.html.animationSets['default'],
			layoutSet: layoutSet,
			navigation:[
				{
					title: "Categories",
					onExecute: "#categories",
					icon: "home"
				},
				{
					title: "About",
					onExecute: "#about",
					icon: "info"
				}
			]
		});
		MyApp.app.router.register(":view/:id", { view: startupView, id: undefined });
		MyApp.app.navigate();
	});
    
In addition, consider the scenario of navigation from a list view to a detail view. On phones, the detail view should be added after the list view in the current navigation stack. On tablets, the detail view should be shown on the "detail" pane, thus it should be navigated as a root view. To resolve this inconsistency, check whether the Split layout is used for the list view.

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

	<!--JavaScript-->MyApp.products = function (params, viewInfo) {
		var showDetailAsRoot = viewInfo.layoutController.name === 'split';
		var viewModel = {
			//...
			navigateToDetails: function (productId) {
				this.selectedProductID(productId);
				MyApp.app.navigate({ view: 'product-details', id: productId }, { root: showDetailAsRoot });
			}
		};
		return viewModel;
	};