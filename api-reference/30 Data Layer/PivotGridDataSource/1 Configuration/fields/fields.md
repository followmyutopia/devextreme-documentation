---
id: PivotGridDataSource.Options.fields
type: Array<Object>
default: undefined
---
---
##### shortDescription
Configures pivot grid fields.

---
This option accepts an array of objects where each object configures a single field. Each pivot grid field must be associated with a data field using the [dataField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField) option. Fields with the specified [area](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) option are displayed in the pivot grid; other fields' headers are displayed in the [field chooser](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Chooser).

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                dataField: "region",
                area: "row"
            }, {
                dataField: "date",
                dataType: "date",
                area: "column"
            }, {
                dataField: "sales",
                summaryType: "sum",
                area: "data"
            }]
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
                    dataField: "region",
                    area: "row"
                }, {
                    dataField: "date",
                    dataType: "date",
                    area: "column"
                }, {
                    dataField: "sales",
                    summaryType: "sum",
                    area: "data"
                }]
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
            dataField: 'region',
            area: 'row'
        }, {
            dataField: 'date',
            dataType: 'date',
            area: 'column'
        }, {
            dataField: 'sales',
            summaryType: 'sum',
            area: 'data'
        }]
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
            dataField: 'region',
            area: 'row'
        }, {
            dataField: 'date',
            dataType: 'date',
            area: 'column'
        }, {
            dataField: 'sales',
            summaryType: 'sum',
            area: 'data'
        }]
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

If the [retrieveFields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#retrieveFields) option is **true**, fields configured in the **fields** array are accompanied by auto-generated fields that do not belong to any area. However, a user can move them to any area using the field chooser.

#####See Also#####
- [Fields and Areas](/Documentation/Guide/Widgets/PivotGrid/Fields_and_Areas/)
- [field(id)](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldid) | [field(id, options)](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldid_options)
- [fields()](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fields) | [fields(fields)](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldsfields)