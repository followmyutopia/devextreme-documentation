<!--id-->DataSource.Options.map<!--/id-->
===========================================================================
<!--type-->function(dataItem)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies an item mapping function.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        store: {
            data: [{
                firstName: "John",
                lastName: "Smith"
            }]
        },
        map: function (dataItem) {
            return {
                fullName: dataItem.firstName + " " + dataItem.lastName
            }
        }
    });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    import ArrayStore from "devextreme/data/array_store";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                store: new ArrayStore({
                    data: [{
                        firstName: "John",
                        lastName: "Smith"
                    }]
                }),
                map: (dataItem) => {
                    return {
                        fullName: dataItem.firstName + " " + dataItem.lastName
                    }
                }
            });
        }
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .DataSource(new [] {
            new {
                firstName = "John",
                lastName = "Smith"
            }
        })
        .DataSourceOptions(dso => dso
            .Map("dataSource_map")
        )
    )

    <script type="text/javascript">
        function dataSource_map (dataItem) {
            return {
                fullName: dataItem.firstName + " " + dataItem.lastName
            }
        }
    </script>

---

#####See Also#####
- [Item Mapping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Item_Mapping)
<!--/fullDescription-->
<!--typeFunctionParamName1-->dataItem<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
An initial data item.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Object<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A modified data item.
<!--/typeFunctionReturnDescription-->