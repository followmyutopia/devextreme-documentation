<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--merge--><!--/merge-->
===========================================================================

<!--fullDescription-->
This function accepts two cell values and should return a number indicating their sort order. The number can be:

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
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "fieldName",
                sortingMethod: function (value1, value2) {
                    // Determines whether two strings are equivalent in the current locale
                    return value1.localeCompare(value2);
                }
            }]
        });
    });

#####Angular

    <!--TypeScript-->
    export class AppComponent {
        sortStringsConsideringCulture (value1, value2) {
            // Determines whether two strings are equivalent in the current locale
            return value1.localeCompare(value2);
        }
    }


    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column
            dataField="fieldName"
            [sortingMethod]="sortStringsConsideringCulture">
        </dxi-column>
    </dx-tree-list>

---

When implementing the **sortingMethod** function, you can access the [column's configuration](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/) using the **this** keyword.

[note]The **sortingMethod**'s *value1* and *value2* are the values returned from the [calculateSortValue](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateSortValue) function if the latter is specified.
<!--/fullDescription-->

<!--handmade-->
<!--/handmade-->
