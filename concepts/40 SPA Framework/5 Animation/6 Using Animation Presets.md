Use the animation presets that you collected within the application's animation set in the following parts of a DevExtreme application.

- *Animate a transition to a view.*  
	When navigating to a view, the replacement of the content in the layout's content placeholders can be animated. To set a required animation preset, use the **animation** option of the [dxTransition](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxTransition/) or [dxContentPlaceholder](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxContentPlaceholder/) component in the layout's markup.

	In [predefined layouts](/Documentation/Guide/SPA_Framework/Built-in_Layouts/), the "view-content-change" and "view-header-toolbar" animation presets from the [predefined animation sets](/Documentation/Guide/SPA_Framework/Animation/#Predefined_Animation_Sets) are used for the 'content' and 'header' content placeholders, respectively.

- *Animate the display of view commands.*  
	The framework uses the "command-rendered" animation preset if it is [registered](/Documentation/Guide/SPA_Framework/Animation/#Animation_Sets) in the application.

- *Animate a delayed view content.*  
	When a view or some of its parts are rendered with a delay (e.g., after data comes from a server), the process of displaying the delayed content can be animated. For this purpose, enclose the view content to be rendered with a delay into the [DeferRendering](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/?approach=Knockout#dxDeferRendering) widget and specify the widget's [animation](/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#animation) option.

- *Use staggered animation in a view.*  
	View elements (e.g., items in a list view) can be animated with a slight delay after animation of each successive element starts resulting in a curtain-like effect. For this purpose, enclose the view content to be shown with the staggered animation into the [DeferRendering](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/?approach=Knockout#dxDeferRendering) widget and specify the widget's [animation](/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#animation) option and [staggerItemSelector](/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#staggerItemSelector) options. The animation preset that is set to the **animation** option should have the [staggerDelay](/Documentation/ApiReference/Common/Object_Structures/animationConfig/#staggerDelay) option specified.

- *Display view parts successively with animation.*  
	When you have a "heavy" view, you can divide its content into several parts, each enclosed into the [DeferRendering](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/?approach=Knockout#dxDeferRendering) widget. If you do not specify a moment for rendering each of these parts, they will be shown successively one after another from the top to the bottom with the [animation](/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#animation) specified in their **DeferRendering** widget.