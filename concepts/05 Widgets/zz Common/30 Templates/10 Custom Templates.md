DevExtreme provides the [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component for Angular, AngularJS, and Knockout apps. Implement a **dxTemplate** within the widget's container, give the template a **name** and refer to it from a widget's **...Template** option. Within the template, you can access the template's context properties and, in item templates, the item index as shown in the following code. One widget can have many **dxTemplate**s.

---
#####Angular

    <!--HTML-->
    <dx-list ...
        itemTemplate="listItem">
        <div *dxTemplate="let itemData of 'listItem'; let itemIndex = index">
            {{itemIndex}} - {{itemData.itemProperty}}
        </div>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

#####AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-list="{
            ...
            itemTemplate: 'listItem'
        }" dx-item-alias="itemData">
            <div data-options="dxTemplate: { name: 'listItem' }">
                {{$index}} - {{itemData.itemProperty}}
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            // ...
        });

#####Knockout

    <!--HTML-->
    <div data-bind="dxList: {
        ...
        itemTemplate: 'listItem'
    }">
        <div data-options="dxTemplate: { name: 'listItem' }">
            <span data-bind="text: $index"></span> - <span data-bind="text: itemProperty"></span>
        </div>
    </div>


    <!--JavaScript-->
    var viewModel = {
        // ...
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, create a function that combines the HTML markup using jQuery [DOM manipulation methods](http://api.jquery.com/category/manipulation/). Assign this function to a widget's **...Template** option:

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            itemTemplate: function (itemData, itemIndex, element) {
                element.append(
                    $("<span>").text(itemIndex) - $("<span>").text(itemData.itemProperty)
                )
            }
        });
    });

Each widget's customization is described in dedicated articles. Search for "customize appearance" in the left menu and navigate to your widget's article for more information.

<a href="/Demos/WidgetsGallery/Demo/List/ItemTemplate/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>
