<?php

include_once('login_user.php');

?>
<html>
<link  rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.css"  />

<style>
#div1
{
position:relative;
top:0%;
left:0px;
height:70px;
width:100%;
background:black;

}
#div_form_reg
{

display:none;
 }
#div_login
{
display:block;

 }

</style>
<body>
	  <div id='div1'>
	  <div id='div1'>
	  <div style="position:absolute; top:20px; left:300px; color:white;text-height:40px;line-height:40px; line-height:20px;"><font size='6'><b>Todo Maker<b></font></div>
	  </div>
	  </div>
	  <span><?php if(isset($error)){echo $error;}?></span>
<div id='div_form_reg' style="position:absolute;left:400px; top:80px;">
	  <h2>Register here</h2>
	  <form style="z-index:333;" action="http://localhost/todo/login.php" method="post">
	 <h4> <p>UserName:
	  		  <input type="text" value="" name="username" size="30"/>
	  </p>
			<p> Password  :
	  		  <input type="password" value="" name="pass" size="30"/>
	  </p>  
	  <p>RE-Password:
	  		  <input type="password" value="" name="repass" size="30"/>
	  </p>
	  
	  <p>Email:
	  		  <input type="text"  value="" name="e" size="30"/>
	  </p>
	  <p>
	  		  <input style="color:'green';" type="submit" value=" submit" name="register" />
	  </p></h4>
	 <div onclick="dis_log()" style="color:red;">
	 Existing user ? back to login page
	 </div>
	  </form>
</div>
<div id='div_login' style="position:absolute; left:400px; top:80px;">
 <h2>Login</h2>
 <form style="z-index:333;" action="http://localhost/todo/login.php" method="post">
	 <h4> <p>UserName:
	  		  <input type="text" value="" name="login_user" size="30"/>
	  </p>
			<p> Password  :
	  		  <input type="password" value="" name="login_pass" size="30"/>
	  <p>
	  		  <input style="color:'green';" type="submit" value="login" name="login" />
	  </p></h4>
<div onclick="dis_reg()" style="color:red;" >
	 New User?
	 </div>
	  </form>


</div>
</body>
<script>

function dis_log()
{
c=document.getElementById('div_form_reg');
c.style.display='none';
c1=document.getElementById('div_login');
c1.style.display='block';
}
function dis_reg()
{
c=document.getElementById('div_form_reg');
c.style.display='block';
c1=document.getElementById('div_login');
c1.style.display='none';
}
</script>
</html>
