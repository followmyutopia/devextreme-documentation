<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Sets focus to the input element representing the widget.
<!--/shortDescription-->

<!--fullDescription-->
[note]In the mobile Safari browser, it is impossible to set focus programmatically. You can find more information about this [here](http://stackoverflow.com/questions/6287478/mobile-safari-autofocus-text-field/7332160#7332160). You can, however, accomplish this task using PhoneGap when building a native package. Set the **KeyboardDisplayRequiresUserAction** preference to *false* in the *config.xml* file with Cordova settings.

 <preference name="KeyboardDisplayRequiresUserAction" value="false" />

After that, the **focus()** method will work as follows.

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
<!--/fullDescription-->