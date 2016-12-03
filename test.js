$('h1').on('click', function(){
    alert('You clicked on the h1. You must feel proud of yourself.');
});

$("input").keypress(function(){
    alert('You press the magic button!');
});

$("li").on('click', function(){
    $(this).remove();
});