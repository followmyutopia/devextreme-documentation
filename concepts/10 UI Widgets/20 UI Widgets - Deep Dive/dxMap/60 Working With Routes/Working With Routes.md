The [Map](/Documentation/ApiReference/UI_Widgets/dxMap/) widget can display routes on the map. The array of displayed routes is held in the [routes](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#routes) option. Each item of the array is an object that can have the following properties.

- **locations** (required)  
Contains an array of locations making up the route.
- **mode** (optional)  
Specifies a transportation mode to use in the displayed route. Acceptable values: 'driving' (set by default) and 'walking'.
- **color** (optional)  
Specifies the color of the line displaying the route.
- **weight** (optional)  
Specifies the thickness of the line displaying the route in pixels.
- **opacity** (optional)  
Specifies the opacity of the line displaying the route.