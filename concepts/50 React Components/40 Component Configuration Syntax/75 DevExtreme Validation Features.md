In the following example, two textboxes are placed in a [validation group](/Documentation/ApiReference/UI_Widgets/dxValidationGroup/) that is validated on a button click. Each textbox has a set of [validation rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/). The validation result is displayed under the textboxes in a [validation summary](/Documentation/ApiReference/UI_Widgets/dxValidationSummary/).

    <!-- tab: App.js -->
    import TextBox from 'devextreme-react/text-box';
    import Validator, { ValidationRule } from 'devextreme-react/validator';
    import ValidationGroup from 'devextreme-react/validation-group';
    import Button from 'devextreme-react/button';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.email = null;
            this.password = null;
        }

        render() {
            return (
                <ValidationGroup>
                    <TextBox value={this.email}>
                        <Validator>
                            <ValidationRule type="required" message="Email is required" />
                            <ValidationRule type="email" message="Email is invalid" />
                        </Validator>
                    </TextBox>

                    <TextBox value={this.password} mode="password">
                        <Validator>
                            <ValidationRule type="required" message="Password is required" />
                        </Validator>
                    </TextBox>
                    <Button onClick={this.validate} text="Submit" />
                </ValidationGroup>
            );
        }

        validate(params) {
            let result = params.validationGroup.validate();
            if (result.isValid) {
                // The values are valid
                // Submit them...
                // ...
                // ... and then reset
                // params.validationGroup.reset();
            }
        }
    }

Refer to the [Data Validation](/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/) article for more information.
