<article data-show="/Content/Applications/117_2LearningCenter/Data-BoundApplication/step4-1/index.html">
  
- To provide data for the list items using a data service, change the use of the **items** option to the [dataSource](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#dataSource) option in the **dxList** configuration object. Bind the **dataSource** option to the **dataSource** field of the ViewModel object.
- Open the *categories.js* file. It contains the **categories** function. This function has the same name as the view's HTML template, so this function will be found and called when the "Categories" view is displayed. The object that is returned by the **categories** function is a ViewModel for the "Categories" view.
- Assign a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object to the **dataSource** field. Create this object [using the ODataStore](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/From_Store) provided by the ODataContext object (see its description in the [Create an Application Project](/Documentation/Tutorial/VS_Integration/Create_a_Mobile_App_in_Visual_Studio/#Create_an_Application_Project) section).
- In the *categories.dxview* file, bind the list item text to the **CategoryName** field of the presented Category object. In addition, specify *{CategoryID}* as the second navigation parameter in the URI assigned to **dxAction**. In this instance, the **CategoryID** field value of the clicked category will be passed to the "Products" view. 

<!---->

    <!--HTML--><!-- Changes in the Categories View -->
    <div data-bind="dxList: { dataSource: dataSource }">
        <div data-options="dxTemplate : { name: 'item' }" data-bind="dxAction: '#products/{CategoryID}'">
            <div data-bind="text: CategoryName"></div>
        </div>
    </div>
 
<!---->

    <!--JavaScript-->Application1.categories = function (params) {
        var viewModel = {
            dataSource: new DevExpress.data.DataSource({
                store: Application1.db.Categories,
                map: function(item) {
                    return new Application1.CategoryViewModel(item);
                }
            })
        };
        return viewModel;
    };

</article>