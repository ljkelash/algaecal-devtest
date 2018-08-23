// include latest version of jQuery from Google CDN

function custom_jquery() {
	if(!isadmin()){
		// remove the version included in WP
		wp_deregister_script('jquery');

		// use latest version: 3.3.1
    	wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', false, '3.3.1');
    	wp_enqueue_script('jquery');
	}
}
add_action('wp_enqueue_scripts', 'custom_jquery');