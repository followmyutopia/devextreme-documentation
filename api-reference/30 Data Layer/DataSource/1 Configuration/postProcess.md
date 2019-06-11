<!--id-->DataSource.Options.postProcess<!--/id-->
===========================================================================
<!--type-->function(data)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a post processing function.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        postProcess: function (data) {
            // Your code goes here
        }
    });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                postProcess: (data) => {
                    // Your code goes here
                }
            });
        }
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .DataSourceOptions(dso => dso
            .PostProcess("dataSource_postProcess")
        )
    )

    <script type="text/javascript">
        function dataSource_postProcess (data) {
            // Your code goes here
        }
    </script>

---

#####See Also#####
- [Post Processing](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Post_Processing)
<!--/fullDescription-->
<!--typeFunctionParamName1-->data<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Array<any><!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The data loaded in the **DataSource**.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Array<any><!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The data after processing.
<!--/typeFunctionReturnDescription-->