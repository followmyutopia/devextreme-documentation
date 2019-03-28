===================================================================
<!--module-->ui/dialog<!--/module-->
<!--export-->confirm<!--/export-->
===================================================================

<!--shortDescription-->
Creates a confirmation dialog with a message and **Yes** and **No** buttons.
<!--/shortDescription-->

<!--paramName1-->messageHtml<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The dialog's message. Can contain HTML elements.
<!--/paramDescription1-->

<!--paramName2-->title<!--/paramName2-->
<!--paramType2-->String<!--/paramType2-->
<!--paramDescription2-->
The dialog's title.
<!--/paramDescription2-->

<!--returnType-->Promise<Boolean><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved with a Boolean value indicating whether a user has clicked **Yes** or **No**. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var result = DevExpress.ui.dialog.confirm("<i>Are you sure?</i>", "Confirm changes");
        result.done(function(dialogResult) {
            alert(dialogResult ? "Confirmed" : "Canceled");
        });
    })

#####Angular

    <!-- tab: app.component.ts -->
    import { Component, AfterViewInit } from '@angular/core';
    import { confirm } from 'devextreme/ui/dialog';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent implements AfterViewInit{
        ngAfterViewInit() { 
            let result = confirm("<i>Are you sure?</i>", "Confirm changes");
            result.then((dialogResult) => {
                alert(dialogResult ? "Confirmed" : "Canceled");
            });
        }
    }

#####Vue

    <!-- tab: App.vue -->
    <template>
    </template>
    <script>
    import { confirm } from 'devextreme/ui/dialog';

    export default {
        mounted: function() {
            this.$nextTick(function() {
                let result = confirm("<i>Are you sure?</i>", "Confirm changes");
                result.then((dialogResult) => {
                    alert(dialogResult ? "Confirmed" : "Canceled");
                });
            })
        }
    }
    </script>

#####React

    <!-- tab: App.js -->
    import React from 'react';
    import { confirm } from 'devextreme/ui/dialog';

    class App extends React.Component {
        componentDidMount() { 
            let result = confirm("<i>Are you sure?</i>", "Confirm changes");
            result.then((dialogResult) => {
                alert(dialogResult ? "Confirmed" : "Canceled");
            });
        }
    }
    export default App;

---
<!--/fullDescription-->