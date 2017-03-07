Use an [application project template](/Documentation/Guide/SPA_Framework/Application_Project/) for your sample application.

To use the predefined Split layout for applications, set the [layoutSet](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#layoutSet) option of the **HtmlApplication** object to *DevExpress.framework.html.layoutSets['split']*.

    <!--JavaScript-->window.MyApp = window.MyApp || {};
    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
			animationSet: DevExpress.framework.html.animationSets['default'],
            layoutSet: DevExpress.framework.html.layoutSets['split'],
            //...
        });
        //...
    });

Include links to the layouts that are used within the Split layout.

    <!--HTML-->
    <link rel="stylesheet" type="text/css" href="layouts/Navbar/NavbarLayout.css" />
    <link rel="dx-template" type="text/html" href="layouts/Navbar/NavbarLayout.html"/>
    <script type="text/javascript" src="layouts/Navbar/NavbarLayout.js"></script>

    <link rel="stylesheet" type="text/css" href="layouts/Empty/EmptyLayout.css" />
    <link rel="dx-template" type="text/html" href="layouts/Empty/EmptyLayout.html"/>
    <script type="text/javascript" src="layouts/Empty/EmptyLayout.js"></script>

    <link rel="stylesheet" type="text/css" href="layouts/Simple/SimpleLayout.css" />
    <link rel="dx-template" type="text/html" href="layouts/Simple/SimpleLayout.html"/>
    <script type="text/javascript" src="layouts/Simple/SimpleLayout.js"></script>

    <link rel="stylesheet" type="text/css" href="layouts/Split/SplitLayout.css" />
    <link rel="dx-template" type="text/html" href="layouts/Split/SplitLayout.html"/>
    <script type="text/javascript" src="layouts/Split/SplitLayout.js"></script>

Remove the 'home' view that is included in the application template by default and add the following views.

####Categories List View####

Add the 'categories' view to the application. It will include the [List](/Documentation/ApiReference/UI_Widgets/dxList/) widget that will get data from the **Categories** table provided by the [sample data service](https://sampleservices.devexpress.com/Northwind.svc/). This service is published for instructional use only.

	<!--HTML--><div data-options="dxView : { name: 'categories', title: 'Categories' } " >
        <div class="home-view"  data-options="dxContent : { targetPlaceholder: 'content' } " >
            <div data-bind="dxList: { dataSource: dataSource  }">
                <div data-options="dxTemplate : { name: 'item' }" data-bind="dxAction: '#products/{CategoryID}'">
                    <div data-bind="text: CategoryName"></div>
                </div>
            </div>
        </div>
    </div>


<!--...-->

    <!--JavaScript-->MyApp.categories = function (params) {
        var viewModel = {
            dataSource: new DevExpress.data.DataSource({
                load: function (loadOptions) {
                    return $.getJSON('https://sampleservices.devexpress.com/api/Categories');
                }
            })
        };
        return viewModel;
    };

When clicking an item in the **List** widget of the 'categories' view, the 'products' view is displayed. To pass the category ID as a parameter to the 'products' view and show the products that belong to the chosen category only, modify the application's routing format.

    <!--JavaScript-->MyApp.app.router.register(":view/:id", { view: 'categories', id: undefined });

####Products List View####

Add the 'products' view to the application. It will include the **List** widget that will display the products that are related to the category chosen in the previous 'categories' view.

    <!--HTML--><div data-options="dxView : { name: 'products', title: 'Products' } " >
        <div  data-options="dxContent : { targetPlaceholder: 'content' } " >
            <div data-bind="dxList: { dataSource: dataSource }">
                <div data-options="dxTemplate : { name: 'item' }"
                        data-bind="dxAction: '#product-details/{ProductID}">
                    <div data-bind="text: ProductName"/>
                </div>
            </div>
        </div>
    </div>


<!--...-->

    <!--JavaScript-->MyApp.products = function (params) {
        var viewModel = {
            categoryId: params.id,
            dataSource: new DevExpress.data.DataSource({
                pageSize: 10,            
                load: function(loadOptions) {
                    return $.getJSON('https://sampleservices.devexpress.com/api/Products', {
                        CategoryID: viewModel.categoryId,
                        skip: loadOptions.skip,
                        take: loadOptions.take,
                        searchString: ''
                    });            
                }
            })
        };
        return viewModel;
    };
    
When clicking an item in the **List** widget of the 'products' view, the 'product-details' view is displayed. To show details for the product chosen in the 'products' view, the id of this product is passed to the 'product-details' view as a parameter.

####Product Detail View####

Add the 'product-details' view to the application. It will include fields in which to display the id and the name of the product chosen in the previous 'products' view.

    <!--HTML--><div data-options="dxView : { name: 'product-details', title: 'Product' } " >
        <div  data-options="dxContent : { targetPlaceholder: 'content' } " >
            <div class="dx-fieldset">
                <div class="dx-field">
                    <div class="dx-field-label">Id: </div>
                    <div class="dx-field-value" data-bind="text: id"></div>
                </div>
                <div class="dx-field">
                    <div class="dx-field-label">Name: </div>
                    <div class="dx-field-value" data-bind="text: name"></div>
                </div>
            </div>
        </div>
    </div>

<!--...-->

    <!--JavaScript-->MyApp['product-details'] = function (params) {
        var viewModel = {
            id: params.id,
            name: ko.observable('')
        };
        $.getJSON('https://sampleservices.devexpress.com/api/Products/' + viewModel.id).done(function(data) {
            viewModel.name(data.ProductName);
        });
        return viewModel;
    };
    
####About View####

Leave the 'about' view that is added to the application template by default as is. In a company with the 'categories' view, the 'about' view will be available from the application's global navigation.

####Navigation View####

As the predefined Split layout does not include a widget for global navigation, add the 'navigation' view to the application, as it is described in the [Add Global Navigation Commands to a View](/Documentation/Tutorial/SPA_Framework/Add_Global_Navigation_Commands_to_a_View/) tutorial. This view contains the **List** widget whose items will display the commands created based on the [navigation](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#navigation) option of the **HtmlApplication** object. Make the 'navigation' view a start view in the application.

    <!--JavaScript-->window.MyApp = window.MyApp || {};
	$(function () {
		MyApp.app = new DevExpress.framework.html.HtmlApplication({ 
			namespace: MyApp,
			animationSet: DevExpress.framework.html.animationSets['default'],
			layoutSet: DevExpress.framework.html.layoutSets['split'],
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
		MyApp.app.router.register(":view", { view: "navigation" });
		MyApp.app.navigate();
	});


Now, if you run the application on a tablet device, you will see two panes on the screen. All the views will be displayed within the 'master' pane (to the left). In the next step, you will learn how to specify a required pane for a view.