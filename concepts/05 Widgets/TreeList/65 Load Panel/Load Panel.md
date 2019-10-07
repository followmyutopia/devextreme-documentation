The load panel is displayed while the widget loads data. It consists of a loading indicator and text, both placed on a pane.

![DevExtreme HTML5/JavaScript TreeList Widget - Load Panel](/Content/images/doc/19_2/DataGrid/visual_elements/load_panel.png)

The load panel is shown only for remote data sources by default. To show it regardless of the data source type, assign **true** to the **loadPanel**.[enabled](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/loadPanel/#enabled) option. Setting the same option to **false** disables the load panel completely.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            loadPanel: {
                enabled: true
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-load-panel
            [enabled]="true">
        </dxo-load-panel>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

You can also control the load panel programmatically using the [beginCustomLoading(messageText)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#beginCustomLoadingmessageText) and [endCustomLoading()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#endCustomLoading) methods.

---
##### jQuery

    <!--JavaScript-->var treeList = $("#treeListContainer").dxTreeList("instance");
    treeList.beginCustomLoading();
    // ...
    treeList.endCustomLoading();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        doSomeLongOperation () {
            this.treeList.instance.beginCustomLoading();
            // ...
            this.treeList.instance.endCustomLoading();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

Since the load panel is a DevExtreme [LoadPanel](/Documentation/Guide/Widgets/LoadPanel/Overview/) widget, you can declare any [options of this widget](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/) in the **TreeList**'s [loadPanel](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/loadPanel/) object. For example, you can change the panel's size with the [height](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#height) and [width](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#width) options, or employ another loading indicator using the [indicatorSrc](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#indicatorSrc) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            loadPanel: {
                height: 100,
                width: 250,
                indicatorSrc: "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-load-panel
            [height]="100"
            [width]="250"
            indicatorSrc="https://js.devexpress.com/Content/data/loadingIcons/rolling.svg">
        </dxo-load-panel>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

#####See Also#####
- [LoadPanel Demos](/Demos/WidgetsGallery/Demo/Load_Panel/Overview/jQuery/Light/)
- [TreeList Demos](/Demos/WidgetsGallery/Demo/TreeList/Overview/jQuery/Light/)
