===========================================================================
<!--default-->{}<!--/default-->
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the [attributes](http://www.w3schools.com/tags/ref_attributes.asp) to be attached to the widget's root element.
<!--/shortDescription-->

<!--fullDescription-->
---
#####jQuery

    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            elementAttr: {
                id: "elementId",
                class: "class-name"
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-{widget-name} ...
        [elementAttr]="{ id: 'elementId', class: 'class-name' }">
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

#####ASP.NET MVC Control

    <!--Razor C#-->@(Html.DevExtreme().{WidgetName}()
        .ElementAttr("class", "class-name")
        // ===== or =====
        .ElementAttr(new {
            @id = "elementId",
            @class = "class-name"
        })
        // ===== or =====
        .ElementAttr(new Dictionary<string, object>() {
            { "id", "elementId" },
            { "class", "class-name" }
        })
        
    )

    <!--Razor VB-->@(Html.DevExtreme().{WidgetName}() _
        .ElementAttr("class", "class-name")
        ' ===== or =====
        .ElementAttr(New With {
            .id = "elementId",
            .class = "class-name"
        })
        ' ===== or =====
        .ElementAttr(New Dictionary(Of String, Object) From {
            { "id", "elementId" },
            { "class", "class-name" }
        })
    )

---

<!--/fullDescription-->