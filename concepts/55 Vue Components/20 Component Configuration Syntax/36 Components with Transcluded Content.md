Widgets like [Drawer](/Documentation/ApiReference/UI_Widgets/dxDrawer/),[Resizable](/Documentation/ApiReference/UI_Widgets/dxResizable/), [ScrollView](/Documentation/ApiReference/UI_Widgets/dxScrollView/), and [ValidationGroup](/Documentation/ApiReference/UI_Widgets/dxValidationGroup/) allow you to declare their content directly in the markup. The following is an example with **ScrollView**:

    <!-- tab: App.vue -->
    <template>
        <dx-scroll-view>
            <div>Some scrollable content</div>
        </dx-scroll-view>
    </template>

    <script>
    import DxScrollView from 'devextreme-vue/scroll-view';

    export default {
        components: {
            DxScrollView
        }
    }
    </script>