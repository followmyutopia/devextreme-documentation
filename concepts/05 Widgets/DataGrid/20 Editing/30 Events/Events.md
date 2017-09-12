The **DataGrid** widget raises events before and after a row is inserted, updated or removed from the data source. If the event handlers are going to remain unchanged during the widget's lifetime, assign them to corresponding **on*EventName*** options:

- [onRowInserting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowInserting)
- [onRowInserted](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowInserted)
- [onRowUpdating](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowUpdating)
- [onRowUpdated](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowUpdated)
- [onRowRemoving](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowRemoving)
- [onRowRemoved](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowRemoved)

<!---->

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#dataGridContainer").dxDataGrid({
            // ...
            onRowInserting: function(e) {
                // Handler of the "rowInserting" event
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        (onRowInserting)="onRowInserting($event)">
    </dx-data-grid>

    <!--TypeScript-->
    export class AppComponent {
        onRowInserting (e) {
            // Handler of the "rowInserting" event
        }
    }
    
---

If you are going to change the event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var rowUpdatingEventHandler1 = function(e) {
        // First handler of the "rowUpdating" event
    };
    
    var rowUpdatingEventHandler2 = function(e) {
        // Second handler of the "rowUpdating" event
    };
    
    $("#dataGridContainer").dxDataGrid("instance")
        .on("rowUpdating", rowUpdatingEventHandler1)
        .on("rowUpdating", rowUpdatingEventHandler2);

In addition, the **DataGrid** raises the [initNewRow](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#initNewRow) event when a new row is added and the [editingStart](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#editingStart) event when a row enters the editing state. These events can be handled just like others - using the **on*EventName*** option or the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#oneventName_eventHandler) method. In the following example, the [onInitNewRow](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onInitNewRow) event handler specifies initial values for an added row:

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            onInitNewRow: function(e) { // Handler of the "initNewRow" event
                // Sets an initial value for the "Hire_Date" field
                e.data.Hire_Date = new Date();
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        (onInitNewRow)="onInitNewRow($event)">
    </dx-data-grid>

    <!--TypeScript-->
    export class AppComponent {
        onInitNewRow (e) { // Handler of the "initNewRow" event
            // Sets an initial value for the "Hire_Date" field
            e.data.Hire_Date = new Date();
        }
    }
    
---
    
#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)
