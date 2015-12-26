function hideLanguages() {
				
	var allLanguage = document.querySelectorAll( '.languages' );

	for ( i = 0, length = allLanguage.length ; i < length ; i++ )
	{
		allLanguage[i].classList.remove( 'show' );
		allLanguage[i].classList.add( 'hide' );
	}
}


function showLanguage(language) {
	
	for ( i = 0, length = language.length ; i < length ; i++ )
	{
		language[i].classList.remove( 'hide' );
		language[i].classList.add( 'show' );
	}
}


function showDanish() {
	
	hideLanguages();
	
	var danish = document.querySelectorAll( '.language-danish' );
	
	showLanguage(danish);
}


function showFilipino()
{
	hideLanguages();
	
	var filipino = document.querySelectorAll( '.language-filipino' );
	
	showLanguage(filipino);
}


function showFrançaise()
{
	hideLanguages();
	
	var française = document.querySelectorAll( '.language-française' );
	
	showLanguage(française);
}


function showGerman() {
	
	hideLanguages();
	
	var german = document.querySelectorAll( '.language-german' );
	
	showLanguage(german);
}