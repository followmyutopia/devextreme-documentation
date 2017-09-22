By default, group headers display text of the **key** field in a bold font. You can define a custom template for the group headers if you need to. For Angular, AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/). The following code shows how you can use **dxTemplate** to define a template for group headers.

---
#####Angular

    <!--HTML-->
    <dx-select-box
        [dataSource]="selectBoxDataSource"
        [grouped]="true"
        groupTemplate="group"
        displayExpr="name"
        valueExpr="count">
        <div *dxTemplate="let data of 'group'">
            <p>{{data.key}} | Count: {{data.overallCount}}</p>
        </div>
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule, DxTemplateModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        fruitsVegetables = [{
            key: "Fruits",
            items: [
                { name: "Apples", count: 10 },
                { name: "Oranges", count: 12 },
                { name: "Lemons", count: 15 }
            ]
        }, {
            key: "Vegetables",
            items: [
                { name: "Potatoes", count: 5 },
                { name: "Tomatoes", count: 9 },
                { name: "Turnips", count: 8 }
            ]
        }];
        selectBoxDataSource = new DataSource({
            store: fruitsVegetables,
            map: function(groupedItem) {
                var overallCount = 0;
                groupedItem.items.forEach(function(item) {
                    overallCount += item.count;
                })
                return Object.assign(groupedItem, { overallCount: overallCount });
            }
        });
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule,
             DxTemplateModule
         ],
         // ...
     })

#####AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-select-box="{
            dataSource: selectBoxDataSource,
            grouped: true,
            groupTemplate: 'group',
            displayExpr: 'name',
            valueExpr: 'count'
        }" dx-item-alias="itemObj">
            <div data-options="dxTemplate: { name: 'group' }">
                <p>{{itemObj.key}} | Count: {{itemObj.overallCount}}</p>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            var fruitsVegetables = [{
                key: "Fruits",
                items: [
                    { name: "Apples", count: 10 },
                    { name: "Oranges", count: 12 },
                    { name: "Lemons", count: 15 }
                ]
            }, {
                key: "Vegetables",
                items: [
                    { name: "Potatoes", count: 5 },
                    { name: "Tomatoes", count: 9 },
                    { name: "Turnips", count: 8 }
                ]
            }];
            $scope.selectBoxDataSource = new DevExpress.data.DataSource({
                store: fruitsVegetables,
                map: function(groupedItem) {
                    var overallCount = 0;
                    groupedItem.items.forEach(function(item) {
                        overallCount += item.count;
                    })
                    return $.extend(groupedItem, { overallCount: overallCount })
                }
            });
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####Knockout

    <!--HTML-->
    <div data-bind="dxSelectBox: {
        dataSource: selectBoxDataSource,
        grouped: true,
        groupTemplate: 'group',
        displayExpr: 'name',
        valueExpr: 'count'
    }">
        <div data-options="dxTemplate: { name: 'group' }">
            <p data-bind="text: key + ' | Count: ' + overallCount"></p>
        </div>
    </div>

    <!--JavaScript-->var fruitsVegetables = [{
        // ...
        // omitted for brevity
        // see the AngularJS code
    }];

    var viewModel = {
        selectBoxDataSource: new DevExpress.data.DataSource({
            store: fruitsVegetables,
            map: function(groupedItem) {
                var overallCount = 0;
                groupedItem.items.forEach(function(item) {
                    overallCount += item.count;
                })
                return $.extend(groupedItem, { overallCount: overallCount })
            }
        })
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, combine HTML markup for group headers manually with jQuery [DOM manipulation methods](http://api.jquery.com/category/manipulation/). To apply this markup, use the [groupTemplate](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#groupTemplate) callback function as shown in the following code.

    <!--JavaScript-->var fruitsVegetables = [{
        // ...
        // omitted for brevity
        // see the AngularJS code
    }];

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: new DevExpress.data.DataSource({
                store: fruitsVegetables,
                map: function(groupedItem) {
                    var overallCount = 0;
                    groupedItem.items.forEach(function(item) {
                        overallCount += item.count;
                    });
                    return $.extend(groupedItem, { overallCount: overallCount })
                }
            }),
            grouped: true,
            groupTemplate: function(groupData, _, groupElement) {
                groupElement.append(
                    $("<p>").text(groupData.key + " | Count: " + groupData.overallCount)
                )
            },
            displayExpr: 'name',
            valueExpr: 'count'
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/GroupedItems/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

In addition, you can use a 3rd-party template engine to perform the needed customizations. For more information, see the [Use an Alternative Template Engine](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Use_an_Alternative_Template_Engine) article.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)
- [SelectBox - Customize Item Appearance](/Documentation/Guide/Widgets/SelectBox/Customize_Item_Appearance/)
- [SelectBox API Reference](/Documentation/ApiReference/UI_Widgets/dxSelectBox/)

[tags]selectBox, group headers appearance, customize, templates, template
