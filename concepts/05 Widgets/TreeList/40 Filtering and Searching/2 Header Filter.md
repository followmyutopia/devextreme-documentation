A header filter allows a user to filter values in an individual column by including or excluding them from the applied filter. A click on a header filter icon invokes a popup menu with all unique values in the column. By selecting or clearing the selection of values in this menu, the user includes or excludes them from the filter.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular TreeList Filtering HeaderFilter](/Content/images/doc/17_2/treelist/visual_elements/header_filter.png)

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/UsingHeaderFilter/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

To make header filter icons visible for all columns, assign **true** to the [headerFilter](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/headerFilter/).**visible** option. Set a column's [allowHeaderFiltering](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#allowHeaderFiltering) option to **false** if its header filter should not be available. Note that this option inherits the value of the [allowFiltering](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#allowFiltering) option by default.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            headerFilter: { visible: true },
            columns: [{
                // ...
                allowHeaderFiltering: false
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-header-filter [visible]="true"></dxo-header-filter>
        <dxi-column [allowHeaderFiltering]="false" ... ></dxi-column>
    </dx-tree-list>
    
---

A user can change the applied filter by including or excluding values to/from it. Use a column's [filterType](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#filterType) option to specify the required mode.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            columns: [{
                // ...
                filterType: "exclude" // or "include"
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column ...
            [filterType]="exclude"> <!-- or "include" -->
        </dxi-column>
    </dx-tree-list>
    
---

A header filter's popup menu simply lists all column values by default. You can group them using the **headerFilter**.[groupInterval](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/headerFilter/#groupInterval) option if they are numbers or dates. You can also provide a completely custom data source for a header filter using the [dataSource](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/headerFilter/#dataSource) option. Refer to the option's description for details.

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering)