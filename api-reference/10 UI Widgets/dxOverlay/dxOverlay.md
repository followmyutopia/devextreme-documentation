<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--hidden--><!--/hidden-->
<!--type-->object<!--/type-->
<!--inherits-->..\Widget\Widget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
A widget displaying the required content in an overlay window.
<!--/shortDescription-->

<!--fullDescription-->
The **Overlay** widget represents a window overlaying the current view. It displays data located within the HTML element representing the widget.

You can create the widget using one of the following approaches.

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div id="overlay"></div>

        <!--JavaScript-->
        $("#overlay").dxOverlay({
            fullScreen: false,
            shading: true,
            position: {
                my: 'left top',
                at: 'left',
                of: '#targetElement'
            }
        });

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <dx-overlay
            [fullScreen]="false"
            [shading]="true"
            [position]="{
                my: 'left top',
                at: 'left',
                of: '#targetElement'
            }">
        </dx-overlay>

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div dx-overlay="{
            fullScreen: false,
            shading: true,
            position: {
                my: 'left top',
                at: 'left',
                of: '#targetElement'
            }
        }"></div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxOverlay: {
            visible: overlayVisible,
            fullScreen: false,
            shading: true,
            position: {
                my: 'left top',
                at: 'left',
                of: '#targetElement'
            }
        }"></div>

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.
<!--/fullDescription-->