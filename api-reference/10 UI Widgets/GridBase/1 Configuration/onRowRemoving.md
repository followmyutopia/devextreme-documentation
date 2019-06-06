<!--EventForAction-->..\4 Events\rowRemoving.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed before a row is removed from the data source.
<!--/shortDescription-->

<!--fullDescription-->
[note] In batch [editing mode]({basewidgetpath}/Configuration/editing/#mode), this function is executed for each row individually if several rows should be removed.

The following code shows how to use the function parameter's **cancel** field to prevent or continue row removal. In this code, a Promise is assigned to this field. Row removal continues if checks on the server succeed (the Promise is resolved); otherwise, row removal is prevented (the Promise is rejected).

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            onRowRemoving: function(e) {
                var d = $.Deferred();
                $.getJSON("https://url/to/your/validation/service", JSON.stringify(e.data))
                    .then(function(result) {
                        return !result.errorText ? d.resolve() : d.reject(result.errorText)
                    })
                    .fail(function() { 
                        return d.reject(); 
                    })
                e.cancel = d.promise();
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        constructor(private httpClient: HttpClient) { /*...*/}
        onRowRemoving(e) {
            let params = new HttpParams({ fromString: JSON.stringify(e.data) });
            let result = this.httpClient.get("https://url/to/your/validation/service", { params: params })
                .toPromise();
            e.cancel = new Promise((resolve, reject) => {
                result.then((validationResult) => {
                    !validationResult.errorText ? resolve() : reject(validationResult.errorText)
                })
                .catch(() => reject());
            })    
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-{widget-name} ... 
        (onRowRemoving)="onRowRemoving($event)">
    </dx-{widget-name}>

---

<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event that caused the function's execution.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->data<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The data of the row that should be removed.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->key<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The row's key. 
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->cancel<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Boolean | Promise<void><!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
**true**, a Promise resolved with **true**, or a rejected Promise stops row removal.       
**false** or a Promise resolved with **false** or **undefined** continues row removal.
<!--/typeFunctionParamDescription1_field6-->
