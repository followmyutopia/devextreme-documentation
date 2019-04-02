Use nested configuration components. In the following example, we configure the [Chart](/Demos/WidgetsGallery/Demo/Charts/Overview/React/Light/) widget's [tooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/tooltip/) option:
 
    <!-- tab: App.js -->
    import Chart, {
        Tooltip
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart>
                    <Tooltip
                        enabled={true}
                        format="thousands"
                    />
                </Chart>
            );
        }
    }

Certain object type options are not implemented as nested configuration components because they depend on other options' values and cannot be typed ([editorOptions](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editorOptions) in the **DataGrid**, [editorOptions](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorOptions) in the **Form**, widget [options](/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#options) in the **Toolbar**). These options should be specified with an object. We recommend that you declare the object outside the configuration component to prevent unnecessary re-rendering.

    <!-- tab: App.js -->
    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        columnEditorOptions = { width: 100 };

        render() {
            return (
                <DataGrid>
                    <Column
                        editorOptions={this.columnEditorOptions}
                    />
                </DataGrid>
            );
        }
    }
