The following widgets allow you to declare their content directly in the markup:

- [Drawer](/Documentation/ApiReference/UI_Widgets/dxDrawer/)
- [DropDownBox](/Documentation/ApiReference/UI_Widgets/dxDropDownBox/)
- [HtmlEditor](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/)
- [Popover](/Documentation/ApiReference/UI_Widgets/dxPopover/)
- [Popup](/Documentation/ApiReference/UI_Widgets/dxPopup/)
- [Resizable](/Documentation/ApiReference/UI_Widgets/dxResizable/)
- [ScrollView](/Documentation/ApiReference/UI_Widgets/dxScrollView/)
- [SlideOutView](/Documentation/ApiReference/UI_Widgets/dxSlideOutView/)
- [Tooltip](/Documentation/ApiReference/UI_Widgets/dxTooltip/)
- [ValidationGroup](/Documentation/ApiReference/UI_Widgets/dxValidationGroup/)

The following is an example with **ScrollView**:

    <!-- tab: App.js -->
    import ScrollView from 'devextreme-react/scroll-view';

    class App extends React.Component {
        render() {
            return (
                <ScrollView>
                    <div>Some scrollable content</div>
                </ScrollView>
            );
        }
    }