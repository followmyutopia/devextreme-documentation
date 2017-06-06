<article data-show="/Content/Applications/17_2/LearningCenter/Data-BoundApplication/step3-2/index.html">

Add a Search button to the "Products" view to search for a product using a combination of letters.

- Open the *products.dxview* file. Press **Add command** on the strip at the bottom of the view's simulator; this will invoke the **Add Command** dialog. Specify "search" as the identifier of the command. In addition, add the "Search" command to the required command containers of the layouts in which the view will be displayed. For this purpose, set the command mapping properties as they are set in the image below.

    ![Add View Dialog](Content/images/doc/17_2/DevExtreme/Tutorial_AddCommandDialog.png)
  
    To learn about the layouts used for views within the "Navbar" layout set, refer to the [Ready-to-Use Layout Sets](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Ready-to-Use_Layout_Sets) topic. To learn about the command containers that are contained in the built-in layouts, refer to the [Built-in Layouts](/Documentation/Guide/SPA_Framework/Built-in_Layouts/) topic.

    Press **OK**. A **div** element will be added to the root of the view's markup. This element will contain the **data-bind** attribute set to [dxCommand](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/). Specify the following fields of the command's configuration object.

    - **icon**  
    Use the "find" icon from the [built-in icon library](/Documentation/Guide/Themes/Icon_Library/).
    - **onExecute**  
    Assign *unspecified* to the [onExecute](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/#onExecute) field. Implement a function for this field when you have data bound to the application.
    
            <!--HTML--><div data-bind="dxCommand: { id: 'search', title: 'Search', icon: 'find', onExecute: undefined }" ></div>
    
    Check that command mapping settings specified in the **Add Command** dialog are set as the [command mapping](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#commandMapping) option of the **htmlApplication** object. See the *index.js* and *application1.config.js* files in the Mobile and Desktop projects.
    
- Add a textbox for search input using the [TextBox](/Documentation/ApiReference/UI_Widgets/dxTextBox/) widget. To add the **dxTextbox** widget, drag the **TextBox** item from the Toolbox to the view in the simulator. A **div** element with the **data-bind** attribute set to **TextBox** will be added. To configure the widget, specify options within the configuration object.

        <!--HTML--><div data-options="dxView : { name: 'products', title: 'Products' } " >
            <div data-bind="dxCommand: { id: 'search', title: 'Search', icon: 'find', onExecute: undefined }" ></div>
            <div data-options="dxContent : { targetPlaceholder: 'content' } " >
                <div data-bind="dxTextBox: { mode: 'search', value: ''}"></div>
                <div data-bind="dxList: { items: [
                        { id: 1, name: 'Whiskey', category_id: 1 },
                        { id: 2, name: 'Cognac', category_id: 1 },
                        { id: 3, name: 'Banana', category_id: 2 },
                        { id: 4, name: 'Pineapple', category_id: 2 }
                    ] }">
                    <div data-options="dxTemplate : { name: 'item' }" data-bind="dxAction: '#product_details/1'">
                        <div data-bind="text: name"></div>
                    </div>
                </div>
            </div>
        </div>

        
</article>