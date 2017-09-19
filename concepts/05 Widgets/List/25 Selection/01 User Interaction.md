In the **List** widget, selection is disabled by default. To enable it, choose one of selection modes using the [selectionMode](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectionMode) option.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            selectionMode: "single" // or "multiple" | "all" | "none" (disables selection)
        });
    });

#####Angular

    <!--HTML-->
    <dx-list ...
        selectionMode="single"> <!-- or "multiple" | "all" | "none" (disables selection) -->
    </dx-list>

---

To select a **List** item, an end user simply clicks or taps it. Selected items become shaded. If you want to indicate selected items more manifestly, set the [showSelectionControls](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#showSelectionControls) option to **true**. This setting adds a check box to each item on the **List**. Also, make this setting if you use the *"all"* **selectionMode**. Otherwise, the *"Select All"* check box will be missing.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            showSelectionControls: true
        });
    });

#####Angular

    <!--HTML-->
    <dx-list ...
        [showSelectionControls]="true"> 
    </dx-list>

---

When data in the **List** is [paginated](/Documentation/Guide/Widgets/List/Paging/), you can choose whether the *"Select All"* check box will select all items on all pages or items on the currently rendered pages only. To make this choice, specify the [selectAllMode](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectAllMode) option.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            selectAllMode: "allPages" // or "page"
        });
    });

#####Angular

    <!--HTML-->
    <dx-list ...
        selectAllMode="allPages"> <!-- or "page" -->
    </dx-list>

---

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

#####See Also#####
- [Widget Basics - Create and Configure a Widget](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)
- [List - Localization](/Documentation/Guide/Widgets/List/Localization/)