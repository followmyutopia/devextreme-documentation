---
id: PivotGridDataSource.Options.fields.sortBySummaryField
type: String
default: undefined
---
---
##### shortDescription
Sorts the field's values in the [headers](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers) by the specified measure's summary values. Accepts the measure's [name](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#name), [caption](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption), [dataField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField), or index in the [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array.

---
This and the [sortBySummaryPath](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortBySummaryPath) options can be used together to sort the field's values by a specific column's or row's summary values. If **sortBySummaryPath** is unspecified, the field's values are sorted by the specified measure's [grand totals](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Totals), as it is with the `Region` field's values in the following code:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                caption: "Sales",
                dataField: "sales",
                area: "data",
                isMeasure: true,
                summaryType: "sum"
            }, {
                caption: "Region",
                dataField: "region",
                area: "row",
                sortBySummaryField: "Sales"
            },
            // ...
            ]
        });

        $("#pivotGridContainer").dxPivotGrid({
            dataSource: pivotGridDataSource
        });
    });
    
##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    import { DxPivotGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // ...
                fields: [{
                    caption: "Sales",
                    dataField: "sales",
                    area: "data",
                    isMeasure: true,
                    summaryType: "sum"
                }, {
                    caption: "Region",
                    dataField: "region",
                    area: "row",
                    sortBySummaryField: "Sales"
                },
                // ...
                ]
            });
        }
    }

    @NgModule({
        imports: [
            // ...
            DxPivotGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-pivot-grid
        [dataSource]="pivotGridDataSource">
    </dx-pivot-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-pivot-grid
            :data-source="pivotGridDataSource"
        />
    </template>
    
    <script>
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import DxPivotGrid from 'devextreme-vue/pivot-grid';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            caption: 'Sales',
            dataField: 'sales',
            area: 'data',
            isMeasure: true,
            summaryType: 'sum'
        }, {
            caption: 'Region',
            dataField: 'region',
            area: 'row',
            sortBySummaryField: 'Sales'
        },
        // ...
        ]
    });

    export default {
        components: {
            DxPivotGrid
        },
        data() {
            return {
                pivotGridDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import DxPivotGrid from 'devextreme-react/pivot-grid';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            caption: 'Sales',
            dataField: 'sales',
            area: 'data',
            isMeasure: true,
            summaryType: 'sum'
        }, {
            caption: 'Region',
            dataField: 'region',
            area: 'row',
            sortBySummaryField: 'Sales'
        },
        // ...
        ]
    });

    class App extends React.Component {
        render() {
            return (
                <PivotGrid
                    dataSource={pivotGridDataSource}
                />
            );
        }
    }
    export default App;

---

#####See Also#####
- [Sorting by Summary Values](/Documentation/Guide/Widgets/PivotGrid/Sorting/#Sorting_in_Code/Sorting_by_Summary_Values)
- **fields[]**.[allowSortingBySummary](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowSortingBySummary)
- **fields[]**.[sortOrder](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortOrder)