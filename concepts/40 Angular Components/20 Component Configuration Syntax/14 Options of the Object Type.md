Use components prefixed with `dxo-` ("o" stands for "object"). In the following example, we configure the [TreeMap](/Demos/WidgetsGallery/Demo/Charts/HierarchicalDataStructure/Angular/Light/) widget's [tooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tooltip/) option:

    <!--HTML-->
    <dx-tree-map>
        <dxo-tooltip
            [enabled]="true"
            format="thousands">
        </dxo-tooltip>
    </dx-tree-map>

Particular options of the object type are not implemented as nested components. These options depend on the values of other options and therefore cannot be typed ([editorOptions](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editorOptions) in the **DataGrid**, [editorOptions](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorOptions) in the **Form**, widget [options](/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#options) in the **Toolbar**). Specify them with an object:

    <!--HTML-->
    <dx-data-grid>
        <dxi-column
            [editorOptions]="{ width: 100 }">
        </dxi-column>
    </dx-data-grid>
 
