/// <reference path="../js/jquery-1.10.2.min.js" />
/// <reference path="../js/knockout-3.2.0.js" />
/// <reference path="../js/dx.all.js" />

(function () {

    window.MyApp = $.extend(true, window.MyApp, {
        "config": {
            "endpoints": {
                "db": {
                    "local": "https://sampleservices.devexpress.com/Northwind.svc/",
                    "production": "https://sampleservices.devexpress.com/Northwind.svc/"
                }
            },
            "services": {
                "db": {
                    "entities": {
                        "Categories": {
                            "key": "CategoryID",
                            "keyType": "Int32"
                        },
                        "Products": {
                            "key": "ProductID",
                            "keyType": "Int32"
                        }
                    }
                }
            }
        }
    });


    var endpointSelector = new DevExpress.EndpointSelector(window.MyApp.config.endpoints);

    var serviceConfig = $.extend(true, {}, MyApp.config.services, {
        db: {
            url: endpointSelector.urlFor("db"),

            // To enable JSONP support, uncomment the following line
            //jsonp: !window.WinJS,

            // To allow cookies and HTTP authentication with CORS, uncomment the following line
            // withCredentials: true,

            errorHandler: handleServiceError
        }
    });

    function handleServiceError(error) {
        if(window.WinJS) {
            try {
                new Windows.UI.Popups.MessageDialog(error.message).showAsync();
            } catch(e) {
                // Another dialog is shown
            }
        } else {
            alert(error.message);
        }
    }

    // Enable partial CORS support for IE < 10    
    $.support.cors = true;
    
    MyApp.db = new DevExpress.data.ODataContext(serviceConfig.db);

}());
