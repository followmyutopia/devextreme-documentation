<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Array | function(options) | DataSource_Options<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a data source for the header filter.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following values:

- **Array of Objects**      
A simple JavaScript array containing a collection of plain objects. 

    ---
    #####jQuery

        <!--JavaScript-->
        $(function () {
            $("#dataGridContainer").dxDataGrid({
                headerFilter: {
                    dataSource: [{
                        text: "Zero",    // A string to be displayed in the UI
                        value: 0         // A single value  
                    },{
                        text: "Less than $3000",
                        value: ["SaleAmount", "<", 3000]    // A filterExpression array
                    }, 
                    // ...
                    ]
                }
            })
        });

    ##### Angular

        <!--TypeScript-->
        import { DxDataGridModule } from 'devextreme-angular';
        // ...
        export class AppComponent {
            headerFilterData: any;
            constructor () {
                this.headerFilterData = [{
                    text: "Zero",    // A string to be displayed in the UI
                    value: 0         // A single value  
                },{
                    text: "Less than $3000",
                    value: ["SaleAmount", "<", 3000]    // A filterExpression array
                }, 
                // ...
                ];
            }
        }
        @NgModule({
            imports: [
                // ...
                DxDataGridModule
            ],
            // ...
        })

        <!--HTML--><dx-data-grid ...>
            <dxi-column>
                <dxo-header-filter [dataSource]="headerFilterData"></dxo-header-filter>
            </dxi-column>
        </dx-data-grid>

    ---

- [**DataSource Configuration Object**](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/)         
A [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) configuration object. Learn more about the **DataSource** and the DevExtreme Data Layer concept from the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/) topic.

    ---
    ##### jQuery

        <!--JavaScript-->
        $(function() {
            var now = new Date();
            var startOfWeek = new Date(now.setDate(now.getDate() - now.getDay() - 1 + (now.getDay()==0?-6:1)));             
            var startOfDay = new Date(now.setHours(0,0,0,0));
            $("#dataGridContainer").dxDataGrid({
                // ...
                columns: [{
                    // ...
                    headerFilter: {
                        dataSource: {
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
                        }
                    }
                },
                // ...
                ]
            });
        });

    ##### Angular

        <!--TypeScript-->
        import { DxDataGridModule } from 'devextreme-angular';
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
        @NgModule({
            imports: [
                // ...
                DxDataGridModule
            ],
            // ...
        })

        <!--HTML--><dx-data-grid ...>
            <dxi-column>
                <dxo-header-filter [dataSource]="headerFilterData"></dxo-header-filter>
            </dxi-column>
        </dx-data-grid>

    ---

- **Function**      
A function in which you can modify the current data source configuration.

    ---
    #####jQuery

        <!--JavaScript-->
        $(function () {
            $("#dataGridContainer").dxDataGrid({
                headerFilter: {
                    dataSource: function (data) {
                        data.dataSource.postProcess = function (results) {
                            results.push({
                                text: "Weekends",
                                value: [
                                    [getOrderDay, "=", 0],
                                        "or",
                                    [getOrderDay, "=", 6]
                                ]
                            });
                            return results;
                        };
                    }
                }
            })
        });

    #####Angular

        <!--TypeScript-->
        import { DxDataGridModule } from 'devextreme-angular';
        import 'devextreme/data/data_source';
        // ...
        export class AppComponent {
            headerFilterData: any;
            constructor () {
                this.headerFilterData = this.headerFilterData.bind(this);
            }
            headerFilterData(data) {
                data.dataSource.postProcess = (results) => {
                    results.push({
                        text: "Weekends",
                        value: [
                            [this.getOrderDay, "=", 0], 
                                "or", 
                            [this.getOrderDay, "=", 6]
                        ]
                    });
                    return results;
                };
            }
        }
        @NgModule({
            imports: [
                // ...
                DxDataGridModule
            ],
            // ...
        })

        <!--HTML--><dx-data-grid ...>
            <dxi-column>
                <dxo-header-filter [dataSource]="headerFilterData"></dxo-header-filter>
            </dxi-column>
        </dx-data-grid>

    ---

[note]Every unique value in a column should also be present in the data source for its header filter.

If you use a data source that does not contain the required fields (**text** and **value**), you can use the DataSource object's [map](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map) option to cast the initial data array to the required structure. If the initial array includes key fields, all these fields, as well as the **text** and **value** fields should be present in the resulting array.

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        var categoriesStore = new DevExpress.data.ArrayStore({
            data: [
                { categoryName: "...", categoryId: "1", categoryCode: "..." },
                // ...
            ],
            key: ["categoryId", "categoryCode"]
        });

        $("#gridContainer").dxDataGrid({
            // ...
            columns: [{
                // ...
                headerFilter: {
                    dataSource: new DevExpress.data.DataSource({
                        store: categoriesStore,
                        map: function (item) {
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
    import { DxDataGridModule } from 'devextreme-angular';
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
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML--><dx-data-grid ...>
        <dxi-column>
            <dxo-header-filter [dataSource]="headerFilterData"></dxo-header-filter>
        </dxi-column>
    </dx-data-grid>

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
The [widget's instance]({basewidgetpath}/Methods/#instance).
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->dataSource<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The header filter's data source.
<!--/typeFunctionParamDescription1_field2-->
