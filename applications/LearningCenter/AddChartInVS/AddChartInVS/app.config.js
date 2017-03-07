// NOTE object below must be a valid JSON
window.Application1 = $.extend(true, window.Application1, {
    "config": {
        "layoutSet": "navbar",
        "animationSet": "default",
        "navigation": [
            {
                title: "Home",
                action: "#home",
                icon: "home"
            },
            {
                title: "About",
                action: "#about",
                icon: "info"
            }
        ]
    }
});