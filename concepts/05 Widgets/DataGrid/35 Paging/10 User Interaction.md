This section describes how to configure the pager, a component that allows users to navigate through pages and change their size at runtime. The pager consists of the page navigator and several optional elements: the page size selector, navigation buttons, and page information. 

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Pager](/Content/images/doc/17_1/DataGrid/visual_elements/pager.png)

Set the [showNavigationButtons](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#showNavigationButtons) and the [showPageSizeSelector](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#showPageSizeSelector) options to **true** to show the navigation buttons and the page size selector. The set of available page sizes depends on how large the [data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource) is. You can change it using the [allowedPageSizes](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#allowedPageSizes) option.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [10, 20, 50],
                showNavigationButtons: true
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-pager
            [showPageSizeSelector]="true"
            [allowedPageSizes]="[10, 20, 50]"
            [showNavigationButtons]="true">
        </dxo-pager>
    </dx-data-grid>

---

Assign **true** to the [showInfo](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#showInfo) option to show the page information. You can change the default text by specifiyng the [infoText](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#infoText).


---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            paging: { enabled: true }
            pager: {
                showInfo: true,
                infoText: "Page #{0}. Total: {1} ({2} items)" 
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid>
        <dxo-paging 
            [enabled]="true">
        </dxo-paging>
        <dxo-pager
            [showInfo]="true"
            infoText="Page #{0}. Total: {1} ({2} items)">
        </dxo-pager>
    </dx-data-grid>

---


<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RecordPaging/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
