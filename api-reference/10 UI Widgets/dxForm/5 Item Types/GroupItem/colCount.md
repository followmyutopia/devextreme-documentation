<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->1<!--/default-->
<!--type-->Number<!--/type-->
===========================================================================

<!--shortDescription-->
The count of columns in the group layout.
<!--/shortDescription-->

<!--fullDescription-->
[note]

For extra small screens, this option always equals *1* to make the widget adaptive. Specify the [colCountByScreen](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/colCountByScreen/) option to override this logic.

    <!--JavaScript-->
    $(function(){
        $("#formContainer").dxForm({
            // ...
            items: [{
                itemType: "group",
                items: [ ... ],
                colCountByScreen: {
                    xs: 2
                }
            },
            // ...
            ]
        });
    });

[/note]
<!--/fullDescription-->