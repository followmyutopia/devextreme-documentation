---
id: Store.totalCount(options)
---
---
##### shortDescription
Gets the total count of items the [load()]({basewidgetpath}/Methods/#load) function returns.

##### return: Promise<Number>
A Promise that is resolved after the total item count is obtained. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(obj): Object
Filtering and grouping options.

##### field(obj.filter): Object
A filtering expression; described in the [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) section.

##### field(obj.group): Object
A grouping expression; described in the [Grouping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping) section.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        // {WidgetName} is configured here
    });

    store.totalCount()
         .done(function (count) {
             // Process the "count" here
         })
         .fail(function (error) {
             // Handle the "error" here
         });

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                // {WidgetName} is configured here
            });
            this.store.totalCount()
                .then(
                    (count) => { /* Process the "count" here */ },
                    (error) => { /* Handle the "error" here */ }
                );
        };
    }
    
---