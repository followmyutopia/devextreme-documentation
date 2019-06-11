<!--id-->dxDataGrid.Options.rowTemplate<!--/id-->
===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for rows.
<!--/shortDescription-->

<!--fullDescription-->
[note]

Disable [column reordering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#allowColumnReordering), [grouping](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowGrouping), and [column fixing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnFixing/) when you specify the row template. Its content cannot automatically synchronize with the column layout, which makes these features inoperative.

You should also implement the following features manually: [editing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#editRowrowIndex), [adaptability](/Documentation/Guide/Widgets/DataGrid/Columns/Adaptability/), [multiple selection](/Documentation/Guide/Widgets/DataGrid/Selection/#API), and [master-detail interface](/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/#API). Follow the links to see the API that can help you with this task. 

[/note]

In AngularJS and Knockout, use the [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) and declare it within a `<table>` element. In other cases, declare the markup in a `<tbody>` element with the `dx-row` class.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("dataGridContainer").dxDataGrid({
            // ...
            rowTemplate: function(container, item) {
                var data = item.data,
                    markup = "<tbody class='dx-row'>" +
                        "<tr>" +
                            "<td>" + item.data.id + "</td>" +
                            "<td>" + item.data.name + "</td>" +  
                        "</tr>" +
                    "</tbody>";
                container.append(markup);
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...
        rowTemplate="rowTemplateName">
        <tbody class="dx-row" *dxTemplate="let item of 'rowTemplateName'" >
            <tr>
                <td>{{item.data.id}}</td>
                <td>{{item.data.name}}</td>
            </tr>
        </tbody>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

#####AngularJS

        <!--HTML--><div dx-data-grid="{
            ...
            rowTemplate: 'rowTemplateName'
        }" dx-item-alias="item">
            <table data-options="dxTemplate: { name: 'rowTemplateName' }" >
                <tr>
                    <td>{{item.data.id}}</td>
                    <td>{{item.data.name}}</td>
                </tr>
            </table>
        </div>

#####Knockout

        <!--HTML--><div data-bind="dxDataGrid: {
            ...
            rowTemplate: 'rowTemplateName'
        }">
            <table data-options="dxTemplate: { name: 'rowTemplateName' }" >
                <tr>
                    <td data-bind="text: data.id"></td>
                    <td data-bind="text: data.name"></td>
                </tr>
            </table>
        </div>

#####Vue

    <template>
        <dx-data-grid ...
            row-template="dataRowTemplate">
            <tbody
                slot="dataRowTemplate"
                slot-scope="{ data: { data: { id, name } } }"
                class="dx-row">
                <tr>
                    <td>{{id}}</td>
                    <td>{{name}}</td>
                </tr>
            </tbody>
        </dx-data-grid>
    </template>
    <script>
    import { DxDataGrid } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        }
    };
    </script>

#####React

    import React from 'react';
    import DataGrid from 'devextreme-react/data-grid';

    class Row extends React.PureComponent {
        render() {
            const { data: { id, name } } = this.props.data;
            return (
                <tbody className={"dx-row"}>
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                    </tr>
                </tbody>
            );
        }
    }

    class App extends React.Component {
        render() {
            return (
                <DataGrid ...
                    rowComponent={Row}>
                </DataGrid>
            );
        }
    }
    export default App;

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        // ...
        .RowTemplate(@<text>
            <tbody class="dx-row">
                <tr>
                    <td><%= data.id %></td>
                    <td><%= data.name %></td>
                </tr>
            </tbody>
        </text>)
    )

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/RowTemplate/jQuery/Light/"
}

You can also use a 3rd-party template engine to customize row appearance. See the [3rd-Party Template Engines](/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines) article for more information. Note that the `<tbody>` element that represents a row should have the `dx-row` class to ensure all widget features work properly.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Data_Grid/Row3RdPartyEngineTemplate/jQuery/Light/"
}

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
- [onRowPrepared](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowPrepared)
<!--/fullDescription-->
<!--typeFunctionParamName1-->rowElement<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxElement<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
#include common-ref-elementparam with { element: "row" }
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->rowInfo<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The [Row](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/) object extended by the **DataGrid**'s instance (the **component** field) and the column configuration (**columns**).
<!--/typeFunctionParamDescription2-->
