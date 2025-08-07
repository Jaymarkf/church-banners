import $ from 'jquery';
import 'slick-carousel';

export default function(){
    $(document).ready(function(){
        $('.gallery-box-init').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            centerMode: true,
            focusOnSelect: true
        });
        $('.card-header button').on("click",function(){
            var t=$(this).attr('data-target');
            $(t).toggle();
            $('i',this).toggleClass('fa-angle-right');
            $('i',this).toggleClass('fa-angle-down');
            $('i',this).toggleClass('grey');
        });
    
        window.a=0;
        $('.lmore').on("click",function(){
            if(window.a==0){
                $('.dnone').show();
                window.a=1;
            }else{
                $('.dnone1').show();
                $('.lmore').hide();
            }
        });
    });
}
