<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
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
                <div class='movie-tooltip' ng-init="movieData = getMovieById(showtime.movieId)">
                    <img ng-src="{{movieData.image}}" />
                    <div class='movie-title'>Title:
                        <div ng-model="movieData.text" dx-text-box="{}"></div>
                    </div>
                    <div class='movie-info'>
                        Year: <div ng-model="movieData.year" dx-date-box="{}">
                    </div>
                    <div class='movie-info'>
                        Duration: <div ng-model="movieData.duration" dx-number-box="{}">
                    </div>
                </div>
            </div>
        </div>

#####See Also#####
- [template](/Documentation/ApiReference/Common/Object_Structures/template/)
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)

<!--/fullDescription-->
<!--typeFunctionParamName1-->appointmentData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The appointment object whose popup should be rendered.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->contentElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Element<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
An HTML element of the appointment popup to be rendered.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->string|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->