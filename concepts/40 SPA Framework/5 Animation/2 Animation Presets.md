The animations that are used in different places within an application can be registered in the [DevExpress.animationPresets](/Documentation/ApiReference/Common/Utils/animationPresets/) repository and then used repeatedly during the application flow.

	<!--JavaScript-->DevExpress.animationPresets.registerPreset("my-animation", {
		animation: {
			// configuration options are here
		}
	});

	DevExpress.animationPresets.registerPreset("my-animation", {
		device: { platform: 'ios' },
		animation: {
			// configuration options are here
		}
	});

As you can see, animation presets are the animation configurations registered under a certain name for a particular [device](/Documentation/ApiReference/Common/Object_Structures/device/)(s).
