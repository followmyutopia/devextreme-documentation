<article data-show="/Content/Applications/16_2/LearningCenter/Data-BoundApplication/step1-1/index.html">

Implement an HTML template for the "Categories" view.

- Right-click the **views** folder of the **Shared** project in the Solution Explorer and choose **Add** | **NewItem...** in the context menu, which will invoke the **Add New Item** dialog. Within this dialog, choose the **View** template, specify "categories" as a name and press **Add**.

  ![Add View Dialog](Content/images/doc/16_2/DevExtreme/Tutorial_AddViewDialog.png)
  
- In the invoked wizard, choose **Create an empty view**, because it is better now to implement a view manually so that you can then generate a view and modify it correctly. 

  ![View Creation Wizard](Content/images/doc/16_2/DevExtreme/Tutorial_AddViewWizard.png)

- As a result, you will get automatically generated *categories.dxview* and *categories.js* code files. Register these files within the application page - in the *index.html* file of the **Desktop** and **Mobile** projects.

        <!--HTML--><link rel="dx-template" type="text/html" href="views/categories.dxview"/>
        <script type="text/javascript" src="views/categories.js"></script>
  
- Open the *categories.dxview* file. The [View Designer](/Documentation/Guide/VS_Integration/Design-Time_Features/) will be invoked. In the simulator to the left, select view elements and remove them.

    [note]To see a view from the Shared project in the Designer's simulator, select another project to show the view in its context. For this purpose, use a corresponding combobox in the [Device Settings Toolbar](/Documentation/Guide/VS_Integration/Design-Time_Features/#Set_Device_Settings).

- Add the [List](/Documentation/ApiReference/UI_Widgets/dxList/) widget. To do this, drag the **List** item from the Toolbox to the view in the simulator. In the corresponding HTML code, you will see that this widget is added using **List** Knockout binding.
- To add test data to the list, change the use of the **dataSource** configuration option of the **List** widget to the **items** option.
- Define a template for the list items so that they have the same configuration and behavior. To do this, add a **div** element with the **data-options** attribute set to [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) and set the **name** configuration option to "item". Use **text** binding to display the list item name.

Here is the code you will get.

    <!--HTML--><div data-options="dxView : { name: 'categories', title: 'Categories' } " >
        <div data-options="dxContent : { targetPlaceholder: 'content' } " >
            <div data-bind="dxList: { items: [
	                  { id: 1, name: 'Beverages' },
	                  { id: 2, name: 'Fruit' }
                ] }">
                <div data-options="dxTemplate : { name: 'item' } ">
                    <div data-bind="text: name" ></div>
                </div>
            </div>
        </div>
    </div>

The simulator to the left displays a message in the top yellow area: "Design view is out of sync with the Source view. Click here to synchronize the views." Click this area. The simulator will display the view defined in the code.

![Categories List View](Content/images/doc/16_2/DevExtreme/Tutorial_CategoriesListView.png)

As you can see, the view's markup is placed to the "content" placeholder of the layout in which this view will be displayed. As a result, the view's HTML template is combined with the layout's HTML markup and the style sheets are applied to the HTML elements (including the **List** widget). This forms a so-called View from the MVVM (Model-View-ViewModel) pattern. The ViewModel for the "Categories" view will be described below. The Model is already generated as an ODataStore instance that provides access to the "Categories" entity of the OData service used in this application.

[note]The "Categories" view will not appear in the application's navigation automatically. You will see how to configure the application's global navigation below in this tutorial.
</article>