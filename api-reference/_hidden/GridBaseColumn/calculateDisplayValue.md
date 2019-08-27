---
id: GridBaseColumn.calculateDisplayValue
type: String | function(rowData)
---
---
##### shortDescription
Calculates custom display values for column cells. Requires specifying the [dataField]({basewidgetpath}/Configuration/columns/#dataField) or [calculateCellValue]({basewidgetpath}/Configuration/columns/#calculateCellValue) option. Used in [lookup optimization](/Documentation/Guide/Widgets/DataGrid/Enhance_Performance_on_Large_Datasets/#Lookup_Optimization).

##### param(rowData): Object
The data of the row to which the cell belongs.

##### return: any
The value for the cell to display.

---
This option accepts the name of the [data source field]({basewidgetpath}/Configuration/#dataSource) that provides display values...

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            columns: [{
                dataField: "countryID", // provides values for editing
                calculateDisplayValue: "country" // provides display values
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column
            dataField="countryID" <!-- provides values for editing -->
            calculateDisplayValue="country"> <!-- provides display values -->
        </dxi-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().{WidgetName}()
        .Columns(columns => columns.Add()
            .DataField("CountryID")
            .CalculateDisplayValue("Country")
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().{WidgetName}() _
        .Columns(Sub(columns)
            columns.Add() _
                .DataField("CountryID") _
                .CalculateDisplayValue("Country")
        End Sub)        
    )

---

... or a function that combines display values. Specify this function only if all data processing operations are [executed on the client]({basewidgetpath}/Configuration/remoteOperations/).

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            columns: [{
                dataField: "countryID", // provides values for editing
                calculateDisplayValue: function (rowData) { // combines display values
                    return rowData.capital + " (" + rowData.country + ")";
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column
            dataField="countryID" <!-- provides values for editing -->
            [calculateDisplayValue]="getCountryWithCapital"> <!-- combines display values -->
        </dxi-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        getCountryWithCapital(rowData) {
            return rowData.capital + " (" + rowData.country + ")";
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().{WidgetName}()
        .Columns(columns => columns.Add()
            .DataField("CountryID")
            .CalculateDisplayValue(new JS("getCountryWithCapital"))
        )
    )

    <script>
        function getCountryWithCapital(rowData) {
            return rowData.capital + " (" + rowData.country + ")";
        }        
    </script>

    <!--Razor VB-->
    @(Html.DevExtreme().{WidgetName}() _
        .Columns(Sub(columns)
            columns.Add() _
                .DataField("CountryID") _
                .CalculateDisplayValue(New JS("getCountryWithCapital"))
        End Sub)        
    )

    <script>
        function getCountryWithCapital(rowData) {
            return rowData.capital + " (" + rowData.country + ")";
        }        
    </script>    
    
---

The widget uses the specified display values in [sorting](/Documentation/Guide/Widgets/{WidgetName}/Sorting/), [searching](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Search_Panel), and [grouping](/Documentation/Guide/Widgets/DataGrid/Grouping/) (in case of **DataGrid**).

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}

Do not use this option to format text in cells. Instead, use the [format]({basewidgetpath}/Configuration/columns/#format), [customizeText]({basewidgetpath}/Configuration/columns/#customizeText), or [cellTemplate]({basewidgetpath}/Configuration/columns/#cellTemplate) option.