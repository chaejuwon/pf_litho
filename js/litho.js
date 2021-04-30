;(function($){
    var litho = {
        btn : 0,

        init:   function(){
            this.scrollFn();
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
            this.section9Fn();
            this.section10Fn();
            this.section11Fn();
            this.section12Fn();
            this.footerFn();
            this.modalFn();
            this.smothScrollFn();
        },
        scrollFn:function(){
            var scrollOld = 0;
            var scrollNew = 0;  
            var $win      = $(window);   
            var $header   = $('#header');
            var that      = this;    

            function scrollFn(){
                scrollNew = $win.scrollTop();
                

                var scr = function(){
                    result = scrollOld-scrollNew > 0 ? 'up':'down';
                }
                scr();

                if( $win.scrollTop() == 0 ){
                    if($win.innerWidth() > 991){
                        $header.removeClass('addHide');
                        $header.removeClass('addWhite');
                        $header.find('#logo a img').attr('src','./img/logo-white.png');
                        $header.find('#nav > ul > li > a').removeClass('addNavBlack');
                        $header.find('#aside a i').removeClass('addAsideBlack');
                    }
                    else{
                        $header.removeClass('addHide');
                        $header.removeClass('addWhite');
                        $header.find('#logo a img').attr('src','./img/logo-tussock.png');
                        $header.find('#nav > ul > li > a').removeClass('addNavBlack');
                        $header.find('#aside a i').removeClass('addAsideBlack');
                    }
                }
                else{
                    if(result == 'up'){
                        if( that.btn == 1 ){
                            $header.removeClass('addHide');
                            $header.removeClass('addWhite');
                            $header.find('#logo a img').attr('src','./img/logo-tussock.png');
                            $header.find('#nav > ul > li > a').addClass('addNavBlack');
                            $header.find('#aside a i').addClass('addAsideBlack');
                        }
                        if( that.btn == 0){
                            $header.removeClass('addHide');
                            $header.addClass('addWhite');
                            $header.find('#logo a img').attr('src','./img/logo-tussock.png');
                            $header.find('#nav > ul > li > a').addClass('addNavBlack');
                            $header.find('#aside a i').addClass('addAsideBlack');
                        }
                    }
                    if(result == 'down'){
                        if( that.btn == 1 ){
                            $header.find('#nav > ul > li > a').removeClass('addNavBlack');
                            $header.find('#aside a i').removeClass('addAsideBlack');
                            $header.removeClass('addWhite');
                            $header.removeClass('addHide');
                        }
                        if( that.btn == 0 ){
                            $header.find('#nav > ul > li > a').removeClass('addNavBlack');
                            $header.find('#aside a i').removeClass('addAsideBlack');
                            $header.removeClass('addWhite');
                            $header.addClass('addHide');
                        }

                    }


                }
                scrollOld = scrollNew;
            }

            

            $win.scroll(function(){
                scrollFn();
            });
        },
        headerFn:function(){
            var $win       = $(window);
            var $mainBtn   = $('#header .main-btn');
            var $sub       = $('#header .sub');
            var $subBtn    = $('#header .sub-btn');
            var $subSub    = $('#header .sub-sub');
            var $subSubBtn = $('#header .sub-sub-btn');
            var $subSubSub = $('#header .sub-sub-sub');
            var $navUl     = $('#header #nav > ul');
            var $mobileBtn = $('#header .mobile-btn');
            var $bar       = $('#header .bar')
            var $nav       = $('#header #nav');
            var $logo      = $('#header #logo a img');
            var pc         = 0;
            var mobile     = 0;
            var $Icon       = $('#header #nav > ul > li > a > i');
            var that = this;
                

            function pcFn(){
                $nav.stop().show();
                $sub.stop().hide();
                $subSub.stop().hide();
                $subSubSub.stop().hide();
                $logo.attr('src','./img/logo-white.png');
                $nav.css({ display:'inline-block' });


                $mainBtn.on({
                    mouseenter:function(){
                        $sub.stop().hide();
                        $(this).next().stop().show();
                    }
                });
                $navUl.on({
                    mouseleave:function(){
                        $sub.stop().hide();
                        $subSub.stop().hide();
                        $subSubSub.stop().hide();
                    }
                });
                $subBtn.on({
                    mouseenter:function(){
                        $subSub.stop().hide();
                        $(this).next().stop().show();
                    }
                });
                $subSubBtn.on({
                    mouseenter:function(){
                        $subSubSub.stop().hide();
                        $(this).next().stop().show();
                    }
                });
            }
            function mobileFn(){
                $sub.stop().hide();
                $subSub.stop().show();
                $subSubSub.stop().show();
                $nav.slideUp(0);
                $bar.removeClass('addMobile');
                $logo.attr('src', './img/logo-tussock.png');


                // pc 이벤트삭제
                $mainBtn.off('mouseenter');
                $navUl.off('mouseleave');
                $subBtn.off('mouseenter');
                $subSubBtn.off('mouseenter');

            }

            function pcMobileFn(){
                if( $win.innerWidth() > 991 ){
                    pc = 1;
                    mobile = 0;
                    pcFn();
                    that.btn = 0;
                }
                else{
                    pc = 0;
                    mobile = 1;
                    mobileFn();
                }
            }

            setTimeout(pcMobileFn, 100);

            $win.resize(function(){
                pcMobileFn();
            });

            mobileFn();

            // 모바일버튼 클릭 이벤트
            $mobileBtn.on({
                click:function(e){
                    e.preventDefault();
                    $bar.toggleClass('addMobile');
                    $nav.stop().slideToggle(300);
                    // $('html').toggleClass('addSrc');
                    that.btn == 0 ? that.btn = 1 : that.btn = 0 ;
                    console.log(that.btn);
                }
            });

            // 메인메뉴 클릭이벤트
            $mainBtn.each(function(idx){
                $(this).on({
                    click:function(e){
                        e.preventDefault();
                        if(mobile == 1){
                            if($Icon.eq(idx).hasClass('addIcon') == false){
                                $Icon.removeClass('addIcon');
                                $sub.stop().slideUp(300);
                                $(this).next().stop().slideToggle(300);
                                $Icon.eq(idx).toggleClass('addIcon');
                            }else{
                                $(this).next().stop().slideToggle(300);
                                $Icon.eq(idx).toggleClass('addIcon');
                            }
                        }
                    }
                });
            });
        },
        section1Fn:function(){
            var $win       = $(window);
            var $winW      = $(window).width();
            var $winH      = $(window).height();
            var $slide     = $('#section1 .slide');
            var n          = $('#section1 .slide').length-2;
            var $slideWrap = $('#section1 .slide-wrap');
            var $slideView = $('#section1 .slide-view');
            var $nextBtn = $('#section1 .next-btn');
            var $prevBtn = $('#section1 .prev-btn');
            var cnt = 0;
            var setId  = null;
            var setId2 = null;

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();

                if( $winW > 1170 ){
                    $slide.css({ width:$winW, height:$winH });
                    $slideWrap.css({ marginLeft: -$winW });
                    $slideWrap.stop().animate({ left: -$winW * cnt }, 0, 'easeInOutExpo');
                }
                else if( $winW > 980 ){
                    $slide.css({ width:$winW, height:635 });
                    $slideWrap.css({ marginLeft: -$winW });
                    $slideWrap.stop().animate({ left: -$winW * cnt }, 0, 'easeInOutExpo');
                }
                else if( $winW > 760 ){
                    $slide.css({ width:$winW, height:550 });
                    $slideWrap.css({ marginLeft: -$winW });
                    $slideWrap.stop().animate({ left: -$winW * cnt }, 0, 'easeInOutExpo');
                }
                else{
                    $slide.css({ width:$winW, height:470 });
                    $slideWrap.css({ marginLeft: -$winW });
                    $slideWrap.stop().animate({ left: -$winW * cnt }, 0, 'easeInOutExpo');
                }

            }

            resizeFn();
            setTimeout(resizeFn,100);

            $win.resize(function(){
                setTimeout(resizeFn,100);
            });





            //메인 다음 슬라이드 함수 
            function mainSlideFn(){
                $slideWrap.stop().animate({ left: -($winW*cnt) }, 600, 'easeInOutExpo', function(){
                    if(cnt>n-1){cnt=0}
                    if(cnt<0){cnt=n-1}
                    $slideWrap.stop().animate({ left: -($winW*cnt) },0, 'easeInOutExpo');
                });

            }


            //다음슬라이드 카운트 함수
            function nextSlideCntFn(){
                cnt++;
                mainSlideFn();
            }

            //이전슬라이드 카운트 함수
            function prevSlideCntFn(){
                cnt--;
                mainSlideFn();
            }
        
            //다음버튼클릭이벤트
            $nextBtn.on({
                click:function(){
                    pauseTimerFn();
                    if( !$slideWrap.is(':animated') ){
                        nextSlideCntFn();
                    }
                }
            });
            //이전버튼 클릭이벤트
            $prevBtn.on({
                click:function(){
                    pauseTimerFn();
                    if( !$slideWrap.is(':animated') ){
                        prevSlideCntFn();
                    }
                }
            });

              //5 터치 스와이프
              var touchStart = 0;
              var touchEnd = 0;
              var mouseDown = 0;
              var touchYstart = 0;
              var touchYend = 0;

              $slideView.on({
                mousedown: function(e){
                    e.preventDefault();
                      mouseDown = 1;
                      pauseTimerFn();
                      touchStart = e.pageX; //e.clientX                                          
                },
                touchstart: function(e){
                  e.preventDefault();
                    mouseDown = 1;
                    pauseTimerFn();
                    touchStart = e.originalEvent.changedTouches[0].pageX; //e.clientX                                          
                    touchYstart = e.originalEvent.changedTouches[0].pageY; //e.clientX                                          
                },
                mouseup: function(e){
                  e.preventDefault();
                    pauseTimerFn();
                    mouseDown = 0;
                    touchEnd = e.pageX;
                    touchSwipeFn();
                },
                touchend: function(e){
                  e.preventDefault();
                    pauseTimerFn();
                    mouseDown = 0;
                    touchEnd = e.originalEvent.changedTouches[0].pageX;
                    touchYend = e.originalEvent.changedTouches[0].pageY; //e.clientX                                          

                    touchSwipeFn();

                    if( touchYstart - touchYend < -50 ){ // 위에서 아래로 터치
                      $('html,body').stop().animate({scrollTop: 0 }, 1000);
                    }
                    if( touchYstart - touchYend > 50 ){ // 아래에서 위로 터치
                      $('html,body').stop().animate({scrollTop: $('#section2').offset().top }, 1000);
                    }
                    return false;
                },
                mouseleave:function(e){
                  if( mouseDown == 1 ){
                    mouseDown = 0;
                    touchEnd = e.pageX;
                    touchSwipeFn();
                  }
                }
              });

            function touchSwipeFn(){
                if( (touchStart-touchEnd) > 0 ){
                    if( !$slideWrap.is(':animated') ){
                        nextSlideCntFn();
                    }
                }
                if( (touchStart-touchEnd) < 0 ){
                    if( !$slideWrap.is(':animated') ){
                        prevSlideCntFn();
                    }

                }
            }

            //자동 타이머 함수
            function autoTimerFn(){
                setId = setInterval(nextSlideCntFn, 4000);
            }
            autoTimerFn();

            //이벤트 발생후 4초뒤 자동타이머 실행
            function pauseTimerFn(){
                var t = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    t++;
                    if(t>4){
                        t=0;
                        clearInterval(setId);
                        clearInterval(setId2);
                        nextSlideCntFn();
                        autoTimerFn();
                    }
                }, 1000)
            }
        },
        section2Fn:function(){



        // 페럴럭스 
        var t = 0;
        $(window).scroll(function(){

            if( $(window).scrollTop() >= $('#section2').offset().top-800  ){
            if(t==0){
                t=1;
                $('#section2 .wrap .gap .container .content ul li').addClass('addsec2');                

            }                
            }

            if( $(window).scrollTop() == 0 ){
            t=0;
            $('#section2 .wrap .gap .container .content ul li').removeClass('addsec2');         
            }

        });   
        },
        section3Fn:function(){

        // 페럴럭스
        var t = 0;
        $(window).scroll(function(){

            if( $(window).scrollTop() >= $('#section3').offset().top-800  ){
            if(t==0){
                t=1;
                $('#section3 .wrap .gap .container .title').addClass('addsec3');     
                $('#section3 .wrap .gap .container .content ul li').addClass('addsec3');     
                }       
            }

            if( $(window).scrollTop() == 0 ){
            t=0;
            $('#section3 .wrap .gap .container .title').removeClass('addsec3');         
            $('#section3 .wrap .gap .container .content ul li').removeClass('addsec3');         
            }
        });  

        },
        section4Fn:function(){
            var $li        = $('#section4 .content ul li');
            var $frontFaceW = $('#section4 .front-face').innerWidth();
            frontFaceH = $frontFaceW * 0.893481399;
            var $frontH6 = $('#section4 .img-caption-wrap > h6');
            var $frontH3 = $('#section4 .img-caption-wrap > h3');
            var $frontH2 = $('#section4 .img-caption-wrap > h2');
            var $frontSpan = $('#section4 .img-caption-wrap > span');

            var h6Size   = $frontFaceW * 0.025765476;
            var h3Size   = $frontFaceW * 0.087924688;
            var h2Size   = $frontFaceW * 0.087924688;
            var spanSize = $frontFaceW * 0.025765476;

                $frontH6.css({ fontSize:h6Size });
                $frontH3.css({ fontSize:h3Size });
                $frontH2.css({ fontSize:h2Size });
                $frontSpan.css({ fontSize:spanSize });

            var $backH3i   = $('#section4 .back-face-wrap > h3 > i');
            var $backH2   = $('#section4 .back-face-wrap > h2');
            var $backA   = $('#section4 .back-face-wrap > span > a');

            var backH3ISize = $frontFaceW * 0.06441369;
            var backH2Size = $frontFaceW * 0.087924688;
            var backASize = $frontFaceW * 0.022544792;
                $backH3i.css({ fontSize:backH3ISize });
                $backH2.css({ fontSize:backH2Size });
                $backA.css({ fontSize:backASize });


            function resizeFn(){
                $li        = $('#section4 .content ul li');
                $frontFaceW = $('#section4 .front-face').width();
                frontFaceH = $frontFaceW * 0.753481399;
                h6Size   = $frontFaceW * 0.025765476;
                h3Size   = $frontFaceW * 0.087924688;
                h2Size   = $frontFaceW * 0.087924688;
                spanSize = $frontFaceW * 0.025765476;
                    
                
                    $frontH6.css({ fontSize:h6Size });
                    $frontH3.css({ fontSize:h3Size });
                    $frontH2.css({ fontSize:h2Size });
                    $frontSpan.css({ fontSize:spanSize });

                backH3ISize = $frontFaceW * 0.06441369;
                backH2Size = $frontFaceW * 0.087924688;
                backASize = $frontFaceW * 0.022544792;

                    $backH3i.css({ fontSize:backH3ISize });
                    $backH2.css({ fontSize:backH2Size });
                    $backA.css({ fontSize:backASize });



                $li.css({ height: frontFaceH });
            }

            resizeFn();
            setTimeout(resizeFn, 100);

            $(window).resize(function(){
                setTimeout(resizeFn, 100);
            });

        // 페럴럭스
        var t = 0;
        $(window).scroll(function(){

            if( $(window).scrollTop() >= $('#section4').offset().top-800  ){
            if(t==0){
                t=1;
                $('#section4 .wrap .gap .container .content ul li').addClass('addsec4');     
                $('#section4 .wrap .gap .container .title').addClass('addsec4');     
                }       
            }

            if( $(window).scrollTop() == 0 ){
            t=0;
            $('#section4 .wrap .gap .container .content ul li').removeClass('addsec4');         
            $('#section4 .wrap .gap .container .title').removeClass('addsec4');         
            }
        });  



        },
        section5Fn:function(){
            var $navLiA = $('#section5 #nav2 > ul > li > a');
            var $mainBtn = $('#section5 .main-btn');
            var $tabMenuUl = $('#section5 .tab-menu-wrap ul');
            var $span = $('#section5 #nav2 > ul > li > span');

            $mainBtn.each(function(idx){
                $(this).on({
                    click:function(){                    
                        $tabMenuUl.removeClass('addfadeIn');
                        $navLiA.removeClass('addColor');
                        $span.removeClass('addMove');
                        $tabMenuUl.eq(idx).addClass('addfadeIn');
                        $navLiA.eq(idx).addClass('addColor');
                        $span.eq(idx).addClass('addMove');
                    }
                });
            });


        // 페럴럭스
        var t = 0;
        $(window).scroll(function(){

            if( $(window).scrollTop() >= $('#section5').offset().top-800  ){
            if(t==0){
                t=1;
                $('#section5 .wrap .gap .container .title').addClass('addsec5');     
                $('#section5 .wrap .gap .container .content #nav2').addClass('addsec5');     
                $('#section5 .wrap .gap .container .content .tab-menu-wrap ul li').addClass('addsec5');     
                }       
            }

            if( $(window).scrollTop() == 0 ){
            t=0;
            $('#section5 .wrap .gap .container .title').removeClass('addsec5');         
            $('#section5 .wrap .gap .container .content #nav2').removeClass('addsec5');         
            $('#section5 .wrap .gap .container .content .tab-menu-wrap ul li').removeClass('addsec5');         
            }
        });  
        },
        section6Fn:function(){

        // 페럴럭스
        var t = 0;
        $(window).scroll(function(){

            if( $(window).scrollTop() >= $('#section6').offset().top-800  ){
            if(t==0){
                t=1;
                $('#section6 .wrap .gap .container .title').addClass('addsec6');     
                $('#section6 .wrap .gap .container .content ul li').addClass('addsec6');          
                }       
            }

            if( $(window).scrollTop() == 0 ){
            t=0;
            $('#section6 .wrap .gap .container .title').removeClass('addsec6');         
            $('#section6 .wrap .gap .container .content ul li').removeClass('addsec6');              
            }
        }); 

        },
        section7Fn:function(){
            var $galBtn      = $('#section7 .main-btn');
            var $galWrapUl   = $('#section7 #gallery-wrap > ul');
            var $galWrapUlLi = $('#section7 #gallery-wrap > ul > li');
            var n            = $('#section7 #gallery-wrap > ul > li').length; //이미지 총 갯수
            var $galContent  = $('#section7 #gallery-wrap .gallery-content');
            var $navLiA      = $('#section7 #nav3 > ul > li > a');
            var $span        = $('#section7 #nav3 > ul > li > span');
            
            var $winW    = $(window).innerWidth();
            var cols     = 4; //반응형 1200이하일때 3 980이하일때 2개 600이하일때 1개
            var imgW     = $winW/cols;
            var imgHRate = 0.75;
            var imgH     = imgW * imgHRate;
            var rows     = Math.ceil(n/cols);
            var btnNum   = 0;
            
            var hide     = [];
            var show     = [];

            var k        = 0;


            function galleryresizeFn(){
                // 반응형 창너비에 대한 이미지 칸의 갯수
                $winW    = $(window).innerWidth();
                if( $winW > 1200 ){
                    cols = 4;
                }
                else if( $winW > 980 ){
                    cols = 3;
                }
                else if( $winW > 600 ){
                    cols = 2;
                }
                else{
                    cols = 1;
                }
                // 이미지너비, 높이
                imgW = $winW / cols; //이미지너비
                imgH = imgW * imgHRate;
                // 버튼의 hide와 show의 갯수
                if( btnNum == 0 ){
                    hide = [];
                    show = [0,1,2,3,4,5,6,7];
                }
                else if( btnNum == 1 ){
                    hide = [1,5];
                    show = [0,2,3,4,6,7];
                }
                else if( btnNum == 2 ){
                    hide = [1,3,4,7];
                    show = [0,2,5,6];
                }
                else if( btnNum == 3 ){
                    hide = [0,2,3,5];
                    show = [1,4,6,7];
                }
                else if(btnNum == 4){
                    hide = [2,4];
                    show = [0,1,3,5,6,7];
                }

                n=show.length;
                rows = Math.ceil(n/cols);                        
                $galWrapUl.css({ width: ($winW) , height: imgH*rows });
                $galWrapUlLi.css({ width: imgW , height: imgH });

                $.each(hide, function(idx){
                    $galContent.eq(hide[idx]).removeClass('addZoom');
                });
                

                for(var i=0; i<hide.length; i++){
                    $galWrapUlLi.eq(hide[i]).stop().hide();
                }

                k = -1;
                for(var i=0; i<rows; i++){
                    for(var j=0; j<cols; j++){
                        k++;
                        if( k >= n ){
                            break;
                        }
                        // console.log('btn1_case4',k, j, i);
                        $galWrapUlLi.eq(show[k]).stop().show().animate({ left:imgW*j , top:imgH*i }, 300, 'easeInOutQuad');
                    }
                }

                $.each(show, function(idx){
                    $galContent.eq(show[idx]).addClass('addZoom');
                });


        // 페럴럭스
        var t = 0;
        $(window).scroll(function(){

            if( $(window).scrollTop() >= $('#section7').offset().top-800  ){
            if(t==0){
                t=1;
                $('#section7 .wrap .gap .container .title').addClass('addsec7');     
                $('#section7 .wrap .gap .container .content #nav3').addClass('addsec7');          
                $('#section7 .wrap .gap .container .content #gallery-wrap ul').addClass('addsec7');          
                }       
            }

            if( $(window).scrollTop() == 0 ){
            t=0;
            $('#section7 .wrap .gap .container .title').removeClass('addsec7');     
            $('#section7 .wrap .gap .container .content #nav3').removeClass('addsec7');          
            $('#section7 .wrap .gap .container .content #gallery-wrap ul').removeClass('addsec7');                
            }
        }); 


                // 나열형

                // // 버튼 번호별 이미지 갯수  0:8개 1:6개 2:4개 3:6개 4:4개
                // if( btnNum == 0 ){
                //     hide = [];
                //     show = [0,1,2,3,4,5,6,7];

                //     n=show.length;
                //     rows = Math.ceil(n/cols);                        
                //     $galWrapUl.css({ width: ($winW) , height: imgH*rows });
                //     $galWrapUlLi.css({ width: imgW , height: imgH });
                //     $galContent.removeClass('addZoom');

                //     k = -1;
                //     for(var i=0; i<rows; i++){
                //         for(var j=0; j<cols; j++){
                //             k++;
                //             if( k >= n ){
                //                 break;
                //             }
                //             // console.log('btn1_case4',k, j, i);
                //             $galWrapUlLi.eq(show[k]).stop().show().animate({ left:imgW*j , top:imgH*i }, 300, 'easeInOutQuad');
                //         }
                //     }

                //     $.each(show, function(idx){
                //         $galContent.eq(show[idx]).addClass('addZoom');
                //     });
                // }
                // else if( btnNum == 1 ){ /* show(zoomIn):023467     hide(zoomOut):15 */
                //     hide = [1,5];
                //     show = [0,2,3,4,6,7];

                //     n=show.length;
                //     rows = Math.ceil(n/cols);                        
                //     $galWrapUl.css({ width:$winW ,height:imgH*rows });
                //     $galWrapUlLi.css({ width:imgW ,height:imgH });
                //     $galContent.removeClass('addZoom');

                //     for(var i=0; i<hide.length; i++){
                //         $galWrapUlLi.eq(i).stop().hide();
                //     }

                //     k = -1;
                //     for(var i=0; i<rows; i++){
                //         for(var j=0; j<cols; j++){
                //             k++;
                //             if( k >= n ){
                //                 break;
                //             }
                //             $galWrapUlLi.eq(show[k]).stop().show().animate({ left:imgW*j , top:imgH*i }, 300, 'easeInOutQuad');
                //         }
                //     }

                //     $.each(show, function(idx){
                //         $galContent.eq(show[idx]).addClass('addZoom');
                //     });

                // }
                // else if( btnNum == 2 ){ /* show(zoomIn):0256       hide(zoomOut):1347 */
                //     hide = [1,3,4,7];
                //     show = [0,2,5,6];

                //     n=show.length;
                //     rows = Math.ceil(n/cols);                        
                //     $galWrapUl.css({ width:$winW , height:imgH*rows });
                //     $galWrapUlLi.css({ width: imgW , height:imgH });
                //     $galContent.removeClass('addZoom');

                //     for(var i=0; i<hide.length; i++){
                //         $galWrapUlLi.eq(i).stop().hide();
                //     }

                //     k = -1;
                //     for(var i=0; i<rows; i++){
                //         for(var j=0; j<cols; j++){
                //             k++;
                //             if( k >= n ){
                //                 break;
                //             }
                //             $galWrapUlLi.eq(show[k]).stop().show().animate({ left:imgW*j , top:imgH*i }, 300, 'easeInOutQuad');
                //         }
                //     }

                //     $.each(show, function(idx){
                //         $galContent.eq(show[idx]).addClass('addZoom');
                //     });
                // }

                // else if( btnNum == 3 ){ /* show(zoomIn):1467       hide(zoomOut):0235 */
                //     hide = [0,2,3,5];
                //     show = [1,4,6,7];

                //     n=show.length;
                //     rows = Math.ceil(n/cols);        
                //     $galWrapUl.css({ width:$winW ,height:imgH*rows });
                //     $galWrapUlLi.css({ width:imgW ,height:imgH });
                //     $galContent.removeClass('addZoom');

                //     for(var i=0; i<hide.length; i++){
                //         $galWrapUlLi.eq(i).stop().hide();
                //     }

                //     k = -1;
                //     for(var i=0; i<rows; i++){
                //         for(var j=0; j<cols; j++){
                //             k++;
                //             if( k >= n ){
                //                 break;
                //             }
                //             $galWrapUlLi.eq(show[k]).stop().show().animate({ left:imgW*j , top:imgH*i }, 300, 'easeInOutQuad');
                //         }
                //     }

                //     $.each(show, function(idx){
                //         $galContent.eq(show[idx]).addClass('addZoom');
                //     });
                // }

                // else if( btnNum == 4 ){ /* show(zoomIn):013567     hide(zoomOut):24 */
                //     hide = [2,4];
                //     show = [0,1,3,5,6,7];

                //     n=show.length;
                //     rows = Math.ceil(n/cols);                        
                //     $galWrapUl.css({ width: ($winW) , height: imgH*rows });
                //     $galWrapUlLi.css({ width: imgW , height: imgH });
                //     $galContent.removeClass('addZoom');

                //     for(var i=0; i<hide.length; i++){
                //         $galWrapUlLi.eq(i).stop().hide();
                //     }

                //     k = -1;
                //     for(var i=0; i<rows; i++){
                //         for(var j=0; j<cols; j++){
                //             k++;
                //             if( k >= n ){
                //                 break;
                //             }
                //             $galWrapUlLi.eq(show[k]).stop().show().animate({ left:imgW*j , top:imgH*i }, 300, 'easeInOutQuad');
                //         }
                //     }

                //     $.each(show, function(idx){
                //         $galContent.eq(show[idx]).addClass('addZoom');
                //     });
                // }
            }

            galleryresizeFn();
            setTimeout(galleryresizeFn, 100);

            $(window).resize(function(){
                galleryresizeFn();
                setTimeout(galleryresizeFn, 100);
            });

            // 갤러리버튼 클릭이벤트
            $galBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        btnNum = idx;
                        // console.log('idx',idx);
                        // console.log(btnNum);
                        galleryresizeFn();               
                        $navLiA.removeClass('addColor');
                        $span.removeClass('addMove');
                        $navLiA.eq(idx).addClass('addColor');
                        $span.eq(idx).addClass('addMove');
                    }
                });
            });
        },
        section8Fn:function(){
            var $li = $('#section8 .content ul li');
            var $imgContentW = $('#section8 .img-content').innerWidth();
            var imgContentH = $imgContentW * 1.605961538;
                $li.css({ height:imgContentH });


            function resizeFn(){
                $li = $('#section8 .content ul li');
                $imgContentW = $('#section8 .img-content').innerWidth();
                imgContentH = $imgContentW * 1.605961538;

                $li.css({ height:imgContentH });
            }
            
            resizeFn();
            setTimeout(resizeFn, 100);

            $(window).resize(function(){
                setTimeout(resizeFn, 100);
            });


        // 페럴럭스
        var t = 0;
        $(window).scroll(function(){

            if( $(window).scrollTop() >= $('#section8').offset().top-800  ){
            if(t==0){
                t=1;
                $('#section8 .wrap .gap .container .title').addClass('addsec8');     
                $('#section8 .wrap .gap .container .content ul li').addClass('addsec8');          
                }       
            }

            if( $(window).scrollTop() == 0 ){
            t=0;
            $('#section8 .wrap .gap .container .title').removeClass('addsec8');     
            $('#section8 .wrap .gap .container .content ul li').removeClass('addsec8');                  
            }
        }); 

        },
        section9Fn:function(){

        // 페럴럭스
        var t = 0;
        $(window).scroll(function(){

            if( $(window).scrollTop() >= $('#section9').offset().top-800  ){
            if(t==0){
                t=1;
                $('#section9 .wrap .gap .container .title').addClass('addsec9');     
                $('#section9 .wrap .gap .container .content ul li').addClass('addsec9');          
                }       
            }

            if( $(window).scrollTop() == 0 ){
            t=0;
            $('#section9 .wrap .gap .container .title').removeClass('addsec9');     
            $('#section9 .wrap .gap .container .content ul li').removeClass('addsec9');                  
            }
        }); 

        },
        section10Fn:function(){
            var $win       = $(window);
            var $winW      = $(window).innerWidth();
            var $ulH       = $('#section10 .content ul').innerHeight();
            var $img       = $('#section10 .img-wrap');
            var $imgW      = $('#section10 .img-wrap').innerWidth();
            var $imgH      = $('#section10 .img-wrap').innerHeight();
            var $submit    = $('#section10 .submit');
            var $inputWrap = $('#section10 .input-wrap');
            var $name      = $('#section10 .input-wrap #name');
            var $email     = $('#section10 .input-wrap #email');
            var $tel       = $('#section10 .input-wrap #tel');
            var $text      = $('#section10 .input-wrap #text');
            var $response  = $('#secction10 .response');
            var $msgWrap   = $('#section10 .msg-wrap');

            function resizeFn(){
                $winW = $(window).innerWidth();
                $imgW = $('#section10 .img-wrap').innerWidth();
                $imgH = $('#section10 .img-wrap').innerHeight();
                $ulH = $('#section10 .content ul').innerHeight();
                if($winW > 760){
                    $img.css({ height: $ulH });
                }
                else{
                    $img.css({ height: $ulH/2.5 });
                }
        
            }

            resizeFn();
            setTimeout(resizeFn, 100);

            $win.resize(function(){
                resizeFn();
            });

            $submit.on({
                click:function(e){
                    e.preventDefault();
                    var nameVal  = $('#section10 .input-wrap #name').val();
                    var emailVal = $('#section10 .input-wrap #email').val();
                    var telVal   = $('#section10 .input-wrap #tel').val();
                    var textVal  = $('#section10 .input-wrap #text').val();

                    if(nameVal == ''){
                        $email.removeClass('addBorder');
                        $name.addClass('addBorder');
                        $name.focus();
                        return false;
                    }
                    else if(emailVal == ''){
                        $name.removeClass('addBorder');
                        $email.addClass('addBorder');
                        $email.focus();
                        return false;
                    }
                    else if(telVal == ''){
                        $name.removeClass('addBorder');
                        $email.removeClass('addBorder');
                        $tel.focus();
                        return false;
                    }
                    else if(textVal == ''){
                        $name.removeClass('addBorder');
                        $email.removeClass('addBorder');
                        $text.focus();
                        return false;
                    }
                    else{
                        $name.removeClass('addBorder');
                        $email.removeClass('addBorder');

                        $.ajax({
                            url : './php/response.php',
                            type : 'POST',
                            data : {
                                name  : nameVal, 
                                email : emailVal, 
                                tel   : telVal, 
                                text  : textVal 
                            },
                            success:function(result){
                                $response.html(result);

                                $msgWrap.fadeIn(600);
                                setTimeout(responseFn, 4000);
                                function responseFn(){
                                    $name.val('');
                                    $email.val('');
                                    $tel.val('');
                                    $text.val('');

                                    $response.html('');
                                    $msgWrap.fadeOut(600);
                                    $name.focus();
                                }
                            },
                            error:function(){
                                console.log('ajx연결실패');
                                alert('ajax연결실패');
                            }
                            
                        })
                    }
                }
            });



        // 페럴럭스
        var t = 0;
        $(window).scroll(function(){

            if( $(window).scrollTop() >= $('#section10').offset().top-800  ){
            if(t==0){
                t=1;
                $('#section10 .wrap .gap .container .content ul li.left-box').addClass('addsec10');            
                $('#section10 .wrap .gap .container .content ul li.right-box').addClass('addsec10');            
                }       
            }

            if( $(window).scrollTop() == 0 ){
            t=0;
            $('#section10 .wrap .gap .container .content ul li.left-box').removeClass('addsec10');                   
            $('#section10 .wrap .gap .container .content ul li.right-box').removeClass('addsec10');                   
            }
        }); 

        },
        section11Fn:function(){

        // 페럴럭스
        var t = 0;
        $(window).scroll(function(){

            if( $(window).scrollTop() >= $('#section11').offset().top-800  ){
            if(t==0){
                t=1;
                $('#section11 .wrap .gap .container .content ul li').addClass('addsec11');         
                }       
            }

            if( $(window).scrollTop() == 0 ){
            t=0;
            $('#section11 .wrap .gap .container .content ul li').removeClass('addsec11');                     
            }
        }); 

        },
        section12Fn:function(){
            var $slideWrap = $('#section12 .slide-wrap');
            var $slideView = $('#section12 .slide-view');
            var cnt = 0;
            var n = $('#section12 .slide').length-2-1;
            var $cube = $('#section12   .cube');
            var setId = null;
            var setId2 = null;
            var t      = 0;
            var $winW  = $(window).innerWidth();
            var $slide  = $('#section12 .slide');
            var $slideW = $('#section12 .slide').innerWidth();
            var toggle = 0;

            function resizeFn(){
                $winW  = $(window).innerWidth();
                $slideW = $('#section12 .slide').innerWidth();
                $slideWrap.stop().animate({left: -($slideW*cnt)},0)

            }

            resizeFn();
            setTimeout(resizeFn, 100);

            $(window).resize(function(){
                setTimeout(resizeFn, 100);
            });
            

            // 메인슬라이드호출
                function mainSlideFn(){
                    $slideWrap.stop().animate({left: -($slideW*cnt)},600 ,function(){
                        if( cnt > n ){
                            cnt =0;
                        }
                        if(cnt < 0) {
                            cnt = n;
                        }
                        $slideWrap.stop().animate({left: -($slideW*cnt)},0);
                        if(cnt == 0){
                            $cube.css({ transform:'perspective(600px) rotate3d(0 , 0, 0, 0deg)'});
                        }
                        else if(cnt == 1){
                            $cube.css({ transform:'perspective(600px) rotate3d(0 , 1, .2, -180deg)'});
                        }
                        else if(cnt == 2){
                            $cube.css({ transform:'perspective(600px) rotate3d(0 , 1, .8, 90deg)'});
                        }
                        else if(cnt == 3){
                            $cube.css({ transform:'perspective(600px) rotate3d(0 , 1, .8, -90deg)'});
                        }
                        else if(cnt == 4){
                            $cube.css({ transform:'perspective(600px) rotate3d(1 , 0, .6, -90deg)'});
                        }
                        else if(cnt == 5){
                            $cube.css({ transform:'perspective(600px) rotate3d(1 ,0, 1, 90deg)'});
                        }
                        pauseTimerFn(); 
                        
                    });
                }
            // 다음슬라이드함수호출
                function nextSlideCntFn(){
                    cnt++;
                    mainSlideFn();
                    
                }
            // 이전슬라이드함수 호출
                function prevSlideCntFn(){
                    cnt--;
                    mainSlideFn();
                }
            // 스와이프이벤트
                var touchstart = 0;
                var touchend   = 0;
                var mousedown  = 0;

                $slideView.on({
                    mousedown:function(e){
                        e.preventDefault();
                        pauseTimerFn();
                        mousedown = 1;

                        touchstart = e.pageX;

                    },
                    touchstart:function(e){
                        e.preventDefault();
                        pauseTimerFn();
                        mousedown = 1;

                        touchstart = e.originalEvent.changedTouches[0].pageX;                    
                    },
                    mouseup:function(e){
                        e.preventDefault();
                        pauseTimerFn();
                        mousedown = 0;
                        touchend = e.pageX;
                        touchswipeFn();
                    },
                    touchend:function(e){
                        e.preventDefault();
                        pauseTimerFn();
                        mousedown = 0;
                        touchend = e.originalEvent.changedTouches[0].pageX;
                        touchswipeFn();
                    },
                    mouseleave:function(e){
                        if( mousedown == 1 ){
                            mousedown = 0;
                            touchEnd = e.pageX;
                            touchswipeFn();
                          }
                    }
                });

                function touchswipeFn(){
                    if( touchstart - touchend > 0 ){
                        if( !$slideWrap.is(':animated') ){
                            nextSlideCntFn();
                        }
                    }
                    if( touchstart - touchend < 0 ){
                        if( !$slideWrap.is(':animated') ){
                            prevSlideCntFn();
                        }
                    }
                };

                // 오토타이머
                function autoTimerFn(){
                    setId = setInterval(nextSlideCntFn, 4000);
                }
                autoTimerFn();


                // 이벤트발생4초후 자동슬라이드
                function pauseTimerFn(){
                    clearInterval(setId);
                    clearInterval(setId2);
                    t=0;
                    setId2 = setInterval(function(){
                        t++;
                        if(t>4){
                            t=0;
                            clearInterval(setId);
                            clearInterval(setId2);
                            autoTimerFn();
                            nextSlideCntFn();
                        }
                    },1000);
                }



                //페럴럭스
                $(window).scroll(function(){
                    if( $(window).scrollTop() == 0 ){
                        toggle=0;
                        $('#section12 .wrap .gap .container .title').removeClass('addsec12');
                        $('#section12 .wrap .gap .container .content .slide-container').removeClass('addsec12');
                        $('#section12 .wrap .gap .container .content .cube .face').removeClass('addsec12');
                    }

                    if( $(window).scrollTop() >= $('#section12').offset().top-800 ){
                        if(toggle == 0){
                            toggle=1;
                            $('#section12 .wrap .gap .container .title').addClass('addsec12');
                            $('#section12 .wrap .gap .container .content .slide-container').addClass('addsec12');
                            $('#section12 .wrap .gap .container .content .cube .face').addClass('addsec12');
                        }

                    }
                });

        },
        footerFn:function(){

        },
        modalFn:function(){
            var $closeBtn  = $('#demoModal .close-btn');
            var $demoBtn   = $('#demoModal .demo-btn');
            var $demoModal = $('#demoModal');
            var $header    = $('#header');

            $closeBtn.on({
                click:function(e){
                    e.stopPropagation();
                    $demoModal.removeClass('addModal');
                    $demoModal.addClass('addModal2');
                    $('html').removeClass('addModal')
                    $header.removeClass('addHide');
                }
            });
            $demoBtn.on({
                click:function(e){
                    e.stopPropagation();
                    $('html').addClass('addModal');
                    $header.addClass('addHide');
                    $demoModal.removeClass('addModal2');
                    $demoModal.addClass('addModal');
                }
            });

            $(document).on({
                click:function(){
                    // e.preventDefault();
                    $demoModal.removeClass('addModal');
                    $demoModal.addClass('addModal2');
                    if($(window).scrollTop() == 0){
                        $header.removeClass('addHide');
                    }
                    $('html').removeClass('addModal');

                }
            });
            $demoModal.on({
                click:function(e){
                    e.stopPropagation();
                }
            });
        },
        smothScrollFn:function(){
            var $smoothBtn = $('.smoothBtn');
            var $goTopBtnWrap = $('.goTop-btn-wrap');
            var $demoModal = $('#demoModal');
            var t = 0;
            var $winW = $(window).innerWidth();
  
                $smoothBtn.on({
                  click:function(e){
                    e.preventDefault();
  
                    var url = $(this).attr('href');
                        $('html,body').stop().animate({ scrollTop: $( url ).offset().top }, 1500, 'easeInOutQuint');
                  }
                });
  
                function resizeFn(){
                  $demoModal = $('#demoModal');
                  $winW = $(window).innerWidth();
  
                  
                  if( $winW > 1200 ){
                    $demoModal.stop().show();
                  }
                  else{
                    $demoModal.stop().hide();
                  }

                  $(window).scroll(function(){
                    if($winW > 991){
                        if( $(this).scrollTop() >= 100 ){
                            if( t==0 ){
                            t = 1;
                            $goTopBtnWrap.stop().fadeIn(1000);
                            resizeFn();
                            }                  
                        }
                        else{
                            if( t==1 ){
                            t = 0;
                            $goTopBtnWrap.stop().fadeOut(1000);
                            } 
                        }
                    }
                    else{
                        if( t==1 ){
                            t = 0;
                            $goTopBtnWrap.stop().hide();
                        }
                    }
                });
                  
                }
  
                resizeFn();
                setTimeout(resizeFn, 100);
  
                $(window).resize(function(){
                    setTimeout(resizeFn, 100);
                });


  
                
        }
    };
    litho.init();
})(jQuery);