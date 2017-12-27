===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->function(value1, value2)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom comparison function for sorting. Applies only when sorting is performed on the client.
<!--/shortDescription-->

<!--fullDescription-->
This function accepts two cell values and should return a number indicating their sort order:

- *Less than zero*     
*value1* goes before *value2*.
- *Zero*   
*value1* and *value2* remain unchanged relative to each other.
- *Greater than zero*   
*value1* goes after *value2*.

The string comparison is culture-insensitive by default. Use the following code to make it culture-sensitive:

---
#####jQuery 

    <!--JavaScript-->
    $(function () {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                dataField: "fieldName",
                sortingMethod: function (value1, value2) {
                    // Handling null values
                    if(!value1 && value2) return -1;
                    if(!value1 && !value2) return 0;
                    if(value1 && !value2) return 1;
                    // Determines whether two strings are equivalent in the current locale
                    return value1.localeCompare(value2);
                }
            }]
        });
    });

#####Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    // ...
    export class AppComponent {
        sortStringsConsideringCulture (value1, value2) {
            // Handling null values
            if(!value1 && value2) return -1;
            if(!value1 && !value2) return 0;
            if(value1 && !value2) return 1;
            // Determines whether two strings are equivalent in the current locale
            return value1.localeCompare(value2);
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column
            dataField="fieldName"
            [sortingMethod]="sortStringsConsideringCulture">
        </dxi-column>
    </dx-{widget-name}>

---

When implementing the **sortingMethod** function, you can access the [column's configuration](/Documentation/ApiReference/UI_Widgets/dx{WidgetName}/Configuration/columns/) using the **this** keyword.

[note]The **sortingMethod**'s *value1* and *value2* are the values returned from the [calculateSortValue](/Documentation/ApiReference/UI_Widgets/dx{WidgetName}/Configuration/columns/#calculateSortValue) function if the latter is specified.

<!--/fullDescription-->
<!--typeFunctionParamName1-->value1<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->any<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
A value to be compared.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->value2<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->any<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
A value to be compared. 
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->Number<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
Specifies whether *value1* goes before *value2*.
<!--/typeFunctionReturnDescription-->