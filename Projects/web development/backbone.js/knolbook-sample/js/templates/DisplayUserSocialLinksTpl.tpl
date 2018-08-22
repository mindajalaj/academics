<% count=0 %>
 <% if(socialFB){%>
	<div class="display-social-link-facebook" style="">
	<img src="assets/images/icon_facebook.png" style=" background-color:#3a5795;">
	 <a href="<%=socialFB%>">
	 	<span style="color:#00003D"><%=socialFB%></span>
	</a>
 	</div>
 	<%count++%>
<%} %>
<%if(socialLinkedin){%>
<div class="display-social-link-others" style="">
	<img src="assets/images/icon_linkedin.png" style=" background-color:#4875B4;">
	 <a href="<%=socialLinkedin%>">
	 <span style="color:#00003D"><%=socialLinkedin%></span> 
	</a>
</div>
<%count++ }%>
<%if(socialTwitter){%>
<div class="display-social-link-others" style="">
	<img src="assets/images/icon_twitter.png" style=" background-color:#33CCFF;">
	  <a href="<%=socialTwitter%>">
	 	<span style="color:#00003D"><%=socialTwitter%></span>
	</a> 
</div>
<%count++ } %>
<%if(socialGoogle){%>
<div class="display-social-link-others" style="">
	<img src="assets/images/icon_google.png" style=" background-color:#D14836;">
	  <a href="<%=socialGoogle%>">
	 	<span style="color:#00003D"><%=socialGoogle%></span>
	</a>
</div>
<%count++ }%>
<% if(count===0) print("!!...no links..!!")%>
 
