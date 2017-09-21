DevExtreme provides a markup component called [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) for Angular, AngularJS and Knockout apps. The following code shows how you can customize column cells using this component. Note that the template's [name](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/Configuration/#name) is assigned to the column's [cellTemplate](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#cellTemplate) option. 

---

##### Angular

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column dataField="Title" cellTemplate="cellTemplate"></dxi-column>
        <div *dxTemplate="let cell of 'cellTemplate'">
            <div style="color:blue">{{ cell.text }}</div>
        </div>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule, DxTemplateModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule,
            DxTemplateModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-tree-list="{
            ...
            columns: [{
                dataField: 'Title',
                cellTemplate: 'cellTemplate'
            }]
        }" dx-item-alias="cell">
            <div data-options="dxTemplate: { name: 'cellTemplate' }">
                <div style="color:blue">{{ cell.text }}</div>
            </div>
        </div>
    </div>

[note] The `dx-item-alias` directive specifies the variable used to access cell settings.

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)

    <!--HTML-->
    <div data-bind="dxTreeList: {
        ...
        columns: [{
            dataField: 'Title',
            cellTemplate: 'cellTemplate'
        }]
    }">
        <div data-options="dxTemplate: { name: 'cellTemplate' }">
            <div style="color:blue" data-bind="text: $data.text"></div>
        </div>
    </div>

---

If you use jQuery alone, combine the HTML markup for cells using jQuery [DOM manipulation methods](http://api.jquery.com/category/manipulation/). To apply this markup, use the **cellTemplate** function as shown in the following code:

[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "Title",
                cellTemplate: function(element, info) {
                     element.append("<div>" + info.text + "</div>")
                            .css("color", "blue");
                }
            }]
        });
    });

While **cellTemplate** customizes data cells only, the [onCellPrepared](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onCellPrepared) function can customize any cell. Unlike **cellTemplate**, this function does customizations after a cell is created, so you cannot use it to change the cell value. Check the [rowType](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType) field of the function's argument to detect the UI element that owns the cell.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            onCellPrepared: function(e) {
                if (e.rowType == "detailAdaptive") {
                    e.cellElement.addClass("adaptiveRowStyle"); 
                }
            }
        });
    });

    <!--CSS-->
    .adaptiveRowStyle { 
        background-color: #cce6ff;
        font-size: 12pt
    }

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onCellPrepared (e) {
            if (e.rowType == "detailAdaptive") {
                e.cellElement.addClass("adaptiveRowStyle");
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list
        (onCellPrepared)="onCellPrepared($event)">
    </dx-tree-list>

    <!--CSS-->
    .adaptiveRowStyle { 
        background-color: #cce6ff;
        font-size: 12pt
    }
    
---

#####See Also#####
- [Customize Column Headers](/Documentation/Guide/Widgets/TreeList/Columns/Customize_Column_Headers/)
