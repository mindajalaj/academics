
<section>
	<div class= "container col-sm-12 my-centre-container"  >
		<form id="#addAUser">	
			<div class = "row  ">
				<div class = "col-md-12 my-name-headin" >
					<h5 class="my-name my-letter-cap">
						
					<label>
						 *Name:		
					</label>
					<input type="text" name="usersFName"  autofocus placeholder="First Name" required />
			
					
					<input type="text" name="usersLName"  placeholder="Last Name " required/><span class="required-fields" style="">* fields in red are required</span>
					</h5>
				</div>

			</div>
			<div class="row my-userifo-base"  >
				<div class=" col-md-4 col-sm-4 lf-padding my-centre-details">
					<div>
						<img src="assets/images/user.jpg" class="img-circle img-responsive my-user-image" />
						<input type="file" name="usersPic" />
					</div>
					<div style="" class = "phone-number-outer-div">
						<div class="row phone-number-inner-div" style="">
							<div class=" add-phone-number-heading" style="">
								<span class="phone-color" style=" ">Phone Numbers: </span> 
							</div>
							<div class="my-phnNumbers showing-phone-number-default-div" style="">
		 						<div class="style-for-work-number" style="">
		 							*<i class="glyphicon glyphicon-phone-alt"></i>
		 							 <input type="tel" name="phoneNumberW" autofocus placeholder="Work Number" required  />
		 						</div>	 
		 						<!-- <div style="font-weight: 500;
		 						 	font-size:15px;margin-left:10px; margin-top:7px;">
		 						 	<i class="glyphicon glyphicon-home"></i> 
		 						 	<input type="tel" name="phoneNumberH" autofocus placeholder="Home Number" />
		 						 </div> --> 
		 						<div class="style-for-personal-number" style="">
		 							<i class="glyphicon glyphicon-phone"></i> 
		 							 <input type="tel" name="phoneNumberP"  placeholder="Personal Number"  />
		 						</div>
		 					</div>
							<div class="div-for-adding-new-phone-number" style="">
								 <input type="tel" name="newphoneNumber"  placeholder="add Number" class="input-adding-new-phone-number" style="" />
								 <select class="form-control phn-phn style-to-select-phone-number" style="" name="Phntype"placeholder="Type" required >
													    			<option value="work">Work</option>
													    			<option value="home">home</option>
													    			<option value="personal">Personal</option>
													    			
													    
								</select>
								<button class="add-phn"><span class="glyphicon glyphicon-plus" style="color:green;"></span></button>
							</div> 					
						</div><span class="error-phn"></span>
					</div>
					<div class = "edit-user-info-outer-div" style="" >
						<div class="row edit-user-phone-number-outer-container" style="">
							<div class=" edit-user-phone-number-heading" style="">
								<span class="my-color">Social Links:</span> 
							</div>
							<div style= "">
								<div class="edit-google-link-box" style="">
									<img src="assets/images/icon_google.png" style=" background-color:#D14836;">
									 <span >
									 	<input type="text" name="google" autofocus placeholder="Google Plus"   />
									</span> 
								</div> 
								<div class="edit-other-link-box" style="">
									<img src="assets/images/icon_linkedin.png" style=" background-color:#4875B4;">
									 <span >
									 	<input type="text" name="linked-in" autofocus placeholder="LinkedIn"  />
									 	</span> 
								</div>
								<div class="edit-other-link-box" style="">
									<img src="assets/images/icon_twitter.png" style=" background-color:#33CCFF;">
									 <span >
										<input type="text" name="twitter" autofocus placeholder="Twitter"  />
									 </span> 
								</div>
								<div class="edit-other-link-box" style="">
									<img src="assets/images/icon_facebook.png" style=" background-color:#3a5795;">
									 <span >
									 <input type="text" name="fb" autofocus placeholder="Facebook" />
									 </span> 
								</div>
							</div>							
						</div>
					</div>

				</div><!-- end of middle area of pic........-->
				<div class=" col-md-7 col-sm-7 edit-user-info-right-hand-side-container" style="">
					<div>
						<div  class= " edit-user-information-heading-style" style="">Information</div>
						<div style="">
						<h5 class="my-letter-cap edit-user-content-display-details"  style="">
				
							<input type="text" name="designation" autofocus placeholder="Designation"   required   />

						</h5>
						<span class="my-color" style="">*Designation</span>
						</div>
						
						<div style="">
						<h5 class="my-letter-cap edit-user-content-display-details"  style="">
				
							<input type="email" name="email" autofocus placeholder="Email@server.com"   required   />

						</h5>
						<span class="my-color" style="">*Email</span> 
						</div>
						
						<div style="">
						<h5 class="my-letter-cap edit-user-content-display-details"  style="">
				
							<input type="text" name="manager" autofocus placeholder="Managed By"    required  />

						</h5>
						<span class="my-color" style="">*Managed By</span> 
						</div>
						
						<!-- <div style="">
						<h5 class="my-letter-cap "  style="margin-top:15px; margin-bottom:0px;">
										 -->
		<!-- <div class="dropdown">
		        <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Tutorials
		        <span class="caret"></span></button>
		        <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
		          <li role="presentation"><a role="menuitem" tabindex="-1" href="#">HTML</a></li>
		          <li role="presentation"><a role="menuitem" tabindex="-1" href="#">CSS</a></li>
		          <li role="presentation"><a role="menuitem" tabindex="-1" href="#">JavaScript</a></li>
		          <li role="presentation" class="divider"></li>
		          <li role="presentation"><a role="menuitem" tabindex="-1" href="#">About Us</a></li>
		        </ul>
		      </div> -->
						<div  >
						<h5>*Department:
						<select class="form-control depts dept-value" style="width:200px;display:inline;clear:both;" name="dept" required >
						    <option value="one">One</option>
						    
						</select>
						</h5>
						</div>
						<!-- </h5>
						<span style="color:#00003D">Department</span> 
						</div> -->
						
						<!-- <h4 class="my-letter-cap"style="margin-top:15px; margin-bottom:0px;">abc abc abc</h4>
						<h4 class="my-letter-cap"style="margin-top:0px; margin-bottom:0px;">abc abc abc</h4> -->
						<!-- <span style="color:#00003D">Products</span> 
						</div> -->
						

						<!--the one which i was showing... -->
					<!-- 	<div class="btn-group" style="margin-top:5px;">
									            <button type="button" data-toggle="dropdown" multiple class="btn btn-primary dropdown-toggle">Products <span class="caret"></span></button>
									            
									            <ul class="dropdown-menu">
									                <li>Action</li>
									                <li>Another action</li>
									                
									                <li>Separated link</li>
									            </ul>
									           
					</div>  -->
						<!-- <div class="form-group">
						        <label class=" control-label">Favorite color</label>
						        <div class=" selectContainer">
						            <select name="colors" class="form-control" multiple title="Choose 2-4 colors">
						                <option value="black">Black</option>
						                <option value="blue">Blue</option>
						                <option value="green">Green</option>
						                <option value="orange">Orange</option>
						                <option value="red">Red</option>
						                <option value="yellow">Yellow</option>
						                <option value="white">White</option>
						            </select>
						        </div> -->
    
						
						 <select class=" my-prods" multiple>
						 	<option selected disabled>Products</option>
						      <option>Mustard</option>
						      <option>Ketchup</option>
						      <option>Relish</option>
						  </select>




						<div style="">
						
						<span class="my-color" style="padding-right:60px" >Gender</span> 
							<input type="radio" name="usersGender" value="Male" />Male
							<input type="radio" name="usersGender" value="ale" />Female
						
						
						</div>
						
						<div style="">
						<h6>
						<span class="my-color" style="padding-right:50px">Birthday</span>
						<input type="month" name="usersDob" value="2015-01"  />
						</h6>
						 
						</div>
						<div style="">
						<h6>
						<span class="my-color" style="padding-right:17px">Joining Month</span>
						<input type="month" name="usersDoj" value="2015-01" required  />
						</h6>
						 
						</div>
						
						
						<div style="">
						<h5>
						<span class="my-color" style="padding-right:60px">State</span>
						<input type="text" name="state" placeholder="State" />
						</h5>
						 
						</div>
						<div style="">
						<h5>
						<span class="my-color" style="padding-right:70px">City</span>
						<input type="text" list="cities" placeholder="City" name="usersCity" value="Banglore" required />

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
						<input type="text" list="countries" placeholder="Counrty" name="usersCountry" value="india"  required />

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
						<button type="button" class="add-user" name="Submit">
							Submit
						</button>
					</div>

				</div>
			   
			</div>
		</form>
		
	</div><!-- end of section container -->
</section>

