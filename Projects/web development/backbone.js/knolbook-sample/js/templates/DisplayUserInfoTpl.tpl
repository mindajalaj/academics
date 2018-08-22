<section id = "#<%= userFName %>.<%= userLName %>">
	<div class= "container col-sm-12 my-centre-container"  >
		<div class = "row  ">
			<div class = "col-md-12 my-name-headin" >
				<h3 class="my-name my-letter-cap"><%= userFName %> <%= userLName %>
				<button class="btn btn-md btn-primary text-right edit-user edit-user-link" >Edit Info</button>
				<button class="btn btn-md btn-primary text-right back-link visible-xs" style="float:right;" >Back</button>
				
				
				</h3>
			</div>

		</div>
		<div class="row my-userifo-base"  >
			<div class=" col-md-4 col-sm-4 lf-padding my-centre-details">
				<div>
					<img src="<%= userPic %>" class="img-circle img-responsive my-user-image" /><br/>
				</div>
				<div  class = "edit-user-info-outer-div" style="">
					<div class="row edit-user-phone-number-outer-container" style="">
						<div class="edit-user-phone-number-heading " style="">
							<span class="my-color" style="">Phone Numbers: </span> 
						</div>
						<div class="display-user-phn my-existing-phone-content-area" style="">
							<!--<div style="font-weight: 500;
								font-size:18px;margin-left:10px; margin-top:7px;">
								<i class="glyphicon glyphicon-home"></i> 2323228393
							</div> 
							<div style="font-weight: 500;
								font-size:18px;margin-left:10px;margin-top:5px;">
								<i class="glyphicon glyphicon-phone"></i>  9892483234
							</div>
							<div style="font-weight: 500;
								font-size:18px;margin-left:10px;margin-top:5px;">
								<i class="glyphicon glyphicon-phone-alt"></i>  8233329304
							</div>-->	
						</div>						
					</div>
				</div>
				<div  class = "edit-user-info-outer-div">
					<div class="row edit-user-phone-number-outer-container" style="">
						<div class=" edit-user-phone-number-heading" style="">
							<span class="my-color" style="">Social Links:</span> 
						</div>
						<div class="display-social-links">
							<!-- <div style="font-weight: 480;
								font-size:15px;margin-left:10px; margin-top:7px;">
								<img src="assets/images/icon_google.png" style=" background-color:#D14836;">
								 <a href="">
								 	<span style="color:#00003D">GooglePlus</span>
								</a>
							 
							</div> 
							<div style="font-weight: 480;
								font-size:15px;margin-left:10px;margin-top:5px;">
								<img src="assets/images/icon_linkedin.png" style=" background-color:#4875B4;">
								 <a href="">
								 <span style="color:#00003D">LinkedIn</span> 
								</a>
							</div>
							<div style="font-weight: 480;
								font-size:15px;margin-left:10px;margin-top:5px;">
								<img src="assets/images/icon_twitter.png" style=" background-color:#33CCFF;">
								 <span style="color:#00003D">Twitter</span> 
							</div>
							<div style="font-weight: 480;
								font-size:15px;margin-left:10px;margin-top:5px;">
								<img src="assets/images/icon_facebook.png" style=" background-color:#3a5795;">
								 <span style="color:#00003D">Facebook</span> 
							</div> -->
						</div>							
					</div>
				</div>

			</div><!-- end of middle area of pic........-->
			<div class=" col-md-7 col-sm-7 edit-user-info-right-hand-side-container" style="">
				<div class=" " style="overflow-y:auto;">
					<div class="edit-user-information-heading-style" style="">Information</div>
					<div class="edit-user-phone-number-heading" style="">
					<h4 class="my-letter-cap col-md-offset-3 edit-user-content-display-details"  style=""><%= userDesignation %></h4>
					<span class="my-color" style="">Designation</span>
					</div>
					
					<div class="edit-user-phone-number-heading" style="">
					<h4 class="col-md-offset-3 edit-user-content-display-details"style=""><%= userEmail %></h4>
					<span  class="my-color" style="">Email</span> 
					</div>
					
					<div class="edit-user-phone-number-heading" style="">
					<h4 class="my-letter-cap col-md-offset-3 edit-user-content-display-details"style=""><%= deptName %></h4>
					<span  class="my-color" style="">Department</span> 
					</div>
					<div class="edit-user-phone-number-heading" style ="">	
					<h4>
					<div class="display-user-prods  col-md-offset-3">
					<span class="my-letter-cap edit-user-content-display-details" style="">abc abc abc</span>
					</div>
					</h4>
					<span  class="my-color" style="">Products</span>
					</div>

					<div class="edit-user-phone-number-heading" style="">
					<h4 class="my-letter-cap col-md-offset-3 edit-user-content-display-details"style=""><%=userManagedBy%></h4>
					<span  class="my-color" style="">Managed By</span> 
					</div>

						<div class="edit-user-phone-number-heading" style="">
					<h4 class="my-letter-cap col-md-offset-3 edit-user-content-display-details"style=""><%= userGender%></h4>
					<span  class="my-color" style="">Gender</span> 
					</div>
					
					<div class="edit-user-phone-number-heading" style="">
					<h4 class="my-letter-cap col-md-offset-3 edit-user-content-display-details"style="">February, 19</h4>
					<span  class="my-color" style="">Birthday</span> 
					</div>
					
					
					<div class="edit-user-phone-number-heading" style="">
					<h4 class="my-letter-cap col-md-offset-3 edit-user-content-display-details" style=""><%= userCity %>, <%= userCountry %></h4>
					<span  class="my-color" style="">Location</span> 
					</div>

				</div>

			</div>

				
		</div>
	</div><!-- end of section container -->
</section>

