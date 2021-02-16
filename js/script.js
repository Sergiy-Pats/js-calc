jQuery('document').ready(function () {

	//jQuery('.block').append('<a href="http://google.com" target="__blank">Google</a>')
	//jQuery('#val2').val('10');

	jQuery('.act input').change(function () {
		let select = jQuery(this).val();
		if (select == '+') {
			jQuery('#chb2').prop('checked', false);
			jQuery('#chb3').prop('checked', false);
			jQuery('#chb4').prop('checked', false);
		}
		if (select == '-') {
			jQuery('#chb1').prop('checked', false);
			jQuery('#chb3').prop('checked', false);
			jQuery('#chb4').prop('checked', false);
		}
		if (select == '*') {
			jQuery('#chb1').prop('checked', false);
			jQuery('#chb2').prop('checked', false);
			jQuery('#chb4').prop('checked', false);
		}
		if (select == '/') {
			jQuery('#chb1').prop('checked', false);
			jQuery('#chb3').prop('checked', false);
			jQuery('#chb2').prop('checked', false);
		}
		jQuery('#action').html(select);



	})
	jQuery('.button').on('click', function () {

		let value1 = jQuery('#val1').val();
		let value2 = jQuery('#val2').val();
		let act1 = jQuery('#action').html();

		if (act1 == '+') {

			var answ = +value1 + +value2;
		}
		else if (act1 == '-') {

			var answ = +value1 - +value2;
		}
		else if (act1 == '*') {

			var answ = +value1 * +value2;
		}
		else if (act1 == '/') {

			var answ = +value1 / +value2;
		}
		jQuery('#answer').html(answ);


	})


})
