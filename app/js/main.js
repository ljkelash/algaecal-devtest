$(function() {
    var apiUrl = 'https://www.algaecal.com/wp-json/acf/v3/options/options'
    $.getJSON(apiUrl, function(data) {
        console.log(data);
        var data = data.acf,
            defaultPhone = data['default_phone_number'],
            officeHours = data['office_hours'],
            sevenYrFullCp = data['7yr_full_copy'];

        // Setup Call Link to Default Phone
        $('#phone-link').attr('href', 'tel:+' + defaultPhone);
        $('.default-phone').hide().text(defaultPhone).fadeIn('fast');

        // Get current day and time
        var today = new Date().getDay(),
            now = new Date(Date.now()),
            currentTime = now.getHours() + '' + now.getMinutes();

        // show speak-now text if we're inside business hours
        if (currentTime >= officeHours[today].starting_time && currentTime <= officeHours[today].closing_time) {
            $('.speak-now').removeClass('d-none');
        }

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