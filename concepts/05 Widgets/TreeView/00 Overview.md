The **TreeView** widget is a tree-like representation of textual data.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/navigation-tree_view-hierarchical_data_structure"
}
<a href="https://www.youtube.com/watch?v=j3d94lzW4Vw&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=37" class="button orange small fix-width-155" target="_blank">Watch Video</a>

The following code adds a simple **TreeView** to your page:

---
##### jQuery

    <!--HTML--><div id="treeViewContainer"></div>

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: [{
                id: '1',
                text: 'Fruits',
                expanded: true,
                items: [
                    { id: '1_1', text: 'Apples' },
                    { id: '1_2', text: 'Oranges' }
                ]
            }, {
                id: '2',
                text: 'Vegetables',
                expanded: true,
                items: [
                    { id: '2_1', text: 'Cucumbers' },
                    { id: '2_2', text: 'Tomatoes' }
                ]
            }]
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [dataSource]="hierarchicalData">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        hierarchicalData = [{
            id: '1',
            text: 'Fruits',
            expanded: true,
            items: [
                { id: '1_1', text: 'Apples' },
                { id: '1_2', text: 'Oranges' }
            ]
        }, {
            id: '2',
            text: 'Vegetables',
            expanded: true,
            items: [
                { id: '2_1', text: 'Cucumbers' },
                { id: '2_2', text: 'Tomatoes' }
            ]
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })

---

Note that the data source in the code above has a hierarchical structure, however, it also supports data sources with a plain structure. See the [Use Hierarchical Data](/Documentation/Guide/Widgets/TreeView/Use_Hierarchical_Data) and [Use Plain Data](/Documentation/Guide/Widgets/TreeView/Use_Plain_Data) articles to learn how you can customize hierarchical and plain data sources.

#####See Also#####
#include common-link-configurewidget
- [TreeView - Access a Node](/Documentation/Guide/Widgets/TreeView/Access_a_Node)
- [TreeView - Search Nodes](/Documentation/Guide/Widgets/TreeView/Search_Nodes/)
- [TreeView - Expand and Collapse Nodes](/Documentation/Guide/Widgets/TreeView/Expand_and_Collapse_Nodes)
- [TreeView - Select Nodes](/Documentation/Guide/Widgets/TreeView/Select_Nodes)
- [TreeView - Customize Node Appearance](/Documentation/Guide/Widgets/TreeView/Customize_Node_Appearance)
- [TreeView - Enhance Performance on Large Datasets](/Documentation/Guide/Widgets/TreeView/Enhance_Performance_on_Large_Datasets)
- [TreeView - Keyboard Support](/Documentation/Guide/Widgets/TreeView/Keyboard_Support)
- [TreeView API Reference](/Documentation/ApiReference/UI_Widgets/dxTreeView/)

[tags]treeview, tree view, collection container, collection widget, overview
