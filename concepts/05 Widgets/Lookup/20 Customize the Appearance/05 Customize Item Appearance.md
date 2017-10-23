For a minor customization of **Lookup** items, you can use the default item template. This template defines the appearance of an item depending on whether [specific fields](/Documentation/ApiReference/UI_Widgets/dxLookup/Default_Item_Template/) are present or absent from the item's data object. For example, the following code generates three items: the first is not customized, the second is disabled and the third is hidden.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            valueExpr: 'text',
            displayExpr: 'text',
            dataSource: [
                { text: "HD Video Player" },
                { text: "SuperHD Video Player", disabled: true },
                { text: "SuperPlasma 50", visible: false }
            ]
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxLookupModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        lookupDataSource = [
            { text: "HD Video Player" },
            { text: "SuperHD Video Player", disabled: true },
            { text: "SuperPlasma 50", visible: false }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        valueExpr="text"
        displayExpr="text">
    </dx-lookup>

---

Using the default item template is the easiest way to customize an item, but it lacks flexibility. Instead, you can define a custom template for widget items. For Angular, AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/). The following code shows how you can use **dxTemplate** to define a template for the **Lookup** items.

---
#####Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        valueExpr="id"
        itemTemplate="lookupItem">
        <div *dxTemplate="let item of 'lookupItem'; let i = index">
            <img src="{{item.imgSrc}}"/>
            <div 
                style="display:inline-block" 
                [style.font-style]="i % 2 == 0 ? 'italic' : 'normal'">
                {{item.name}}
            </div>
        </div>
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        lookupDataSource = [{
            id: 1,
            name: "HD Video Player",
            imgSrc: "images/products/1-small.png"
        }, {
            id: 2,
            name: "UltraHD Player",
            imgSrc: "images/products/2-small.png"
        },
        // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

#####AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-lookup="{
            dataSource: lookupData,
            valueExpr: 'id',
            itemTemplate: 'item'
        }" dx-item-alias="product">
            <div data-options="dxTemplate: { name: 'item' }">
                <img ng-src="{{product.imgSrc}}"/>
                <div 
                    style="display:inline-block; 
                    font-style:{{$index % 2 == 0 ? 'italic' : 'normal'}}">
                    {{product.name}}
                </div>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.lookupData = [{
                id: 1,
                name: "HD Video Player",
                imgSrc: "images/products/1-small.png"
            }, {
                id: 2,
                name: "UltraHD Player",
                imgSrc: "images/products/2-small.png"
            },
            // ...
            ];
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####Knockout

    <!--HTML-->
    <div data-bind="dxLookup: {
        dataSource: lookupData,
        valueExpr: 'id',
        itemTemplate: 'item'
    }">
        <div data-options="dxTemplate: { name: 'item' }">
            <img data-bind="attr: { src: imgSrc }"/>
            <div style="display:inline-block" data-bind="{
                style: { 'font-style': $index % 2 == 0 ? 'italic' : 'normal' },
                text: name
            }"></div>
        </div>
    </div>

    <!--JavaScript-->
    var viewModel = {
        lookupData: [{
            id: 1,
            name: "HD Video Player",
            imgSrc: "images/products/1-small.png"
        }, {
            id: 2,
            name: "UltraHD Player",
            imgSrc: "images/products/2-small.png"
        },
        // ...
        ]
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, combine the HTML markup for items manually with jQuery [DOM manipulation methods](http://api.jquery.com/category/manipulation/). To apply this markup, use the [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#itemTemplate) callback function as shown in the following code.

    <!--JavaScript-->
    var lookupData = [{
        id: 1,
        name: "HD Video Player",
        imgSrc: "images/products/1-small.png"
    }, {
        id: 2,
        name: "UltraHD Player",
        imgSrc: "images/products/2-small.png"
    },
    // ...
    ];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: lookupData,
            valueExpr: 'id',
            displayExpr: 'name',
            itemTemplate: function (itemData, itemIndex, itemElement) {
                return $("<div />").append(
                            $("<img />").attr("src", itemData.imgSrc),
                            $("<p />").text(itemData.name)
                                    .css("display", "inline-block")
                                    .css("font-style", (itemIndex % 2 == 0) ? "italic" : "normal")
                        );
            }
        });
    });

You can also customize an individual **Lookup** item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/Documentation/ApiReference/UI_Widgets/dxLookup/Default_Item_Template/#template) field. 

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    var lookupData = [
        { text: "SuperHD Player"},
        { text: "HD Video Player", template: $("#individualTemplate") },
        // ...
    ];

Using similar techniques, you can customize the input field of the **Lookup**. The template for it should be assigned to the [fieldTemplate](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#fieldTemplate) option. 

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: lookupData,
            valueExpr: 'id',
            displayExpr: 'name',
            fieldTemplate: function(itemData, itemElement) {
                return $("<div />").append(
                    $("<img />").attr("src", itemData.imgSrc)
                );
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        valueExpr="id"
        displayExpr="name"
        fieldTemplate="inputField">
        <div *dxTemplate="let item of 'inputField'">
            <img src="{{item.imgSrc}}" />
        </div>
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        lookupDataSource = [{
            id: 1,
            name: "HD Video Player",
            imgSrc: "images/products/1-small.png"
        }, {
            id: 2,
            name: "UltraHD Player",
            imgSrc: "images/products/2-small.png"
        },
        // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

#####AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-lookup="{
            dataSource: lookupData,
            valueExpr: 'id',
            displayExpr: 'name',
            fieldTemplate: 'inputField'
        }" dx-item-alias="product">
            <div data-options="dxTemplate: { name: 'inputField' }">
                <img ng-src="{{ product.imgSrc }}" />
            </div>
        </div>
    </div>

#####Knockout

    <!--HTML-->
    <div data-bind="dxLookup: {
        dataSource: lookupData,
        valueExpr: 'id',
        displayExpr: 'name',
        fieldTemplate: 'inputField'
    }">
        <div data-options="dxTemplate: { name: 'inputField' }">
            <img data-bind="attr: { src: imgSrc }" />
        </div>
    </div>

---

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Templates/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

In addition, you can use a 3rd-party template engine to perform the needed customizations. For more information, see the [Use an Alternative Template Engine](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Use_an_Alternative_Template_Engine) article.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)
- [Lookup - Customize the Drop-Down Menu](/Documentation/Guide/Widgets/Lookup/Customize_the_Appearance/Customize_the_Drop-Down_Menu/)

[tags]lookup, item appearance, customize, templates, template, default item, default template, field template
