===========================================================================
<!--merge--><!--/merge-->
===========================================================================

<!--fullDescription-->
State storing enables the widget to save applied settings and restore them the next time the widget is loaded. These settings include filtering, sorting, column order and width, selection, and others. Assign **true** to the **stateStoring**.[enabled]({basewidgetpath}/Configuration/stateStoring/#enabled) option to enable this functionality.

[note] The expanded row keys are not saved if the [autoExpandAll]({basewidgetpath}/Configuration/#autoExpandAll) is set to **true**.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/{WidgetName}/StatePersistence/jQuery/Light/"
}

#####See Also#####
- [state()]({basewidgetpath}/Methods/#state)
<!--/fullDescription-->