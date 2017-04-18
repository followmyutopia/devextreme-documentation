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
Specifies a data source for the header filter.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following.

- **Array of Objects**      
A simple JavaScript array containing a collection of plain objects. All elements of this array should have the following format.

        <!--JavaScript-->{
            text: /* A string to be displayed in the UI */
            value: /* A single value or filterExpression array */
        }

- [**DataSource Configuration Object**](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/)         
A configuration object of the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). Learn more about the **DataSource** and the DevExtreme Data Layer concept from the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/) topic.

- **Function**      
A function enables you to switch data sources based on a condition. It must return either an array of objects or a **DataSource** configuration object.

As an example, see the following code, which implements the data source for the header filter in a column that contains dates. Here, the data source is a **DataSource** configuration object.

    <!--JavaScript-->
    $(function() {
        var now = new Date();
        var startOfWeek = new Date(now.setDate(now.getDate() - now.getDay() - 1 + (now.getDay()==0?-6:1)));             
        var startOfDay = new Date(now.setHours(0,0,0,0));

        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                // ...
                headerFilter: {
                    dataSource: {
                        load: function() {
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

[note]Every unique value present in a column should also be present in the data source for its header filter.
<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Data source options.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="/Documentation/17_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->dataSource<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The data source of the header filter.
<!--/typeFunctionParamDescription1_field2-->

<!--handmade-->
<!--/handmade-->