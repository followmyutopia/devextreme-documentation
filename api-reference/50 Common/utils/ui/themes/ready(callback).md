---
id: ui.themes.ready(callback)
---
---
##### shortDescription
Specifies a function to be executed after the theme is loaded.

##### param(callback): function()
The function.

---
[note]The specified callback is executed only once. Call **ready** before each [current(themeName)](/Documentation/ApiReference/Common/utils/ui/themes/#currentthemeName) call to execute the callback each time the theme changes.