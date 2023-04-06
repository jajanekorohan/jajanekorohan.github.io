$(function() {
    $('a[href^="#"]').click(function() {
        let speed = 500;
        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top - 50; // ヘッダーの高さ分だけスクロール位置をずらす
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
