---
id: DataSource.Options.store
type: Store | Store_Options | Array<any> | any
---
---
##### shortDescription
Configures the store underlying the **DataSource**.

---
This option accepts one of the following:

* **Store instance**            
An [ArrayStore](/Documentation/ApiReference/Data_Layer/ArrayStore/), [LocalStore](/Documentation/ApiReference/Data_Layer/LocalStore/), [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/), or [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) instance.

* **Store configuration object**        
An **ArrayStore**, **LocalStore**, or **ODataStore** configuration object. Make sure to set the [type](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/#type) option.

* **Array**         
Assigning an array to the **store** option automatically creates an **ArrayStore** in the **DataSource**.

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        store: new DevExpress.data.ArrayStore({
            // ArrayStore instance
        })
        // ===== or =====
        store: {
            type: "array",
            // ArrayStore configuration object
        }
        // ===== or =====
        store: [
            { id: 1, name: "John Doe" }
        ]
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
                    // ArrayStore instance
                })
                // ===== or =====
                store: {
                    type: "array",
                    // ArrayStore configuration object
                }
                // ===== or =====
                store: [
                    { id: 1, name: "John Doe" }
                ]
            });
        }
    }
    
---