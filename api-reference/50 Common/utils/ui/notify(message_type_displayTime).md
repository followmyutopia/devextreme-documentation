===================================================================
<!--module-->ui/notify<!--/module-->
<!--export-->default<!--/export-->
===================================================================

<!--shortDescription-->
Creates a toast message.
<!--/shortDescription-->

<!--paramName1-->message<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The message's text.
<!--/paramDescription1-->

<!--paramName2-->type<!--/paramName2-->
<!--paramType2-->String|undefined<!--/paramType2-->
<!--paramDescription2-->
The message's type: *"info"*, *"warning"*, *"error"* or *"success"*.
<!--/paramDescription2-->

<!--paramName3-->displayTime<!--/paramName3-->
<!--paramType3-->Number|undefined<!--/paramType3-->
<!--paramDescription3-->
The time interval in milliseconds for which the message is displayed.
<!--/paramDescription3-->

<!--fullDescription-->
---
#####jQuery

    <!--JavaScript-->
    $(function() {
        DevExpress.ui.notify("Warning message", "warning", 500);
    })

#####Angular

    <!-- tab: app.component.ts -->
    import { Component, AfterViewInit } from '@angular/core';
    import notify from 'devextreme/ui/notify';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent implements AfterViewInit {
        ngAfterViewInit() { 
            notify("Warning message", "warning", 500);
        }
    }

#####Vue

    <!-- tab: DxComponent.vue -->
    <template>
    </template>
    <script>
    import notify from 'devextreme/ui/notify';

    export default {
        mounted: function() {
            this.$nextTick(() => {
                notify("Warning message", "warning", 500);
            })
        }
    }
    </script>

#####React

    <!-- tab: DxComponent.js -->
    import React from 'react';
    import notify from 'devextreme/ui/notify';

    class DxComponent extends React.Component {
        componentDidMount() { 
            notify("Warning message", "warning", 500);
        }
    }
    export default DxComponent;

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/Angular/Light/"
}
<!--/fullDescription-->