<section>
	<div class= "container col-sm-12 my-centre-container"  >
		<form id="#addAUser">	
			<div class = "row  ">
				<div class = "col-md-12 my-name-headin" >
					<h5 class="my-name my-letter-cap">
						
					<label>
						 *Name:		
					</label>
					<input type="text" name="usersFName"  placeholder="First Name" value="<%= userFName %>" required />
			
					
					<input type="text" name="usersLName"  placeholder="Last Name " value="<%= userLName %>" required/><span class = "error">* fields in red are required</span>
					</h5>
				</div>

			</div>
			<div class="row my-userifo-base"  >
				<div class=" col-md-4 col-sm-4 lf-padding my-centre-details">
					<div>
						<img src="<%= userPic %>" class="img-circle img-responsive my-user-image" /><br/>
					</div>
					<div  class = "edit-user-info-outer-div" style="">
						<div class="row edit-user-phone-number-outer-container" style="">
							<div  class="edit-user-phone-number-heading"  style="">
								<span  class="my-color" style="">Phone Numbers: </span> 
							</div>
							


							<div class= "edit-user-phn edit-user-phone-numbers-content-area" style="">
								<!-- <div style="font-weight: 500;
										font-size:15px;margin-left:10px; margin-top:7px;">
										<i class="glyphicon glyphicon-home"></i> 
										<input type="tel" name="phoneNumberH" autofocus placeholder="Home Number" />
									</div> 
									<div style="font-weight: 500;
										font-size:15px;margin-left:10px;margin-top:5px;">
										<i class="glyphicon glyphicon-phone"></i> 
										 <input type="tel" name="phoneNumberP"  placeholder="Personal Number"  />
									</div>
									<div style="font-weight: 400;
										font-size:15px;margin-left:10px;margin-top:5px;">
										<i class="glyphicon glyphicon-phone-alt"></i>
										 <input type="tel" name="phoneNumberW" autofocus placeholder="Work Number"  required />
									</div> -->	
							</div>	
							<div class="edit-user-add-new-phone-outer-area" style="">
								 <input type="tel" name="newphoneNumber"  placeholder="add Number" class="edit-usesr-add-new-phone-input-box" style="" />
								 <select class="form-control phn-phn edit-user-add-new-phone-select-box" style="" name="Phntype"placeholder="Type" required >
													    			<option value="work">Work</option>
													    			<option value="home">home</option>
													    			<option value="personal">Personal</option>
													    			
													    
								</select>
								<button class="add-phon"><span class="glyphicon glyphicon-plus" style="color:green;"></span></button>
							</div>

						</div><span class="error-phn"></span>
					</div>
					<div class = "edit-user-info-outer-div" style="" >
						<div class="row edit-user-phone-number-outer-container" style="">
							<div class=" edit-user-phone-number-heading" style="">
								<span class="my-color" style="">Social Links:</span> 
							</div>
							<div class="display-social-links">
								<!--<div style="font-weight: 480;
									font-size:12px;margin-left:10px; margin-top:7px;">
									<img src="assets/images/icon_google.png" style=" background-color:#D14836;">
									 <span style="color:#00003D">
									 	<input type="text" name="google" autofocus placeholder="Google Plus"   />
									</span> 
								</div> 
								<div style="font-weight: 480;
									font-size:12px;margin-left:10px;margin-top:5px;">
									<img src="assets/images/icon_linkedin.png" style=" background-color:#4875B4;">
									 <span style="color:#00003D">
									 	<input type="text" name="linked-in" autofocus placeholder="LinkedIn"    />
									 	</span> 
								</div>
								<div style="font-weight: 480;
									font-size:12px;margin-left:10px;margin-top:5px;">
									<img src="assets/images/icon_twitter.png" style=" background-color:#33CCFF;">
									 <span style="color:#00003D">
										<input type="text" name="twitter" autofocus placeholder="Twitter"  />
									 </span> 
								</div>
								<div style="font-weight: 480;
									font-size:12px;margin-left:10px;margin-top:5px;">
									<img src="assets/images/icon_facebook.png" style=" background-color:#3a5795;">
									 <span style="color:#00003D">
									 <input type="text" name="fb" autofocus placeholder="Facebook" />
									 </span> 
								</div>-->
							</div>							
						</div>
					</div>

				</div><!-- end of middle area of pic........-->
				<div class=" col-md-7 col-sm-7 edit-user-info-right-hand-side-container" style="">
					<div>
						<div class="edit-user-information-heading-style" style="">Information</div>
						<div style="">
						<h5 class="my-letter-cap edit-user-content-display-details"  style="">
				
							<input type="text" name="designation" value="<%= userDesignation %>" placeholder="Designation"   required   />

						</h5>
						<span class="my-color" style="">*Designation</span>
						</div>
						
						<div style="">
						<h5 class="my-letter-cap edit-user-content-display-details"  style="">
				
							<input type="email" name="email"  value="<%= userEmail %>"placeholder="Email@server.com"   required   />

						</h5>
						<span class="my-color" style="">*Email</span> 
						</div>
						
						<div style="">
						<h5 class="my-letter-cap edit-user-content-display-details"  style="">
				
							<input type="text" name="manager" value="<%= userManagedBy %>" placeholder="Managed By"    required  />

						</h5>
						<span class="my-color" style="">*Managed By</span> 
						</div>
					
						<div  >
						<h5>*Department:
						<select class="form-control depts dept-value" style="width:200px;display:inline;clear:both;" name="dept"   required >
						    
						    
						</select>
						</h5>
						</div>
						

						<!-- <div class="btn-group" style="margin-top:5px;">
										            <button type="button" data-toggle="dropdown" class="btn btn-primary dropdown-toggle">Products <span class="caret"></span></button>
										            
										            <ul class="dropdown-menu">
										                <li><a href="">Action</a></li>
										                <li><a href="">Another action</a></li>
										                
										                <li><a href="">Separated link</a></li>
										            </ul>
										           
						</div> -->
						<select class=" my-prods" multiple>
						 	<option selected disabled>Products</option>
						      <option>Mustard</option>
						      <option>Ketchup</option>
						      <option>Relish</option>
						  </select>


						<div style="">
						
						<span class="my-color" style="padding-right:60px;" >Gender</span> 
							<input type="radio" name="usersGender" value="Male" <%if(  userGender=="Male") print("checked") %>/>Male
							<input type="radio" name="usersGender" value="female" <%if(  userGender=="Female") print("checked") %>/>Female
						
						
						</div>
						
						<div style="">
						<h6>
						<span class="my-color" style="padding-right:50px">Birthday</span>
						<input type="month" name="usersDob" value="<%= userDOB %>"  />
						</h6>
						 
						</div>
						<div style="">
						<h6>
						<span class="my-color" style="padding-right:17px">Joining Month</span>
						<input type="month" name="usersDoj" value="<%= userDOJ %>" required  />
						</h6>
						 
						</div>
						
						
						<!-- <div style="">
						<h5>
						<span style="color:#00003D ;padding-right:60px">State</span>
						<input type="text" name="state" placeholder="State"  />
						</h5>
						 
						</div> -->
						<div style="">
						<h5>
						<span class="my-color" style="padding-right:70px">City</span>
						<input type="text" list="cities" placeholder="City" name="usersCity" value="<%= userCity %>" required />

							<datalist id="cities">
								<option value="Delhi">
								<option value="Banglore">
								<option value="Hyderabad">
								
								<option value="Mumbai">
								
								
							</datalist>
						</h5>
						 
						</div>
						<div>
						<h5>
						<span class="my-color" style="padding-right:45px">Country</span>
						<input type="text" list="countries" placeholder="Counrty" name="usersCountry" value="<%= userCountry %>" required />

							<datalist id="countries">
								<option value="Afghanistan">
								<option value="Albania">
								<option value="India">
								<option value="Indonesia">
								<option value="Singapore">
								<option value="United Kingdom">
								<option value="United States">
								
							</datalist>
						</h5><span class="error"></span>
						</div>
						<button type="button" class="edit-user btn-primary" name="edit-user">
							Edit Info
						</button>
						<button type="button" class="cancel-edit btn-danger" name="cancel">
							Cancel
						</button>
					</div>

				</div>
			   
			</div>
		</form>
		
	</div><!-- end of section container -->
</section>



