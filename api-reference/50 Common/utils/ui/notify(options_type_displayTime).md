===================================================================
<!--module-->ui/notify<!--/module-->
<!--export-->default<!--/export-->
===================================================================

<!--shortDescription-->
Creates a toast message.
<!--/shortDescription-->

<!--paramName1-->options<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
The **Toast** [configuration](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/).
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
        DevExpress.ui.notify({ message: "Error message", width: 300, shading: true }, "error", 500);
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
            notify({ message: "Error message", width: 300, shading: true }, "error", 500);
        }
    }

#####Vue

    <!-- tab: App.vue -->
    <template>
    </template>
    <script>
    import notify from 'devextreme/ui/notify';

    export default {
        mounted: function() {
            this.$nextTick(() => {
                notify({ message: "Error message", width: 300, shading: true }, "error", 500);
            })
        }
    }
    </script>

#####React

    <!-- tab: App.js -->
    import React from 'react';
    import notify from 'devextreme/ui/notify';

    class App extends React.Component {
        componentDidMount() { 
            notify({ message: "Error message", width: 300, shading: true }, "error", 500);
        }
    }
    export default App;

---

#####See Also#####
- [notify(message, type, displayTime)](/Documentation/ApiReference/Common/utils/ui/#notifymessage_type_displayTime)
<!--/fullDescription-->