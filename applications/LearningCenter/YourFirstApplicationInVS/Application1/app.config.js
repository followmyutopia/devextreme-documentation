window.Application1 = $.extend(true, window.Application1, {
  "config": {
    "layoutSet": "navbar",
    "animationSet": "default",
    "navigation": [
      {
        "title": "Home",
        "onExecute": "#home",
        "icon": "home"
      },
      {
        "title": "About",
        "onExecute": "#about",
        "icon": "info"
      }
    ]
  }
});