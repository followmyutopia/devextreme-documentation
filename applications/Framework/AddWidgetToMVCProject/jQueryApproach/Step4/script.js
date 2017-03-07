$(function () {
    $("#buttonContainer").dxButton({
        text: "Generate random value",
        onClick: function () {
            var result = "";
            for (var i = 0; i < 10; i++)
                result += Math.round(Math.random() * 9);
            $("#randomValue").text(result);
        }
    });
    //highlight
    $("#checkBoxContainer").dxCheckBox({
        value: false,
        onValueChanged: function (actionOptions) {
            var button = $("#buttonContainer").dxButton("instance");
            button.option("disabled", actionOptions.value);
        }
    });
    //highlight
});