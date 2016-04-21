$(function() { 

	profileAddCss();

	profileHoverListener();
});

function profileHoverListener() {

	/* profile infor header */
	generateHoverListener('#profile-name-edit');

	generateHoverListener('#profile-career-current-edit');
}

function profileAddCss() {
	/* profile infor header */	
	$('#profile-name-edit').find('h4').addClass('color-white');
	$('#profile-career-current-edit').find('h5').addClass('color-white');	

	$('#profile-name-edit').find('.edit-field-icon').hide();
	$('#profile-career-current-edit').find('.edit-field-icon').hide();
}
