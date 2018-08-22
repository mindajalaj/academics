<div class="add-ph-number" style="">
	<i class="<%if(type == 'home'){print('glyphicon glyphicon-home')}%>
	<%if(type == 'work'){print('glyphicon glyphicon-phone-alt')}%>
	<%if(type == 'personal'){ print('glyphicon glyphicon-phone')}%>"></i>
	<input type="tel" name="<%=type%>"  class="addedNumber "  value="<%=phn%>" disabled="true"/>
	<button class="remove-phn"><span class="glyphicon glyphicon-remove" style="color:red;"></span></button>
</div> 
 <!-- <%print(type)%><%print(phn)%> -->