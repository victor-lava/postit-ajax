$(document).ready(function() {

    $('#search').on('submit', function(event) {
        event.preventDefault();

        console.log($(this).serialize());

        $.ajax({
            method: 'GET',
            dataType: 'json',
            url: $(this).attr('action'),
            data: $(this).serialize(),
            success: function(data, status) {

                $('p').remove();

                data.data.forEach(function(value, index) {

                    let p = $('<p>');

                    p.text(value.post_code + ' ' + value.address);

                    $('#search').append(p);
                    console.log(value);

                })

                if(data.data.length === 0) {
                    $('#search').append('<p>Nėra duomenų</p>');
                }
            }
        })


    });


});
