<!--id-->dxTextEditor.Options.inputAttr<!--/id-->
===========================================================================
<!--default-->{}<!--/default-->
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the attributes to be passed on to the underlying HTML element.
<!--/shortDescription-->

<!--fullDescription-->
---
#####jQuery

    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            inputAttr: {
                id: "inputId"
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-{widget-name} ...
        [inputAttr]="{ id: 'inputId' }">
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
        .InputAttr("id", "inputId")
        // ===== or =====
        .InputAttr(new {
            @id = "inputId"
        })
        // ===== or =====
        .InputAttr(new Dictionary<string, object>() {
            { "id", "inputId" }
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().{WidgetName}() _
        .InputAttr("id", "inputId")
        ' ===== or =====
        .InputAttr(New With {
            .id = "inputId"
        })
        ' ===== or =====
        .InputAttr(New Dictionary(Of String, Object) From {
            { "id", "inputId" }
        })
    )

---

<!--/fullDescription-->