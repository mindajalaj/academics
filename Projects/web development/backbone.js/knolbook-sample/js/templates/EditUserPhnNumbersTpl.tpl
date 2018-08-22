<div class="edit-user-phone-number-outer" style="">
	<i class="<%if(phoneType == 'home'){print('glyphicon glyphicon-home')}%>
	<%if(phoneType == 'work'){print('glyphicon glyphicon-phone-alt')}%>
	<%if(phoneType == 'personal'){ print('glyphicon glyphicon-phone')}%>"></i> 
	
	 <input class="user-phone" type="tel" name="<%=phoneType%>" value="<%= phoneNumber %>"  placeholder="Personal Number" required />
	<%if(phoneType!='work'){%>	<button class="remove-phon"><span class="glyphicon glyphicon-remove"style="color:red;"></span></button>
	<%}%>
</div>

 