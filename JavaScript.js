function show(st) {
    var mdiv = document.getElementById('mydiv');
    mdiv.innerHTML = 'Привет ' + st + '!';
}
$(document).ready(function () {
    $('#mydiv').text('Hello');
})
$(document).ready(function () {
    $('.green').css('background', '#0000ff');
})

/*$(document).ready(function () {
    $('#button').click(function () {
        var text = $('#text').val();
        alert(text);
    })
})
$(document).ready(function () {
    $('#button').click(function () {
        $('#block').css('width', '100px');
    })
})*/
$(document).ready(function () {
    $('#button').click(function () {
        var val = $('#block').children('p').text();
        alert(val);
    })
})