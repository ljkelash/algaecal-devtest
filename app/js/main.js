$(function() {
    var apiUrl = 'https://www.algaecal.com/wp-json/acf/v3/options/options'
    $.getJSON(apiUrl, function(data) {
        console.log(data);
        var data = data.acf,
            defaultPhone = data['default_phone_number'],
            sevenYrFullCp = data['7yr_full_copy'];

        // Show Seven Year Guarantee text on modal launch
        $('#seven-yr-gtd-modal').on('show.bs.modal', function() {
            $('#seven-yr-full-cp').html(sevenYrFullCp);
            // resize the large image
            var modal = $(this);
            modal.find('img.size-large').addClass('img-fluid');
        })


    }).fail(function() {
        // TODO Error Fallbacks
        console.log('error');
    });
});