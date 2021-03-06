<!-- Area for links to social bar -->
<div id="socialBar">
	<div class="social-bar-content">
		<a href="https://www.facebook.com/gustavo.guimaraes.940" 
			class="facebook-button" target="_blank">
		</a>
		<a href="https://www.instagram.com/gustavorag/"
			class="instagram-button" target="_blank">
		</a>
		<a href="https://www.linkedin.com/in/gustavo-guimaraes-softdev/"
			class="linkedin-button" target="_blank">
		</a>
	</div>
</div>
<div id="navBar">
	<div class="nav-bar-content">
		<a id="logo" href="#"><img src="images/logo-120.png" alt="VFS Logo"></a>
		<h1 id="title"><span class="first-letter">V</span>ancouver <span class="first-letter">F</span>or <span class="first-letter">S</span>tudents</h1>
		<ul id="navMenu">
			<li>
				<a id="cityButton" href="pages/the_city.html" 
				onmouseover="showSubMenu('subMenuTheCity')"
				onmouseout="hideSubMenu('subMenuTheCity','cityButton')">The City</a>
			</li>
			<li>
				<a id="studyButton" href="pages/studying.html" 
				onmouseover="showSubMenu('subMenuStudying')"
				onmouseout="hideSubMenu('subMenuStudying','studyButton')">Studying</a>
			</li>
			<li><a id="aboutButton" href="pages/about.html" ">About us</a></li>
			<li><a id="contactButton" href="pages/contact.html" ">Contact</a></li>
		</ul>
		<div id="subMenuTheCity" class="sub-menu hidden" 
			onmouseover="showSubMenu('subMenuTheCity','cityButton')"
			onmouseout="hideSubMenu('subMenuTheCity','cityButton')">
			<ul class="sub-menu-nav">
				<li><a href="pages/city/about_vancouver.html">About Vancouver</a></li>
				<li><a href="pages/city/living.html">Living</a></li>
				<li><a href="pages/city/moving_around.html">Moving Around</a></li>
			</ul>
		</div>
		<div id="subMenuStudying" class="sub-menu hidden"
			onmouseover="showSubMenu('subMenuStudying','studyButton')"
			onmouseout="hideSubMenu('subMenuStudying','studyButton')">
			<ul class="sub-menu-nav">
				<li><a href="pages/study/course_type.html">Choosing course Type</a></li>
				<li><a href="pages/study/eng_schools.html">Schools for English</a></li>
				<li><a href="pages/study/colleges.html">Colleges</a></li>
			</ul>
		</div>
	</div>
	
</div>