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
A handler for the **toolbarPreparing** event. Executed before the toolbar is created.
<!--/shortDescription-->

<!--fullDescription-->
This handler allows you to customize the toolbar. Depending on the configuration, the widget may add the following items to the toolbar:

- <img src="/Content/images/doc/17_2/DataGrid/icons/columnChooser.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Toolbar ColumnChooserButton" style="margin:1px; vertical-align:middle"/> - *"columnChooserButton"*    
- <img src="/Content/images/doc/17_2/DataGrid/icons/toolbar_add.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Toolbar AddButton" style="margin:1px; vertical-align:middle"/> - *"addRowButton"*    
- <img src="/Content/images/doc/17_2/DataGrid/icons/toolbar_save.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Toolbar SaveButton" style="margin:1px; vertical-align:middle"/> - *"saveButton"*   
- <img src="/Content/images/doc/17_2/DataGrid/icons/toolbar_revert.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Toolbar RevertButton" style="margin:1px; vertical-align:middle"/> - *"revertButton"*   
- <img src="/Content/images/doc/17_2/DataGrid/icons/toolbar_export.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Toolbar Exporting" style="margin:1px; vertical-align:middle"/> - *"exportButton"*     
- <img src="/Content/images/doc/17_2/DataGrid/icons/toolbar_applyFilter.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Toolbar ApplyFilterButton" style="margin:1px; vertical-align:middle"/> - *"applyFilterButton"*     
- [*"searchPanel"*]({basewidgetpath}/Configuration/searchPanel/)

The following code shows how you can customize the toolbar using this handler.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            onToolbarPreparing: function (e) {
                var toolbarItems = e.toolbarOptions.items;
                // Modifies an existing item
                toolbarItems.forEach(function(item) {
                    if (item.name === "saveButton") {
                        // Change the item options here
                    }
                });

                // Adds a new item
                toolbarItems.push({
                    widget: 'dxButton', 
                    options: { icon: 'user', onClick: function() { ... } },
                    location: 'after'
                });
            }
        });
    });

##### Angular

    <!--JavaScript-->
    export class AppComponent {
        onToolbarPreparing (e) { 
            var toolbarItems = e.toolbarOptions.items;
            // Modifies an existing item
            toolbarItems.forEach(function(item) {
                if (item.name === "saveButton") {
                    // Change the item options here
                }
            });
            
            // Adds a new item
            toolbarItems.push({
                widget: 'dxButton', 
                options: { icon: 'user', onClick: function () { ... } },
                location: 'after'
            });
        }
    }

    <!--HTML-->
    <dx-tree-list ...
        (onToolbarPreparing)="onToolbarPreparing($event)">
    </dx-tree-list>
    
---

<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->toolbarOptions<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxToolbar/Configuration/">options of the toolbar</a>. 
<!--/typeFunctionParamDescription1_field4-->

<!--handmade-->
<!--/handmade-->
