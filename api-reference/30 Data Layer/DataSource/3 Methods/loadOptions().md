===================================================================
===================================================================

<!--shortDescription-->
Gets an object with current data processing settings.
<!--/shortDescription-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
[Data processing settings](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/).
<!--/returnDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // DataSource is configured here
    });

    var loadOptions = ds.loadOptions();

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
            let loadOptions = this.ds.loadOptions();
        }
    }

---
<!--/fullDescription-->