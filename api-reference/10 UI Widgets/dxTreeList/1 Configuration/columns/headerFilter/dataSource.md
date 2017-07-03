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

---
##### jQuery

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

##### Angular

    <!--TypeScript-->
    import 'devextreme/data/custom_store';
    // ...
    export class AppComponent {
        headerFilterData: any = {};
        constructor () {
            var now = new Date();
            var startOfWeek = new Date(now.setDate(now.getDate() - now.getDay() - 1 + (now.getDay()==0?-6:1)));             
            var startOfDay = new Date(now.setHours(0,0,0,0));
            this.headerFilterData = {
                load: function () {
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
            };
        }
    }

    <!--HTML--><dx-tree-list ...>
        <dxi-column>
            <dxo-header-filter [dataSource]="headerFilterData"></dxo-header-filter>
        </dxi-column>
    </dx-tree-list>

---

[note]Every unique value present in a column should also be present in the data source for its header filter.

If you use a data source that does not contain the required fields (**text** and **value**), you can use the map option of the DataSource object to cast the initial data array to the required structure. If the initial array includes key fields, all these fields as well as the **text** and **value** fields should be present in the resulting array.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var categoriesStore = new DevExpress.data.ArrayStore({
            data: [
                { categoryName: "...", categoryId: "1", categoryCode: "..." },
                // ...
            ],
            key: ["categoryId", "categoryCode"]
        });

        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                // ...
                headerFilter: {
                    dataSource: new DevExpress.data.DataSource({
                        store: categoriesStore,
                        map: function(item) {
                            return {
                                text: item.categoryName,
                                value: item.categoryId,
                                categoryId: item.categoryId,
                                categoryCode: item.categoryCode
                            }
                        }
                    })
                }
            },
            // ...
            ]
        });
    });

##### Angular

    <!--TypeScript-->
    import ArrayStore from 'devextreme/data/array_store';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        headerFilterData: any = {};
        constructor () {
            let categoriesStore = new ArrayStore({
                data: [
                    { categoryName: "...", categoryId: "1", categoryCode: "..." },
                    // ...
                ],
                key: ["categoryId", "categoryCode"]
            });

            this.headerFilterData = new DataSource({
                store: categoriesStore,
                map: function (item) {
                    return {
                        text: item.categoryName,
                        value: item.categoryId,
                        categoryId: item.categoryId,
                        categoryCode: item.categoryCode
                    }
                }
            });
        }
    }

    <!--HTML--><dx-tree-list ...>
        <dxi-column>
            <dxo-header-filter [dataSource]="headerFilterData"></dxo-header-filter>
        </dxi-column>
    </dx-tree-list>

---

<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Data source options.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->dataSource<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The data source of the header filter.
<!--/typeFunctionParamDescription1_field2-->

<!--handmade-->
<!--/handmade-->
