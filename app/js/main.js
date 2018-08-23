$(function() {
    var apiUrl = 'https://www.algaecal.com/wp-json/acf/v3/options/options';
    $.getJSON(apiUrl, function(data) {
        var data = data.acf,
            defaultPhone = data['default_phone_number'],
            officeHours = data['office_hours'],
            sevenYrFullCp = data['7yr_full_copy'];

        // Setup Call Link to Default Phone
        $('#phone-link').attr('href', 'tel:+' + defaultPhone);
        $('.default-phone').hide().text(defaultPhone).fadeIn('fast');

        // Get current day and time (PDT Time Zone)
        var d = new Date(),
        	today = d.getDay(),
            currentHour = addZero(d.getUTCHours() - 7),
            currentMinute = addZero(d.getMinutes()),
            currentTime = currentHour + '' + currentMinute;

        // display hours and minutes with two digits
      	function addZero(i) {
        	if (i < 10 ) {
        		i = '0' + i;
        	}
        	return i;
        }

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
        // Prevent broken links
        $('#phone-link, #modal-btn').hide();
        console.log('error');

    });

    // get Wista video handle
    window._wq = window._wq || [];
    _wq.push({
        id: "cecdwaq3dz",
        onReady: function(video) {
            var bundles = $('#bundles');
            bundles.hide();
            // Display bundles at 2:13
            video.bind('timechange', function(t) {
                if (t > 133) {
                    $('#bundles').removeClass('d-none').slideDown(700);
                    return video.unbind;
                }
            });
        }
    });
});