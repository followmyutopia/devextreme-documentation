Widgets like [Drawer](/Documentation/ApiReference/UI_Widgets/dxDrawer/), [Resizable](/Documentation/ApiReference/UI_Widgets/dxResizable/), [ScrollView](/Documentation/ApiReference/UI_Widgets/dxScrollView/), and [ValidationGroup](/Documentation/ApiReference/UI_Widgets/dxValidationGroup/) allow you to declare their content directly in the markup. The following is an example with **ScrollView**:

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