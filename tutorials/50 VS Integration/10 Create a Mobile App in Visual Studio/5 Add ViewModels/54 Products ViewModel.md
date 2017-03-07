<article data-show="/Content/Applications/16_2/LearningCenter/Data-BoundApplication/step4-2/index.html">
 
- Similar to the "Categories" view, use the **dataSource** option for the **List** widget. Bind this option to the ViewModel's **dataSource** field here as well.
- Open the *products.js* file. It contains the **products** function. This function has the same name as the view's HTML template, and this function will be found and called when the "Products" view is displayed. The object that is returned by the **products** function is a ViewModel for the "Products" view.
- Assign a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object to the **dataSource** field. Create this object [using the ODataStore](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/From_Store) provided by the ODataContext object (see its description in the [Create an Application Project](/Documentation/Tutorial/VS_Integration/Create_a_Mobile_App_in_Visual_Studio/#Create_an_Application_Project) section). Specify the **pageSize** configuration option for the DataSource object to load 10 objects per page. In addition, specify the [filter](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) configuration option to load only Products of the Category that is passed as a parameter to this view.

        <!--JavaScript-->
        Application1.products = function (params) {
            var viewModel = {
                dataSource: new DevExpress.data.DataSource({
                    store: Application1.db.Products,
                    map: function (item) {
                        return new Application1.ProductViewModel(item);
                    },
                    pageSize: 10,
                    filter: ['CategoryID', '=', parseInt(params.id)]
                })
            };        
            return viewModel;
        };


- In the *products.dxview* file, bind the list item text to the **ProductName** field of the displayed Product object. In addition, specify *{ProductID}* as the second navigation parameter in the URI assigned to **dxAction**. In this instance, the **ProductID** field value of the clicked category will be passed to the "Products" view.
- Specify the **visible** option of the Search text box by binding it to the ViewModel's **showSearch** field. Make the **showSearch** field observable and set it to *false* by default. This makes the Search text box initially invisible, and provides the capability to make it visible by setting the **showSearch** field to *true* when required.
- Bind the Search command's **onExecute** option to the ViewModel's **find** function. In this function, change the text box visibility state and make the text box empty.
- Bind the Search text box **value** option to the **searchString** ViewModel field. Make this field observable and set an empty string to it by default. This field's value will change when the browser raises the 'search', 'change' or 'keyup' events. These events are specified as the text box **valueUpdateEvent** option value.
- Update the ViewModel's **searchString** field to which the text box value is bound with a 500 millisecond delay after an end user stops input. Then, set a [searchValue](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Search_Api) and call the **load** method for the DataSource object.
- To specify the field of the Product objects that will be used to search the required object, set the **searchExpr** configuration option of the DataSource object.

<!---->
  
    <!--HTML-->
    <div data-options="dxView : { name: 'products', title: 'Products' } " >
        <div data-options="dxContent : { targetPlaceholder: 'content' } " >
            <div data-bind="dxTextBox: { mode: 'search', value: searchString, visible: showSearch, valueChangeEvent: 'search change keyup' }"></div>
            <div data-bind="dxList: { dataSource: dataSource }">
                <div data-options="dxTemplate : { name: 'item' }" data-bind="dxAction: '#product_details/{ProductID}'">
                    <div data-bind="text: ProductName"></div>
                </div>
            </div>
        </div>
        <div data-bind="dxCommand: { id: 'search', title: 'Search', placeholder: 'Search...', icon: 'find', onExecute: find }" ></div>
    </div> 
  
<!---->

    <!--JavaScript-->
    Application1.products = function (params) {
        var viewModel = {
            searchString: ko.observable(''),
            find: function () {
                viewModel.showSearch(!viewModel.showSearch());
                viewModel.searchString('');
            },
            showSearch: ko.observable(false),
            dataSource: new DevExpress.data.DataSource({
                store: Application1.db.Products,
                map: function (item) {
                    return new Application1.ProductViewModel(item);
                },
                pageSize: 10,
                filter: ['CategoryID', '=', parseInt(params.id)],
                searchExpr: "ProductName"
            })
        };
        
        ko.computed(function () {
            return viewModel.searchString();
        }).extend({
            throttle: 500
        }).subscribe(function () {
            viewModel.dataSource.searchValue(viewModel.searchString());
            viewModel.dataSource.pageIndex(0);
            viewModel.dataSource.load();
        });        
        
        return viewModel;
    };

</article>