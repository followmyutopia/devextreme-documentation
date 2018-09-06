===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Array<any><!--/type-->
<!--firedEvents-->optionChanged<!--/firedEvents-->
===========================================================================

<!--shortDescription-->
Specifies values selected in the column's [header filter](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Header_Filter).
<!--/shortDescription-->

<!--fullDescription-->
If the **headerFilter**.[groupInterval]({basewidgetpath}/Configuration/columns/headerFilter/#groupInterval) option is set, each value in the **filterValues** array specifies the beginning of an interval instead of an exact value:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                dataField: "ID",
                dataType: "number",
                headerFilter: { groupInterval: 100 },
                filterValues: [500, 700], // Filter intervals are 500-600 and 700-800
            },
            // ...
            ]
        })
    });

#####Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        columns = [{
            dataField: "ID",
            dataType: "number",
            headerFilter: { groupInterval: 100 },
            filterValues: [500, 700], // Filter intervals are 500-600 and 700-800
        },
        // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

    <!--HTML-->
    <dx-{widget-name} ...
        [columns]="columns">
    </dx-{widget-name}>

---

#####See Also#####
- [Filtering - Header Filter](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Header_Filter)
<!--/fullDescription-->