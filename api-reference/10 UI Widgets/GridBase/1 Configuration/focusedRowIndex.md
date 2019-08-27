---
id: GridBase.Options.focusedRowIndex
type: Number
default: -1
firedEvents: focusedRowChanged
---
---
##### shortDescription
Specifies the initially or currently focused grid row's index. Use it when [focusedRowEnabled]({basewidgetpath}/Configuration/#focusedRowEnabled) is **true**.

---
The focused row has a [key]({basewidgetpath}/Configuration/#focusedRowKey) and index on a page. When the [pager]({basewidgetpath}/Configuration/pager/) is used for navigation, the focused row's index persists from page to page but corresponds to a different row with a different key on each page.

The default index, *-1*, means that no row is focused.

The [focusedRowKey]({basewidgetpath}/Configuration/#focusedRowKey) takes precedence over the **focusedRowIndex** when both are specified.  

#####See Also#####
- [onFocusedRowChanging]({basewidgetpath}/Configuration/#onFocusedRowChanging) | [onFocusedRowChanged]({basewidgetpath}/Configuration/#onFocusedRowChanged)
- [focusedColumnIndex]({basewidgetpath}/Configuration/#focusedColumnIndex)