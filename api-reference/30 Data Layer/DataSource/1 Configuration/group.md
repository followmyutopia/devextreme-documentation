===========================================================================
<!--type-->Group expression<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies data grouping options.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following:

- **String**        
The field name to group by.

- **Object**        
An object with the following fields:

    * **selector**: String    
    The field name to group by.
    * **desc**: Boolean     
    Sorts the **selector** field in descending order.

- **Array**         
An array of strings and objects described above.

- **Function**      
A function implementing custom grouping logic.

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        group: { selector: "employeeID", desc: true }
    });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // ...
                group: { selector: "employeeID", desc: true }
            });
        }
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .DataSourceOptions(dso => dso
            .Group("employeeID", true)
        )
    )

---

#####See Also#####
- [Grouping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping)
<!--/fullDescription-->