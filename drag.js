document.addEventListener('DOMContentLoaded',()=>{
    
    getDecoImageList();
    getBackgroundColorList();
    getCharacterImageList();
    $('.draggable').draggable();
    var zIndex = 2;
    $('.draggable').click(function(){
        $(this).css('z-index', zIndex);
        zIndex++;
    });
});

function getDecoImageList() {
    for (category in imgFile) {
        var imgNumber = imgFile[category];
        for (imgName in imgNumber) {
            $('#' + category).append('<li><span class="draggable"><img src="./img/' + category + imgNumber[imgName] + '.png"><span></li>');
        }
    }
}

function getBackgroundColorList() {
    var count = bgColor.length;
    while (count > 0) {
        $('#background').append('<li></li>');
        count --;
    }
    $('#background li').each(function(index){
        $(this).css('background-color', bgColor[index]);
        $(this).click(function(){
            $('#characterContainer').css('background-color', bgColor[index]);
        })
    });
}

function getCharacterImageList() {
    var count = characterFile.length;
    while (count > 0) {
        $('#selectCharacter').append('<li></li>');
        count --;
    }
    $('#selectCharacter li').each(function(index){
        $('#selectCharacter li').eq(index).css('background-image','url(./img/' + characterFile[index] + '.png');
    });
    $('#selectCharacter li').click(function(){
        var selected = $(this).index();
        $('#character').css('background-image','url(./img/' + characterFile[selected] + '.png');
    });
}