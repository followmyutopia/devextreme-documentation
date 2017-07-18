<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'appointmentTooltip'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
The template to be used for rendering an appointment tooltip.
<!--/shortDescription-->

<!--fullDescription-->
A binding context of an appointment tooltip template is the data source object that corresponds to the currently rendered appointment.

---

#####Angular#####

Use a variable that is declared in the template via the `let` keyword to access appointment object fields in **Angular** apps. 

    <!--HTML-->
    <dx-scheduler ...         
        appointmentTooltipTemplate="appointmentTooltipTemplate">
         <div *dxTemplate="let showtime of 'appointmentTooltipTemplate'">
            <div class='movie-tooltip'>
                <img [src]="getMovieById(showtime.movieId).image" />
                <div class='movie-info'>
                    <div class='movie-title'>
                        {{getMovieById(showtime.movieId).text + ' (' + getMovieById(showtime.movieId).year + ')'}}
                    </div>
                    <div>
                        {{'Director: ' + getMovieById(showtime.movieId).director}}
                    </div>
                    <div>
                        {{'Duration: ' + getMovieById(showtime.movieId).duration + ' minutes'}}
                    </div>
                </div><br />
                <dx-button text='Edit details' (onClick)='editDetails(showtime)'>
                </dx-button>
            </div>
        </div>
    </dx-scheduler>

#####AngularJS#####

In **AngularJS** apps, if you need to access appointment object fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, appointment object fields are beyond reach. To access another binding context within an appointment tooltip template, use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

    <!--HTML-->
    <div id="scheduler" dx-scheduler="options" dx-item-alias="showtime">
        <div data-options="dxTemplate: {name: 'tooltip-template'}">
            <div class='movie-tooltip' ng-init="movieData = getMovieById(showtime.movieId)">
                <img ng-src="{{movieData.image}}" />
                <div class='movie-info'>
                    <div class='movie-title'>
                        {{movieData.text + ' (' + movieData.year + ')'}}
                    </div> 
                    <div>
                        {{'Director: ' + movieData.director}}
                    </div>
                    <div>
                        {{'Duration: ' + movieData.duration + ' minutes'}}
                    </div>
                </div><br />
                <div dx-button = "{
                    text: 'Edit details',
                    onClick: 'editDetails(showtime)'
                }"></div>
            </div>
        </div>
    </div>

---

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [template](/Documentation/ApiReference/Common/Object_Structures/template/)
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)


<!--/fullDescription-->
<!--typeFunctionParamName1-->appointmentData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The appointment object whose tooltip should be rendered.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->contentElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->jQuery<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
An HTML element of the appointment tooltip to be rendered.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->string|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or a template container.
<!--/typeFunctionReturnDescription-->