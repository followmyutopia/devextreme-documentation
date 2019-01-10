===========================================================================
<!--default-->null<!--/default-->
<!--type-->getter | Array<getter><!--/type-->
===========================================================================

<!--shortDescription-->
Specifies one or several data fields to search. Applies only if [searchEnabled]({basewidgetpath}/Configuration/#searchEnabled) is **true**.
<!--/shortDescription-->

<!--fullDescription-->
---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            searchEnabled: true,
            searchExpr: ["country", "capital"]
        });
    });

#####Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        [searchEnabled]="true"
        [searchExpr]="['country', 'capital']">
    </dx-{widget-name}>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/SelectBox/SearchAndEditing/jQuery/Light/"
}
<!--/fullDescription-->