<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\toolbarPreparing.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [toolbarPreparing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#toolbarPreparing) event.
<!--/shortDescription-->

<!--fullDescription-->
The **toolbarPreparing** event fires before the toolbar is created. This allows you to customize its options. For this purpose, use the object passed to the handling function as a parameter. Among the fields of this object, you can find data related to the toolbar options. 

By default, the widget has the following toolbar items.

- <img src="/Content/images/doc/16_2/DataGrid/icons/columnChooser.png" alt="DataGrid Toolbar Column Chooser Button" style="margin:1px; vertical-align:middle"/> - columnChooserButton    
- <img src="/Content/images/doc/16_2/DataGrid/icons/toolbar_add.png" alt="DataGrid Toolbar Add Button" style="margin:1px; vertical-align:middle"/> - addRowButton    
- <img src="/Content/images/doc/16_2/DataGrid/icons/toolbar_save.png" alt="DataGrid Toolbar Save Button" style="margin:1px; vertical-align:middle"/> - saveButton   
- <img src="/Content/images/doc/16_2/DataGrid/icons/toolbar_revert.png" alt="DataGrid Toolbar Revert Button" style="margin:1px; vertical-align:middle"/> - revertButton   
- <img src="/Content/images/doc/16_2/DataGrid/icons/toolbar_export.png" alt="DevExtreme DataGrid HTML5 Toolbar Exporting" style="margin:1px; vertical-align:middle"/> - exportButton     
- <img src="/Content/images/doc/16_2/DataGrid/icons/toolbar_applyFilter.png" alt="DataGrid Toolbar Apply Filter Button" style="margin:1px; vertical-align:middle"/> - applyFilterButton     
- [groupPanel](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Group_Panel)  
- [searchPanel](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Search_Panel)  

Items availability depends on the **DataGrid** configuration.

<!---->

    <!--JavaScript-->
    $(function() {
        $("#gridContainer").dxDataGrid({
            // . . .
            onToolbarPreparing: function (e) {
                var toolbarItems = e.toolbarOptions.items;
                // Modifies an existing item
                $.each(toolbarItems, function(_, item) {
                    if(item.name === "saveButton") {
                        // Change the item options here
                    }
                }); 

                // Adds a new item
                toolbarItems.push({
                    widget: 'dxButton', 
                    options: { icon: 'user', onClick: function(){ ... } },
                    location: 'after' });
            }
        });
    });

<a href=" https://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-templates-toolbar_customization" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a> 
<a href="https://www.youtube.com/watch?v=oWWL6iILMPM&index=1&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&t=3s" class="button orange small fix-width-155" target="_blank">Watch Video</a>

<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Data that is available for binding against the element. Available only in the Knockout approach.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->toolbarOptions<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
An object containing <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxToolbar/Configuration/">options of the toolbar</a>. 
<!--/typeFunctionParamDescription1_field4-->
