<!--id-->animationPresets.registerDefaultPresets()<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Registers [predefined animations](/Documentation/ApiReference/Common/Utils/animationPresets/) in the animation repository.
<!--/shortDescription-->

<!--fullDescription-->
By default, the animation repository includes predefined animations. You may need to call this method in case you deleted them by the [clear(name)](/Documentation/ApiReference/Common/utils/animationPresets/#clearname) method.

[note]The changes performed by this method are not applied to the repository automatically. You should also call the [applyChanges()](/Documentation/ApiReference/Common/utils/animationPresets/#applyChanges) method then. But consider calling the latter method once after you made all the required changes so that the update the repository does not take much time.
<!--/fullDescription-->