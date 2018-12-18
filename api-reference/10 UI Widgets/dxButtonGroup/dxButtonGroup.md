<!--widgettree-->
items: [{
    style: "bold",
    icon: "bold"
}, {
    style: "italic",
    icon: "italic"
}, {
    style: "underline",
    icon: "underline"
}, {
    style: "strike",
    icon: "strike"
}],
keyExpr: "style",
stylingMode: "outlined",
selectionMode: "multiple"
<!--/widgettree-->
===========================================================================
<!--module-->ui/button_group<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\Widget\Widget.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
The **ButtonGroup** is a widget that contains a set of toggle buttons, and can be used as a mode switcher.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
##### jQuery  

    <!--JavaScript-->$(function () {
        $("#buttonGroup").dxButtonGroup({
            items: [{
                style: "bold",
                icon: "bold"
            }, {
                style: "italic",
                icon: "italic"
            }, {
                style: "underline",
                icon: "underline"
            }, {
                style: "strike",
                icon: "strike"
            }],
            keyExpr: "style",
            stylingMode: "outlined",
            selectionMode: "multiple"
        });
    });

    <!--HTML--><div id="buttonGroup"></div>

##### Angular  

    <!--HTML-->
    <dx-button-group
        [items]="fontStyles"
        keyExpr="style"
        stylingMode="outlined"
        selectionMode="multiple">
    </dx-button-group>

    <!--TypeScript-->
    import { DxButtonGroupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fontStyles = [{
            style: "bold",
            icon: "bold"
        }, {
            style: "italic",
            icon: "italic"
        }, {
            style: "underline",
            icon: "underline"
        }, {
            style: "strike",
            icon: "strike"
        }]
    }
    @NgModule({
        imports: [
            // ...
            DxButtonGroupModule
        ],
        // ...
    })

##### AngularJS  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-button-group="{
            items: fontStyles,
            keyExpr: 'style',
            stylingMode: 'outlined',
            selectionMode: 'multiple'
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.fontStyles = [{
                style: "bold",
                icon: "bold"
            }, {
                style: "italic",
                icon: "italic"
            }, {
                style: "underline",
                icon: "underline"
            }, {
                style: "strike",
                icon: "strike"
            }];
        });

##### Knockout  

    <!--HTML--><div data-bind="dxButtonGroup: {
        items: fontStyles,
        keyExpr: 'style',
        stylingMode: 'outlined',
        selectionMode: 'multiple'
    }"></div>

    <!--JavaScript-->var viewModel = {
        fontStyles: [{
            style: "bold",
            icon: "bold"
        }, {
            style: "italic",
            icon: "italic"
        }, {
            style: "underline",
            icon: "underline"
        }, {
            style: "strike",
            icon: "strike"
        }]
    };
    ko.applyBindings(viewModel);

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().ButtonGroup()
        .ID("buttonGroup")
        .Items(buttons => {
            buttons.Add().Icon("bold").Option("style", "bold");
            buttons.Add().Icon("italic").Option("style", "italic");
            buttons.Add().Icon("underline").Option("style", "underline");
            buttons.Add().Icon("strike").Option("style", "strike");
        })
        .KeyExpr("style")
        .StylingMode(ButtonStylingMode.Outlined)
        .SelectionMode(ButtonGroupSelectionMode.Multiple)
    )

    <!--Razor VB-->
    @(Html.DevExtreme().ButtonGroup() _
        .ID("buttonGroup") _
        .Items(Sub(buttons)
            buttons.Add().Icon("bold").Option("style", "bold")
            buttons.Add().Icon("italic").Option("style", "italic")
            buttons.Add().Icon("underline").Option("style", "underline")
            buttons.Add().Icon("strike").Option("style", "strike")
        End Sub) _
        .KeyExpr("style") _
        .StylingMode(ButtonStylingMode.Outlined) _
        .SelectionMode(ButtonGroupSelectionMode.Multiple)
    )

##### Vue

    <template>
        <dx-button-group
            :items="fontStyles"
            key-expr="style"
            styling-mode="outlined"
            selection-mode="multiple" />
    </template>
    <script>
    import { DxButtonGroup } from "devextreme-vue/button-group";

    export default {
        components: {
            DxButtonGroup
        },
        data () {
            return {
                fontStyles: [{
                    style: "bold",
                    icon: "bold"
                }, {
                    style: "italic",
                    icon: "italic"
                }, {
                    style: "underline",
                    icon: "underline"
                }, {
                    style: "strike",
                    icon: "strike"
                }]
            };
        }
    }
    </script>

##### React

    import React from "react";
    import { ButtonGroup } from "devextreme-react/button-group";

    const fontStyles = [{
        style: "bold",
        icon: "bold"
    }, {
        style: "italic",
        icon: "italic"
    }, {
        style: "underline",
        icon: "underline"
    }, {
        style: "strike",
        icon: "strike"
    }];

    class App extends React.Component {
        render () {
            return (
                <ButtonGroup
                    items={fontStyles}
                    keyExpr="style"
                    stylingMode="outlined"
                    selectionMode="multiple" />
            )
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/ButtonGroup/Overview/jQuery/Light/"
}
<!--/fullDescription-->