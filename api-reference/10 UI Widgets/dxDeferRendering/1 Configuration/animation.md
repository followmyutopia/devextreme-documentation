---
id: dxDeferRendering.Options.animation
type: animationConfig
default: undefined
---
---
##### shortDescription
Specifies the animation to be used to show the rendered content.

---
You can pass a [configuration object](/Documentation/ApiReference/Common/Object_Structures/animationConfig/) defining the required animation or the name of one of the [registered animations](/Documentation/ApiReference/Common/Utils/animationPresets/).

Note that you can specify a staggered animation so that content elements with a similar [selector](/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#staggerItemSelector) are animated using the specified animation one after another with a specified delay.