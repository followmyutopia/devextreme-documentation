<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->A template name or a template container or a function returning one of them, which is used to render appointment popup content. Or a function creating the appointment popup content item. Has following signature appointmentPopupTemplate(appointmentData, contentElement). Returns htmlString or Element or jQuery representing content of the content item.<!--/d-->
===========================================================================
<!--hidden--><!--/hidden-->
<!--default-->'appointmentPopup'<!--/default-->
<!--type-->template<!--/type-->
<!--fp1d-->An object representing the data of associated appointment.<!--/fp1d-->
<!--fp2d-->An HTML element containing the rendered content.<!--/fp2d-->
<!--frd-->A template name or a template container.<!--/frd-->
===========================================================================

<!--shortDescription-->
The template to be used for rendering an appointment details popup.
<!--/shortDescription-->

<!--fullDescription-->
A binding context of an appointment popup template is the data source object that corresponds to the currently rendered appointment.

So, in **Knockout approach**, you can bind template elements to the appointment object fields directly. To access another binding context within an appointment popup template, use [Knockout](http://knockoutjs.com/documentation/binding-context.html) binding variables.

In **AngularJS approach**, if you need to access appointment object's fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, appointment object fields are beyond reach. To access another binding context within an appointment popup template, use [Angular](https://docs.angularjs.org/guide/scope) binding variables.

#####AngularJS Approach#####

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
- [Customize Item Template](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance)
- [Customize Widget Element Appearance](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/)

<!--/fullDescription-->
<!--typeFunctionParamName1-->appointmentData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The appointment object whose popup should be rendered.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->contentElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->jQuery<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
An HTML element of the appointment popup to be rendered.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->string|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->