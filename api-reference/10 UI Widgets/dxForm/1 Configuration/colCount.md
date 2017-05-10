<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->1<!--/default-->
<!--acceptValues-->'auto'<!--/acceptValues-->
<!--type-->number | string<!--/type-->
===========================================================================

<!--shortDescription-->
The count of columns in the form layout.
<!--/shortDescription-->

<!--fullDescription-->
[note]

For extra small screens, this option always equals *1* to make the widget adaptive. To override this logic, specify the [colCountByScreen](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/colCountByScreen/) option.

    <!--JavaScript-->
    $(function(){
        $("#formContainer").dxForm({
            // ...
            colCountByScreen: {
                xs: 2
            }
        });
    });

[/note]

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), you can specify this option using the `Mode` enum, which accepts the value `Auto`.
<!--/fullDescription-->