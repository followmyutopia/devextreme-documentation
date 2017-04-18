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

- **jQuery**  
 Use the `dxOverlay` jQuery plug-in.

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

        <!--HTML-->
        <div id="overlay"></div>

- **Knockout**  
 Add a div element and apply the `dxOverlay` binding to this element.

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

- **AngularJS**  
 Add a div element and apply the `dx-overlay` directive to this element.

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

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.
<!--/fullDescription-->