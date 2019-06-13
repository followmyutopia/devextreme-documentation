To customize views in the **MultiView**, define a custom template for them. For Angular, AngularJS, and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/). The following code shows how you can use **dxTemplate** to define a template for **MultiView** views.

---
##### Angular

    <!--HTML-->
    <dx-multi-view
        [dataSource]="multiViewItems"
        itemTemplate="items">
        <div *dxTemplate="let item of 'items'">
            <div style="margin:25px;">
                <h1>{{item.title}}</h1>
                <div style="text-align:left;" *ngFor="let dataItem of item.dataArray">
                    <p>{{dataItem.propertyKey}}: <b>{{dataItem.propertyValue}}</b></p>
                </div>
            </div>
        </div>
    </dx-multi-view>

    <!--TypeScript-->
    import { DxMultiViewModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        multiViewItems = new DataSource({
            store: [{
                title: "Personal Data",
                data: {
                    firstName: "John",
                    lastName: "Smith",
                    birthYear: 1986
                }
            }, {
                title: "Contacts",
                data: {
                    phone: "(555)555-5555",
                    email: "John.Smith@example.com"
                }
            },
            // ...
            ],
            // Brings each item of the array to a specific structure
            map: (itemData) => {
                itemData.dataArray = Object.keys(itemData.data).map((key) => {
                    return {
                        propertyKey: key,
                        propertyValue: itemData.data[key]
                    }
                });
                return itemData;
            }
        });
    }
    @NgModule({
        imports: [
            // ...
            DxMultiViewModule
        ],
        // ...
    })

#####**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController" style="height: 100%;">
        <div dx-multi-view="{
            dataSource: multiViewItems,
            itemTemplate: 'item'
        }" dx-item-alias="itemObj">
            <div data-options="dxTemplate: { name: 'item' }">
                <div style="margin:25px;">
                    <h1>{{ itemObj.title }}</h1>
                    <div style="text-align:left;" ng-repeat="(key, value) in itemObj.data">
                        <p>{{ key }}: <b>{{ value }}</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.multiViewItems = [{
                title: "Personal Data",
                data: {
                    firstName: "John",
                    lastName: "Smith",
                    birthYear: 1986
                }
            }, {
                title: "Contacts",
                data: {
                    phone: "(555)555-5555",
                    email: "John.Smith@example.com"
                }
            },
            // ... 
            ];
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####**Knockout**

    <!--HTML-->
    <div data-bind="dxMultiView: { dataSource: multiViewItems, itemTemplate: 'item' }">
        <div data-options="dxTemplate: { name: 'item' } ">
            <div style="margin:25px;">
                <h1 data-bind="text: title"></h1>
                <div style="text-align:left;" data-bind="foreach: dataArray">
                    <p><span data-bind="text: propertyKey">
                    </span>: <b data-bind="text: propertyValue"></b></p>
                </div>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    var viewModel = {
        multiViewItems: new DevExpress.data.DataSource({
            store: [{
                title: "Personal Data",
                data: {
                    firstName: "John",
                    lastName: "Smith",
                    birthYear: 1986
                }
            }, {
                title: "Contacts",
                data: {
                    phone: "(555)555-5555",
                    email: "John.Smith@example.com"
                }
            },
            // ...
            ],
            // Brings each item of the array to a specific structure
            map: function (itemData) {
                itemData.text = itemData.title;
                itemData.dataArray = $.map(itemData.data, function (value, key) {
                    return {
                        propertyKey: key,
                        propertyValue: value
                    }
                });
                return itemData;
            }
        })
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, combine the HTML markup for items manually with jQuery <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a>. To apply this markup, use the [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#itemTemplate) callback function as shown in the following code.

    <!--JavaScript-->
    var multiViewItems = [{
        title: "Personal Data",
        data: {
            firstName: "John",
            lastName: "Smith",
            birthYear: 1986
        }
    }, {
        title: "Contacts",
        data: {
            phone: "(555)555-5555",
            email: "John.Smith@example.com"
        }
    },
    // ... 
    ];

    $(function() {
        $("#multiViewContainer").dxMultiView({
            dataSource: multiViewItems,
            itemTemplate: function (itemData, itemIndex, itemElement) {
                var mainContainer = $("<div style='margin:25px;'>");
                mainContainer.append("<h1>" + itemData.title + "</h1>");

                var info = $("<div style='text-align:left;'>");
                for (var field in itemData.data) {
                    info.append("<p>" + field + ": <b>" + itemData.data[field] + "</b></p>");
                }
                mainContainer.append(info);
                itemElement.append(mainContainer);
            }
        });
    });

You can also customize an individual view. For this purpose, declare a template for this view as a script and pass its `id` to the [template](/Documentation/ApiReference/UI_Widgets/dxMultiView/Default_Item_Template/#template) field. 

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->var multiViewItems = [
        { text: "Personal Data" },
        { text: "Contacts", template: $('#individualTemplate') },
        { text: "Address" }
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines) article.

#####See Also#####
- [MultiView - Switch Between Views](/Documentation/Guide/Widgets/MultiView/Switch_Between_Views/)
- [MultiView - Loop the Views](/Documentation/Guide/Widgets/MultiView/Loop_the_Views/)
- [MultiView Demos](/Demos/WidgetsGallery/#demo/navigation-multi_view-overview)
- [MultiView API Reference](/Documentation/ApiReference/UI_Widgets/dxMultiView/)

[tags]multi view, multiView, item appearance, customize, templates, template, custom template
