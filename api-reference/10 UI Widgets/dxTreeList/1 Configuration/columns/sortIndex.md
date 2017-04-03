<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the index according to which columns participate in sorting.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts an integer specifying the index of the column in a collection of columns with applied sorting. For example, consider the following data source that can provide data for three columns.

	<!--JavaScript-->var dataSource = [
		{ firstName: 'John', lastName: 'Doe', title: 'Sales Manager' },
		{ firstName: 'Michael', lastName: 'King', title: 'Sales Representative' },
		// ...
	];

To sort data first by the *"Last Name"* and then by the *"First Name"* column, use the following code. Note that the [sortOrder]({basewidgetpath}/Configuration/columns/#sortOrder) option should also be specified.
	
    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [
                { dataField: 'firstName', sortIndex: 1, sortOrder: 'asc' },
                { dataField: 'lastName', sortIndex: 0, sortOrder: 'asc' },
                // ...
            ]
        });
    });

You can set the **sortIndex** option at design-time to specify initial sorting, or change this option using the [columnOption]({basewidgetname}/Methods/#columnOptionid_optionName_optionValue) method to sort at runtime.
<!--/fullDescription-->

<!--handmade-->
<!--/handmade-->