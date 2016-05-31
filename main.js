$(function() {
    var height = 400;
    setInterval(function() {
        $($(".ID-chartDest").height(height).children()[0]).height(height);
    }, 200);
});
