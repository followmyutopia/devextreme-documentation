btnIndex = 0;
getParagraph = function (count) {
    $.ajax({
        type: "POST",
        url: "/LoremService.asmx/LoremIpsum",
        data: JSON.stringify({ count: count }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $.each(data.d, function (index, value) {
                $("#textData").append("<p>" + value + "</p>");
                $("#textData").append("<div class=\"button\" id=\"btn" + btnIndex + "\"></div>");
                $("#btn" + btnIndex).dxButton({ text: 'Copy paragraph' });
                btnIndex++;
            });
        }
    });
}
scrollView = null;
pulledDown = function (actionOptions) {
    $("#textData").empty();
    btnIndex = 0;
    getParagraph(1);
    scrollView = actionOptions.component;
    setTimeout(releaseScrollView, 3000);
}
releaseScrollView = function () {
    scrollView.release();
}
reachedBottom = function () {
    if( btnIndex<10 )
        getParagraph(1);
}
getParagraph(2);