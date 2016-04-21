$(function() { 

	profileAddCss();

	profileHoverListener();

	profileOnClick();
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

	$('.endorse-plus').show();
	$('.endorse-plus').css('display', 'inline-flex');
	$('.endorsing').find('p').hide();
}

function profileOnClick() {

	/* Begin Endorse */

	/* End Endorse */
}

function generaterClickEndorse(idParent, classCurrent, classTarget){
	$('#' + idParent).find('.' + classTarget).css('display', 'inline-flex');
	$('#' + idParent).find('.' + classCurrent).hide();
}

function generaterMouseOver(idParent) {
	$('#' + idParent).find('p').show();
}

function generaterMouseOut(idParent) {
	$('#' + idParent).find('p').hide();
}