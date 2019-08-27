---
id: dxFunnel.Options.algorithm
acceptValues: 'dynamicHeight' | 'dynamicSlope'
type: String
default: 'dynamicSlope'
---
---
##### shortDescription
Specifies the algorithm for building the funnel.

---
Two algorithms are available:

- *"dynamicSlope"*

    The each funnel item's form depends on the ratio between the current and the next item's value.

- *"dynamicHeight"*

    The height of each funnel item is proportional to the item's value. This algorithm produces a pyramid which is upturned by default. You can return it to normal by assigning **true** to the [inverted](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#inverted) option. You can also transform the pyramid's peak into a funnel's neck using the [neckHeight](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#neckHeight) and [neckWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#neckWidth) options.

#####See Also#####
- [argumentField](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#argumentField)
- [valueField](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#valueField)
- [colorField](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#colorField)