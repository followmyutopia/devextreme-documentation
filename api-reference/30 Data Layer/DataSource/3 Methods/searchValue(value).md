===================================================================
===================================================================

<!--shortDescription-->
Sets the [searchValue](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchValue) option's value.
<!--/shortDescription-->

<!--paramName1-->value<!--/paramName1-->
<!--paramType1-->any<!--/paramType1-->
<!--paramDescription1-->
A new value.
<!--/paramDescription1-->

<!--fullDescription-->
Call the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method to update the widget bound to the **DataSource**:

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // DataSource is configured here
    });

    ds.searchExpr("firstName");
    ds.searchOperation("contains");
    ds.searchValue("Jo");

    ds.load();

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // DataSource is configured here
            });
            
            this.ds.searchExpr("firstName");
            this.ds.searchOperation("contains");
            this.ds.searchValue("Jo");

            this.ds.load();
        }
    }

---

#####See Also#####
- [Data Layer - Search API](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Search_Api)
<!--/fullDescription-->
