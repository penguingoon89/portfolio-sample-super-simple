// 메뉴 클릭 시 원하는 곳으로 이동
var moveScroll = function(menu){
  var offset = $("."+ menu).offset();

  //아래의 선택자는 브라우저 호환성을 고려한 것. 
  $('html, body').animate({scrollTop : offset.top}, 500);
}

$(document).ready(function(){

  $('.tag').hide()
  $('#about-mind').hide()
  $('#about-history').hide()
  $('.guage').css('width', 0)
  
  // 홈 파트 소개글
  var typingIdx=0;
  var typingTxt = '종로 일대를 주름잡고 있는\n김좌진 장군의 아들 김두한이올시다.' // 타이핑될 텍스트를 가져온다 
  typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
  var tyInt = setInterval(typing, 100); // 반복동작 

  function typing(){ 
    if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
      if(typingTxt[typingIdx] == '\n'){
        $(".who").append('<br />'); // 한글자씩 이어준다. 
      }else{
        $(".who").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
      }
      typingIdx++; 
      } else{ 
        clearInterval(tyInt); //끝나면 반복종료 
        $('.tag').fadeIn(3000)
      } 
  }  

  //특정 영역에서 이벤트 발생하게 하기
  var isAboutScrollCome = false
  // window는 로드가 끝난 후
  $(window).on('scroll', function(){
    if(!isAboutScrollCome){
      if($(window).scrollTop() > $('.about').offset().top-150){
        isAboutScrollCome = true
        $('#about-mind').slideToggle(1000)
        $('#about-history').slideToggle(1000)
      }
    }
  })

  var isSkillScrollCome = false

  $(window).on('scroll', function(){
    if(!isSkillScrollCome){
      if($(window).scrollTop() > $('.skills').offset().top-150){
        isSkillScrollCome = true
        $($('.guage')[0]).animate({'width': '90%'}, 1000)
        $($('.guage')[1]).animate({'width': '80%'}, 1000)
        $($('.guage')[2]).animate({'width': '100%'}, 1000)
      }
    }
  })

})