var header_elements = '';

header_elements += '<section id="sidebar">';
				
header_elements += '<ul id="languages">';
header_elements += '<li><a href="#body"><span class="image"><img src="images/flags/flag-denmark.gif" alt="Denmark Flag" title="Denmark Flag"></span><span class="text" onclick="showDanish()">Dansk</span></a></li>';					
header_elements += '<li><a href="#body"><span class="image"><img src="images/flags/flag-philippines.gif" alt="Philippines Flag" title="Philippines Flag"></span><span class="text" onclick="showFilipino()">Tagalog</span></a></li>';
header_elements += '<li><a href="#body"><span class="image"><img src="images/flags/flag-france.gif" alt="France Flag" title="France Flag"></span><span class="text" onclick="showFrench()">Française</span></a></li>';
header_elements += '<li><a href="#body"><span class="image"><img src="images/flags/flag-germany.gif" alt="Germany Flag" title="Germany Flag"></span><span class="text" onclick="showGerman()">Deutsch</span></a></li>';
header_elements += '</ul>';

header_elements += '<ul id="others">';
header_elements += '<li><a href="justforfun.html" id="justforfun"><span>Just for Fun</span></a></li>';
header_elements += '<li><a href="other-informations.html" id="other-info"><span class="language-english language show">other Informations</span><span class="language-danish language hide">andre oplysninger</span><span class="language-filipino language hide">ibang Impormasyon</span><span class="language-french language hide">autres renseignements</span><span class="language-german language hide">andere Informationen</span></a></li>';
header_elements += '<li><a href="books.html" id="books">Books to Read</a></li>';
header_elements += '<li><a style="font-size: 1rem;" href="monthly-news.html">Monthly News</a></li>';
header_elements += '<li><span id="other-groups"><span class="language-english language show">other Groups</span><span class="language-danish language hide">andre grupper</span><span class="language-filipino language hide">ibang Grupo</span><span class="size-1 language-french language hide">d’autres Groupes</span><span class="size-1 language-german language hide">andere Gruppen</span><a href="osmth.html">OSMTH</a><a href="kta.html">KTA</a><a href="smotj.html">SMOTJ</a></span></li>';
header_elements += '</ul>';
header_elements += '<div id="seal"><img src="images/seal.jpg" alt="Seal"><a target="_blank" href="http://medievalshoppe.com.au/"><img style="margin-top: 32px;" src="images/medievalshoppe.jpg" alt=""></a></div>';
header_elements += '</section>'; /* sidebar */
header_elements += '<nav id="main-menu">';
header_elements += '<ul>';
header_elements += '<li><a href="index.html"><span class="language-english language show">Home</span><span class="language-danish language hide">Hjemmeside</span><span class="language-filipino language hide">Home</span><span class="language-french language hide">Accueil</span><span class="language-german language hide">Haupt-Website</span></a></li>';
header_elements += '<li><a target="_blank" title="templarknightsaustralia@gmail.com" href="mailto:templarknightsaustralia@gmail.com"><span class="language-english language show">Contact Us</span><span class="language-danish language hide">Kontakt os</span><span class="language-filipino language hide">Contact Us</span><span class="language-french language hide">Contactez nous</span><span class="language-german language hide">Kontakt</span></a></li>';
header_elements += '<li><a href="events.html"><span class="language-english language show">Events</span><span class="language-danish language hide">Tilfælde</span><span class="language-filipino language hide">Events</span><span class="language-french language hide">Des événements</span><span class="language-german language hide">Ereignisse</span></a></li>';
header_elements += '<li><a href="gallery.html"><span class="language-english language show">Gallery</span><span class="language-danish language hide">Galleri</span><span class="language-filipino language hide">Galeriya</span><span class="language-french language hide">Gallerie</span><span class="language-german language hide">Galerie</span></a></li>';
header_elements += '<li><a href="history.html"><span class="language-english language show">History</span><span class="language-danish language hide">Historie</span><span class="language-filipino language hide">Kasaysayan</span><span class="language-french language hide">Histoire</span><span class="language-german language hide">Vergangenheit</span></a></li>';
header_elements += '<li><a href="ourHistory.html"><span class="language-english language show">Our History</span><span class="language-danish language hide">vores Historie</span><span class="size-1 language-filipino language hide">Aming Kasaysayan</span><span class="language-french language hide">notre Histoire</span><span class="size-1 language-german language hide">unsere Vergangenheit</span></a></li>';
header_elements += '<li><a href="membership.html"><span class="language-english language show">Membership</span><span class="language-danish language hide">Medlemskab</span><span class="language-filipino language hide">Membership</span><span class="language-french language hide">Adhésion</span><span class="language-german language hide">Mitgliedschaft</span></a></li>';
header_elements += '<li id="facebook-icon"><a target="_blank" href="https://www.facebook.com/Order-of-the-World-Templar-Knights-Der-Welt-Tempelherren-Orden-1465017220440357"><img src="images/fb-icon.png" alt="Facebook Icon"></a></li>';

header_elements += '<li id="coat-of-arms"><img src="images/adolf-coat-of-arms.jpg" alt="Adolf Coat of Arms" title="Adolf Coat of Arms"></li>';


header_elements += '</ul></nav>';

document.write(header_elements);