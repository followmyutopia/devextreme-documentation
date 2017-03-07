$(function () {
    $("#buttonContainer").dxButton({
        text: "Generate random value",
        //highlight
        onClick: function () {
            var result = "";
            for (var i = 0; i < 10; i++)
                result += Math.round(Math.random() * 9);
            $("#randomValue").text(result);
        }
        //highlight
    });
});
