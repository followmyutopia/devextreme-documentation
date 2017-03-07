<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->array | function(options) | DataSource configuration<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the data source to be used for the header filter.
<!--/shortDescription-->

<!--fullDescription-->
Assigning a function to this field enables you to calculate the header filter data source dynamically. Refer to the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) | [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) option for details.
 
The elements of the array assigned to this field should be in the following format.

	<!--JavaScript-->{
		text: /* A string to be displayed in the UI */
		value: /* A single value or filterExpression array */
	}

[note]Every unique value present in the current column should also be present in the data source for the header filter.

For example, you can implement the following header filtering conditions for a field containing dates.

	<!--JavaScript-->
    $(function(){
        var now = new Date();
        var startOfWeek = new Date(now.setDate(now.getDate() - now.getDay() - 1 + (now.getDay()==0?-6:1)));             
        var startOfDay = new Date(now.setHours(0,0,0,0));

        $("#gridContainer").dxDataGrid({
            // ...
            columns: [{
                // ...
                headerFilter: {
		            dataSource: {
			            load: function(loadOptions) {
				            return [{
					            text: 'Today',
					            value: [['OrderDate', '>=', startOfDay], 'and', ['OrderDate', '<=', now]]
				            }, {
					            text: 'This week',
					            value: [['OrderDate', '>=', startOfWeek], 'and', ['OrderDate', '<', startOfDay]]
				            }, {
					            text: 'Earlier',
					            value: ['OrderDate', '<', startOfWeek]
				            }];
			            }
		            }
	            }
            },
            // ...
            ]
        });
    });
    

<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Data source options.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->dataSource<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The header filter data source.
<!--/typeFunctionParamDescription1_field2-->
