<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies descriptions for filter operations.
<!--/shortDescription-->

<!--fullDescription-->
When a user selects a filter operation, he or she uses the drop-down list of [available operations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterOperations) that appears by a click on the magnifying glass icon in a filter row cell. Each operation in this list is represented by an icon symbolizing this operation and a descriptive text. Filter operations have descriptive texts specified by default, but if you are not satisfied with them, you can adjust them as required using the **operationDescriptions** option. This option accepts an object, wherein filter operations are associated with their descriptions. For example, in the following code, the description of the *"startswith"* filter operation is set to *"Begins with"*.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		filterRow: {
			// ...
			operationDescriptions: {
				'startswith': 'Begins with'
			}
		}
	});

Note that if you do not have specified descriptions for all filter operations, the unspecified ones will have default descriptions.
<!--/fullDescription-->