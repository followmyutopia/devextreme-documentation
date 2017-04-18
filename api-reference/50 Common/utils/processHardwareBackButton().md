<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_mobile_process_hardware_back_button">mobile/process_hardware_back_button</a><!--/module-->
<!--export-->default<!--/export-->
===================================================================

<!--shortDescription-->
Processes the hardware back button click.
<!--/shortDescription-->

<!--fullDescription-->
When building a mobile application, you should initiate processing of the hardware back button click. The following code demonstrates how to do this by calling the **processHardwareBackButton()** method within the event listener of the PhoneGap [backbutton](http://docs.phonegap.com/en/3.5.0/cordova_events_events.md.html) event.

    <!--JavaScript-->$(function() {
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            //...
            document.addEventListener("backbutton", onBackButton, false);
        }
        function onBackButton() {
            DevExpress.processHardwareBackButton();
        }    
        //...    
    }
    
To handle the back button click, subscribe to the [HtmlApplication.navigatingBack()](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#navigatingBack) event and use the **isHardwareButton** event handler parameter within the handling function.
<!--/fullDescription-->