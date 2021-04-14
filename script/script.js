$(function(){

    /* 자동 슬라이드 구현 */
    var slideGo = setInterval (fnSlide, 3000);

    function fnSlide() {
        $("#shuttleFrame").animate(
            {"margin-left": "-370px"},
            800,
            function() {
                $("#shuttleFrame>span:first").insertAfter("#shuttleFrame>span:last");
                $("#shuttleFrame").css("margin-left", "0");
            }
        );
    }

    /* 자동 슬라이드 구현 */


    /* 슬라이드 재생/일시정지 버튼 */

    $("#btnArea").mouseover(function(){

        var srcValue = "images/control_play.png";
        $("#pauseBtn").attr("src", srcValue);

        clearInterval(slideGo);

    });

    $("#btnArea").mouseout(function(){

        var srcValue = "images/control_pause.png";
        $("#pauseBtn").attr("src", srcValue);

        slideGo = setInterval (fnSlide, 3000);

    });

    /* 슬라이드 재생/일시정지 버튼 */


    /* 이전(btnPrev)으로 이동 버튼 */

    $("#btnPrev").click(function(){

        $("#shuttleFrame").animate(
            {"margin-left": "-370px"},
            800,
            function(){
                $("#shuttleFrame>span:first").insertAfter("#shuttleFrame>span:last");
                $("#shuttleFrame").css("margin-left", "0");
            }
        );

    });

    /* 이전(btnPrev)으로 이동 버튼 */


    /* 다음(btnNext)으로 이동 버튼 */

    $("#btnNext").click(function(){

        $("#shuttleFrame").css({"margin-left": "-370px"});
        $("#shuttleFrame>span:last").insertBefore("#shuttleFrame>span:first");

        $("#shuttleFrame").animate(
            {"margin-left": "0"},
            800
        );

    });

    /* 다음(btnNext)으로 이동 버튼 */

});
