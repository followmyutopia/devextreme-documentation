---
id: DataSource.Options.select
type: Select expression
---
---
##### shortDescription
Specifies the fields to select from data objects.

---
This option accepts one of the following:

- **String**        
A field name to select.

- **Array of strings**         
Several field names to select.

- **Function**      
A function implementing custom selection logic.

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        select: ["firstName", "lastName", "birthDate"] 
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
                select: ["firstName", "lastName", "birthDate"] 
            });
        }
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .DataSourceOptions(dso => dso
            .Select("firstName", "lastName", "birthDate")
        )
    )

---

#####See Also#####
- [Select Expressions](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Select_Expressions)