---
id: GridBase.Options.searchPanel.searchVisibleColumnsOnly
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the widget should search against all columns or only visible ones.

---
By default, the widget searches against all columns configured in the [columns]({basewidgetpath}/Configuration/columns/) array. Some of them may be [invisible]({basewidgetpath}/Configuration/columns/#visible), and finding a result in them may confuse a user. To avoid this, set the **searchVisibleColumnsOnly** option to **true**.