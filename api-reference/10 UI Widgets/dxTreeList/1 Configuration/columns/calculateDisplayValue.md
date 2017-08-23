<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--merge--><!--/merge-->
===========================================================================

<!--fullDescription-->
This option accepts the name of the [data source field]({basewidgetpath}/Configuration/#dataSource) that provides display values...

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            columns: [{
                dataField: "countryID", // provides values for editing
                calculateDisplayValue: "country" // provides display values
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column
            dataField="countryID" <!-- provides values for editing -->
            calculateDisplayValue="country"> <!-- provides display values -->
        </dxi-column>
    </dx-tree-list>

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().TreeList()
        .Columns(columns => columns.Add()
            .DataField("CountryID")
            .CalculateDisplayValue("Country")
        )
    )
    
    <!--Razor VB-->
    @(Html.DevExtreme().TreeList() _
        .Columns(Sub(columns)
            columns.Add() _
                .DataField("CountryID") _
                .CalculateDisplayValue("Country")
        End Sub)        
    )

---

... or a function that combines display values.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
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
    <dx-tree-list ... >
        <dxi-column
            dataField="countryID" <!-- provides values for editing -->
            [calculateDisplayValue]="getCountryWithCapital"> <!-- combines display values -->
        </dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    export class AppComponent {
        getCountryWithCapital (rowData) {
            return rowData.capital + " (" + rowData.country + ")";
        }
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().TreeList()
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
    @(Html.DevExtreme().TreeList() _
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

[note]Do not use this option to format text in the cells. Use [customizeText]({basewidgetpath}/Configuration/columns/#customizeText) for this.

#####See Also#####
- **columns[]**.[calculateCellValue]({basewidgetpath}/Configuration/columns/#calculateCellValue)
<!--/fullDescription-->

<!--handmade-->
<!--/handmade-->