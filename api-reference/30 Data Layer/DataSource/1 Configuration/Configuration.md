---
##### shortDescription
This section describes options that configure the **DataSource**.

---
[note]

The **DataSource** allows specifying [**CustomStore** options](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/) in its configuration object, as shown in the following code:

---
##### jQuery

    <!--JavaScript-->
    var infiniteList = new DevExpress.data.DataSource({
        load: function (loadOptions) {
            // Loading data objects
        },
        byKey: function (key) {
            // Retrieving a data object by key
        }
    });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        infiniteList: DataSource;
        constructor() {
            this.infiniteList = new DataSource({
                load: (loadOptions) => {
                    // Loading data objects
                },
                byKey: (key) => {
                    // Retrieving a data object by key
                }
            });
        }
    }

---

[/note]