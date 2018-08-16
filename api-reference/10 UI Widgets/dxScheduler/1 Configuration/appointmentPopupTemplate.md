===========================================================================
<!--hidden--><!--/hidden-->
<!--default-->'appointmentPopup'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
The template to be used for rendering an appointment details popup.
<!--/shortDescription-->

<!--fullDescription-->
A binding context of an appointment popup template is the data source object that corresponds to the currently rendered appointment.

So, in **Knockout approach**, you can bind template elements to the appointment object fields directly. To access another binding context within an appointment popup template, use [Knockout](http://knockoutjs.com/documentation/binding-context.html) binding variables.

In **AngularJS approach**, if you need to access appointment object's fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, appointment object fields are beyond reach. To access another binding context within an appointment popup template, use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

#####AngularJS#####

        <!--HTML-->
        <div id="scheduler" dx-scheduler="options" dx-item-alias="showtime">
            <div data-options="dxTemplate: {name: 'popup-template'}">
                <div class="movie-tooltip" ng-init="movieData = getMovieById(showtime.movieId)">
                    <img ng-src="{{movieData.image}}" />
                    <div class="movie-title">Title:
                        <div ng-model="movieData.text" dx-text-box="{}"></div>
                    </div>
                    <div class="movie-info">
                        Year: <div ng-model="movieData.year" dx-date-box="{}">
                    </div>
                    <div class="movie-info">
                        Duration: <div ng-model="movieData.duration" dx-number-box="{}">
                    </div>
                </div>
            </div>
        </div>

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->appointmentData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The data of the appointment whose popup is rendered.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->contentElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->dxElement<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The appointment's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->