Use nested configuration components. In the following example, we configure the [Chart](/Demos/WidgetsGallery/Demo/Charts/Overview/Vue/Light/) widget's [tooltip](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/tooltip/tooltip.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/tooltip/') option:
 
    <!-- tab: App.vue -->
    <template>
        <dx-chart>
            <dx-tooltip
                :enabled="true"
                format="thousands"
            />
        </dx-chart>
    </template>

    <script>
    import DxChart, {
        DxTooltip
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxTooltip
        }
    }
    </script>

Certain object type options are not implemented as nested configuration components because they depend on other options' values and cannot be typed ([editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editorOptions') in the **DataGrid**, [editorOptions](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorOptions') in the **Form**, widget [options](/api-reference/10%20UI%20Widgets/dxToolbar/5%20Default%20Item%20Template/options.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#options') in the **Toolbar**). These options should be specified with an object. We recommend that you declare the object outside the configuration component to prevent unnecessary re-rendering.

    <!-- tab: App.vue -->
    <template>
        <dx-data-grid>
            <dx-column
                :editor-options="columnEditorOptions"
            />
        </dx-data-grid>
    </template>

    <script>
    import DxDataGrid, {
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        data() {
            return {
                columnEditorOptions: { width: 100 }
            }
        }
    }
    </script>

 
