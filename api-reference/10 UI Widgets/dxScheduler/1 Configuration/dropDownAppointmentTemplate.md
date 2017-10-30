<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'dropDownAppointment'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
The template to be used for rendering appointments in the appointment collector's drop-down menu.
<!--/shortDescription-->

<!--fullDescription-->
This template's binding context is the object that corresponds to the currently rendered appointment.

---
#####jQuery

    <!--JavaScript-->$(function () {
        $("#scheduler").dxScheduler({
            // ...
            dataSource: [{
                text: 'Meeting customers',
                startDate: new Date(2017, 4, 10, 11, 0),
                endDate: new Date(2017, 4, 10, 13, 0),
                imgSrc: "images/1-small.png"

            }, {
                text: 'Summing up the results',
                startDate: new Date(2017, 4, 11, 12, 0),
                endDate: new Date(2017, 4, 11, 13, 0),
                imgSrc: "images/2-small.png"
            },
            // ...
            ],
            dropDownAppointmentTemplate: function (data, index) {
                    return $("<div />").append(
                        $("<img />").attr("src", data.imgSrc),
                        $("<p />").text(data.text)
                                .css("display", "inline-block")
                                .css("font-style", (index % 2 == 0) ? "italic" : "normal")
                    );
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-scheduler ...
        [dataSource]="appointments"
        dropDownAppointmentTemplate="ddAppointmentTemplate">
        <div *dxTemplate="let appointment of 'ddAppointmentTemplate'; let i = index">
            <img src="{{appointment.imgSrc}}"/>
            <div 
                style="display:inline-block" 
                [style.font-style]="i % 2 == 0 ? 'italic' : 'normal'">
                {{appointment.text}}
            </div>
        </div>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        appointments = [{
            text: 'Meeting customers',
            startDate: new Date(2017, 4, 10, 11, 0),
            endDate: new Date(2017, 4, 10, 13, 0),
            imgSrc: "images/1-small.png"

        }, {
            text: 'Summing up the results',
            startDate: new Date(2017, 4, 11, 12, 0),
            endDate: new Date(2017, 4, 11, 13, 0),
            imgSrc: "images/2-small.png"
        },
        // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

---

#####See Also#####
- [template](/Documentation/ApiReference/Common/Object_Structures/template/)
- **views**.[dropDownAppointmentTemplate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#dropDownAppointmentTemplate)
<!--/fullDescription-->
<!--typeFunctionParamName1-->itemData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The current appointment's object.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->itemIndex<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->number<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The current appointment's index.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->itemElement<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->Element<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
The current appointment's container.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->
