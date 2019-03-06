$('document').ready(function () {
    $('#tagline').t({
        beep: false,
        caret: '<span style="color:hotpink;">•</span>',
        typing: function (elm, chr) {
            if (chr.match(/\-trigger/))
                $('#pow-txt').show().delay(500).fadeOut(0);
        }
    });
});

document.addEventListener('DOMContentLoaded', function(){
    M.AutoInit();
});

AOS.init();