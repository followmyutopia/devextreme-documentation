===================================================================
===================================================================

<!--shortDescription-->
Gets an endpoint with a specific key.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The endpoint's key.
<!--/paramDescription1-->

<!--returnType-->String<!--/returnType-->
<!--returnDescription-->
The endpoint.
<!--/returnDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var endpointSelector = new DevExpress.data.EndpointSelector({
        db1: {
            local: "http://localhost:55555/service1.svc/",
            production: "http://services.example.com/service1.svc/"
        },
        db2: {
            local: "http://localhost:55555/service2.svc/",
            production: "http://services.example.com/service2.svc/"
        }
    });

    // Logs http://localhost:55555/service1.svc/ or http://services.example.com/service1.svc/
    // depending on whether the app's local or deployed version is running 
    console.log(endpointSelector.urlFor("db1"));

##### Angular

    <!--TypeScript-->
    import EndpointSelector from "devextreme/data/endpoint_selector";
    // ...
    export class AppComponent {
        endpointSelector: EndpointSelector;
        constructor() {
            this.endpointSelector = new EndpointSelector({
                db1: {
                    local: "http://localhost:55555/service1.svc/",
                    production: "http://services.example.com/service1.svc/"
                },
                db2: {
                    local: "http://localhost:55555/service2.svc/",
                    production: "http://services.example.com/service2.svc/"
                }
            });
            
            // Logs http://localhost:55555/service1.svc/ or http://services.example.com/service1.svc/
            // depending on whether the app's local or deployed version is running 
            console.log(this.endpointSelector.urlFor("db1")); 
        }
    }

---
<!--/fullDescription-->