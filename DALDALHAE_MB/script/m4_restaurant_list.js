$(document).ready(function() {
    var $jjim = $('.jjim_list li .jjim');
    $jjim.on('click', function(){
        $(this).toggleClass('on');
    });
    var $like = $('.jjim_list li .like');
    $like.on('click',function(){
        $(this).toggleClass('on');
    });

    /* 문서 로딩시 보여지도록 함수 호출
    load(보여질 목록의 부모태그, 처음에 보여질 리스트 개수)      */
    load('.jjim_list', '4');    

    //클릭시 추가로 보여지기
    $('.button .more').on('click', function () {
        //load(보여질 목록의 부모태그, 추가될 리스트 개수, 더보기 버튼을 담는 부모)
        load('.jjim_list', '4');
    })

    function load(id, cnt) {
        var more_list = id + ' .lists:not(.active)';   //#js-load .js-load:not(.active) : 현재 남겨진 li 선택자
        var more_length = $(more_list).length;    //남겨진 리스트들의 개수
        var more_total_cnt;  //추가될 리스트 개수
    
        if (cnt < more_length) { //남겨진 리스트의 개수가 클릭시 보여질 개수보다 클 경우
            more_total_cnt = cnt;  //한번에 보여질 개수를 more_total_cnt에 대입 시키기
        } else {                 //남겨진 개수가 적다면
            more_total_cnt = more_length; //남겨진 개수를 more_total_cnt이란 변수에 대입 시켜라
            $('.button .more').hide()   //남겨진 개수가 적으므로 더이상 more를 클릭할수 없도록 버튼을 제거
        }
    
        //클릭할때 마다 4개씩active란 class명 추가하기
        $(more_list + ':lt(' + more_total_cnt + ')').addClass('active');
        console.log('남겨진 리스트들의 개수 : ' + more_length, ', 추가될 리스트 개수 : ' +  more_total_cnt);
        }

        $("button.filter").click(function(){
            $(".layer_bg").show();  
        });

                
        $(".layer_bg .close").click(function(e){
            e.preventDefault();
            $(".layer_bg").hide();
        });
        $(".layer_bg .ok").click(function(e){
            e.preventDefault();
            $(".layer_bg").hide();
            var choiceAll = $('.filter_area .now .add').html();
            console.log(choiceAll);
            $('.choiceAll').html(choiceAll);

        });

        $(document).ready(function (){
        var $btn = $('.btn_group button');
        $btn.on('click', function(){
            var choiceTxt = ''; 
            $(this).toggleClass('btnOn');

            //클릭할때 마다 버튼 전체를 순회하면서 .choice라는 클래스를 가지고 있을 경우 변수 choiceTxt에 저장한다
            $btn.each(function () {
                if ($(this).hasClass('btnOn')) {
                    choiceTxt += '<span>' + $(this).text() + '</span>';
                }
            });

            //console.log(choiceTxt);
            $('.filter_area .now .add').html(choiceTxt);
        });

	});
});