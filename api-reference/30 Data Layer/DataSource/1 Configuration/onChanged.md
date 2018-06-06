<!--EventForAction-->..\4 Events\changed.md<!--/EventForAction-->
===========================================================================
<!--type-->function()<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed after data is successfully loaded.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        onChanged: function () {
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
                onChanged: () => {
                    // Your code goes here
                }
            });
        }
    }

---
<!--/fullDescription-->