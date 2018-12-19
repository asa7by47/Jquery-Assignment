$(document).ready(function(){

 $(".slidText h2").click(function(){
        
        $(this).next().slideToggle(400);
         $(".slidText div").not($(this).next()).slideUp(400);
        console.log("done")
    });
$(".countdown_timer")
  .countdown("2018/12/19", function(event) {
    $(this).text(
      event.strftime('%D Days %H Hours %M Minutes  %S  Seconds')
    );
});

})
function checkKey(key) {
  return  key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';
}
$("textarea").keydown(function(){
    
    var textLength = $("textarea").val().length, 
        maxNum = 100 - textLength  
    console.log(textLength)
    
    if(textLength <= 100)
        {
            $(".maxchars").text(maxNum)
            $(".textToRemove").show()   
        }
        else{
            $(".maxchars").text("your available character finished")
            $(".textToRemove").hide();
            return checkKey(event.key)
        }
})








