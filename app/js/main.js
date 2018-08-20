$(function() {
    var apiUrl = 'https://www.algaecal.com/wp-json/acf/v3/options/options'
    $.getJSON(apiUrl, function(data) {
        console.log(data);
        var data = data.acf,
            defaultPhone = data['default_phone_number'],
            sevenYrTitle = data['7yr_title'],
            sevenYrShortCp = data['7yr_short_copy'],
            sevenYrFullCp = data['7yr_full_copy'],
            sevenYrSealUrl = data['seven_year_guarantee_seal'].url;

        console.log(sevenYrTitle);
        $('.seven-yr-seal').attr('src', sevenYrSealUrl);
        $('.seven-yr-title').text(sevenYrTitle);
        $('.seven-yr-short-cp').html(sevenYrShortCp);


    }).fail(function() {
        // TODO Error Fallbacks
        console.log('error');
    });
});