Right-to-left (RTL) support allows the widget to adapt its content to right-to-left locales.

RTL layout can be specified for an individual widget using its **rtlEnabled** option:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#sliderContainer").dxSlider({
            // ...
            rtlEnabled: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-slider ...
        [rtlEnabled]="true">
    </dx-slider>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';    

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxSliderModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxSliderModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

---

To apply RTL to your entire application, set the same option globally using the [config()](/Documentation/ApiReference/Common/utils/#configconfig) function:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        DevExpress.config({ rtlEnabled: true });
        // ...
    });

#####Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import config from 'devextreme/core/config';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        constructor() {
            config({ rtlEnabled: true });      
        }
    }
        // ...
    })

---

#####See Also#####
- **RTL Support Demo**: [DataGrid](/Demos/WidgetsGallery/Demo/DataGrid/RightToLeftSupport/jQuery/Light/) | [Navigation Widgets](/Demos/WidgetsGallery/Demo/Common/NavigationRightToLeftSupport/jQuery/Light/) | [Editors](/Demos/WidgetsGallery/Demo/Common/EditorsRightToLeftSupport/jQuery/Light/)
