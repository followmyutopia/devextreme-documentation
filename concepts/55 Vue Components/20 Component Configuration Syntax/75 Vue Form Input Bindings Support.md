DevExtreme editors support the [`v-model`](https://vuejs.org/v2/guide/forms.html) directive that creates two-way binding on the editor's value.

    <!-- tab: App.vue -->
    <template>
        <dx-text-box v-model="bindingProperty" />
    </template>

    <script>
    import DxTextBox from 'devextreme-vue/text-box';

    export default {
        components: {
            DxTextBox
        },
        data() {
            return {
                bindingProperty: 'Some value'
            }
        }
    }
    </script>

Alternatively, you can [use the `sync` modifier](/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/#Two-Way_Option_Binding).