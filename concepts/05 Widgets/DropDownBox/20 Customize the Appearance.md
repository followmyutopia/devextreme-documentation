You can configure the drop-down field using the [dropDownOptions](/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#dropDownOptions) object that contains fields described in the [Popup Configuration](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/) section. You can also specify a custom template for the drop-down button in the [dropDownButtonTemplate](/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#dropDownButtonTemplate) option.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        var fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
        $("#dropDownBoxContainer").dxDropDownBox({
            value: fruits[0],
            dataSource: fruits,
            dropDownOptions: {
                title: "Fruits",
                showTitle: true,
                fullScreen: true,
                showCloseButton: true
            },
            dropDownButtonTemplate: function() {
                return $("<img>", { src: "images/icons/custom-dropbutton-icon.svg", class: "custom-icon" });
            },
            contentTemplate: function(e) {
                var $list = $("<div>").dxList({
                    dataSource: e.component.option("dataSource"),
                    selectionMode: "single",
                    onSelectionChanged: function(arg) {
                        e.component.option("value", arg.addedItems[0]);
                        e.component.close();
                    } 
                });
                return $list;
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-drop-down-box
        [(value)]="selectedFruit"
        [(opened)]="isDropDownBoxOpened"
        dropDownButtonTemplate="dropDownButtonTemplate"
        [dataSource]="fruits">
        <dxo-drop-down-options
            title="Fruits"
            [showTitle]="true"
            [fullScreen]="true"
            [showCloseButton]="true">
        </dxo-drop-down-options>
        <div *dxTemplate="let contentData of 'content'">
            <dx-list 
                [dataSource]="fruits"
                selectionMode="single"
                (onSelectionChanged)="changeDropDownBoxValue($event)">
            </dx-list>
        </div>
        <div *dxTemplate="let data of 'dropDownButtonTemplate'">
            <img src="images/icons/custom-dropbutton-icon.svg" class="custom-icon">
        </div>
    </dx-drop-down-box>

    <!--TypeScript-->
    import { DxDropDownBoxModule, DxListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
        selectedFruit = this.fruits[0];
        isDropDownBoxOpened = false;
        changeDropDownBoxValue = function (args) {
            this.selectedFruit = args.addedItems[0];
            this.isDropDownBoxOpened = false;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDropDownBoxModule,
            DxListModule
        ],
        // ...
    })

---

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)