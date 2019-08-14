<!--id-->animationPresets<!--/id-->
===========================================================================
<!--module-->animation/presets<!--/module-->
<!--export-->default<!--/export-->
===========================================================================

<!--shortDescription-->
A repository of animations.
<!--/shortDescription-->

<!--fullDescription-->
To avoid [defining animations](/Documentation/ApiReference/Common/Object_Structures/animationConfig/) each time you animate an element(s), register different animations in the **DevExtreme.animationPresets** repository and request them by associated names when required. This repository has a built-in set of animations. Here they are:

- *fade*
- *stagger-fade*  
- *slide*
- *stagger-slide*  
- *ios7-slide*   
- *overflow*
- *ios7-toolbar*
- *stagger-smooth-drop*
- *stagger-drop*
- *stagger-3d-drop*

[note]Stagger-like animations are executed by the [transitionExecutor](/Documentation/ApiReference/Common/Utils/TransitionExecutor/) only. They cannot be applied by calling the [animate](/Documentation/ApiReference/Common/Utils/fx/#animateelement_config) method for a particular element.

To populate the **animationPresets** repository with your animations, use the [registerPreset(name, config)](/Documentation/ApiReference/Common/Utils/animationPresets/#registerPresetname_config) method. To get the required animation from the repository, use the [getPreset(name)](/Documentation/ApiReference/Common/Utils/animationPresets/#getPresetname) method.
<!--/fullDescription-->