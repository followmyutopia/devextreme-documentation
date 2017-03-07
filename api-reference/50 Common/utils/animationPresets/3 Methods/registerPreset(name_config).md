<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Adds the specified animation preset to the animation repository by the specified name.
<!--/shortDescription-->

<!--paramName1-->name<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
The name by which the preset is added to the animation repository.
<!--/paramDescription1-->

<!--paramName2-->config<!--/paramName2-->
<!--paramType2-->object<!--/paramType2-->
<!--paramDescription2-->
An object defining the animation preset to be registered.
<!--/paramDescription2-->
<!--paramName2_field1-->animation<!--/paramName2_field1-->
<!--paramType2_field1-->animationConfig<!--/paramType2_field1-->
<!--paramDescription2_field1-->
A configuration object for the registered animation preset.
<!--/paramDescription2_field1-->
<!--paramName2_field2-->device<!--/paramName2_field2-->
<!--paramType2_field2-->Device<!--/paramType2_field2-->
<!--paramDescription2_field2-->
An object defining the target devices for which the animation preset is registered.
<!--/paramDescription2_field2-->

<!--fullDescription-->
The animation repository allows you to store common animations that can be used for different elements in an application/site. These common animations are the presets that are registered by certain names. These presets can define the same animation, thus they have the same name, but be targeted for different devices, thus they have different animation configurations. Here is an example of an iOS-specific animation preset registered by the "my-animation" name.

	<!--JavaScript-->DevExpress.animationPresets.registerPreset('my-animation', {
        device: { platform: 'ios' },
        animation: {
            //iOS-specific animation configuration
        }
    });

If you do not specify the **device** field of the preset, the preset will be used on any device.

	<!--JavaScript-->DevExpress.animationPresets.registerPreset('my-animation', {
        animation: {
            //common animation configuration 
        }
    });

The following request will return the iOS-specific animation configuration when the application is running on an iOS device and the common animation configuration on any other device.

	<!--JavaScript-->DevExpress.animationPresets.getPreset('my-animation');

You can register several animation presets common for all devices and then use them to register device specific presets under another name. Here is an example where the [default presets](/Documentation/ApiReference/Common/Utils/animationPresets/) are used to register another preset with a specific animation configurations used in iOS and on desktop.

    <!--JavaScript-->DevExpress.animationPresets.registerPreset( 'view-content-change', { animation: 'slide' } );
	DevExpress.animationPresets.registerPreset('view-content-change', { animation: 'ios7-slide', device: { platform: 'ios' } } );
    DevExpress.animationPresets.registerPreset('view-content-change', { animation: 'fade', device: { deviceType: 'desktop', platform: 'generic' } } );

[note]The changes performed by the **registerPreset(name, config)** method are not applied to the animation repository automatically. You should also call the [applyChanges()](/Documentation/ApiReference/Common/Utils/animationPresets/Methods/#applyChanges) method then. But consider calling the latter method once after you made all the required changes, because a single update of the repository takes less time then the updates performed each time you make a change.
<!--/fullDescription-->