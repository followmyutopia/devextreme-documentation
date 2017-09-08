Scrolling allows browsing data outside the widget's viewport. The following scrolling modes are available in the **DataGrid**:

- **Standard**      
Loads all rows simultaneously. A user scrolls within one page if [paging](/Documentation/Guide/Widgets/DataGrid/Paging/) is enabled.

- **Virtual**       
Pages are loaded when entering the viewport and removed once they leave. This mode allows users to scroll data by jumping swiftly from one row to another. Scrolling in this mode becomes smoother if the widget preloads the adjacent pages. You can enable this feature by setting the **scrolling**.[preloadEnabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#preloadEnabled) option to **true**, but note that it may cause lags on low-performing devices.

    <a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/VirtualScrolling/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Virtual Scrolling Demo</a>

- **Infinite**      
The next page is loaded once the scrollbar reaches the end of its scale. Use this mode if a user should scroll data gradually, from the first to the last page.

    <a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/InfiniteScrolling/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Infinite Scrolling Demo</a>

Use the **scrolling**.[mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#mode) option to specify the current scrolling mode.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            scrolling: {
                mode: "standard" // or "virtual" | "infinite"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-scrolling
            mode="standard"> <!-- or "virtual" | "infinite" -->
        </dxo-scrolling>
    </dx-data-grid>
    
---

The **DataGrid** adapts its scrolling mechanism to the current platform. It utilizes native scrolling on most platforms, except non-Mac desktops and Android 4.0 below devices, where the widget simulates scrolling. You can force the **DataGrid** to use native or simulated scrolling on all platforms by setting the [useNative](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#useNative) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            scrolling: {
                useNative: true // or false | "auto"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-scrolling
            [useNative]="true"> <!-- or false | "auto" -->
        </dxo-scrolling>
    </dx-data-grid>
    
---

The current platform determines the native scrolling settings and you cannot adjust them, but you can control the simulated scrolling. Particularly, you can specify whether a user scrolls the content with a swipe gesture or scrollbar by setting the [scrollByContent](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#scrollByContent) and [scrollByThumb](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#scrollByThumb) options. The [showScrollbar](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#showScrollbar) option specifies when the scrollbar should appear.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            scrolling: {
                useNative: false,
                scrollByContent: true,
                scrollByThumb: true,
                showScrollbar: "onHover" // or "onClick" | "always" | "never"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-scrolling
            [useNative]="false"
            [scrollByContent]="true"
            [scrollByThumb]="true"
            showScrollbar="onHover"> <!-- or "onClick" | "always" | "never" -->
        </dxo-scrolling>
    </dx-data-grid>
    
---

#####See Also#####
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalDataSource/jQuery/Light/)