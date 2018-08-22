<?php

include_once('sessions.php');

include_once('create_Todo.php');
?>

<html>
<!--<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.css" />
--><style>
#div1
{
width:100%;
height:90px;
//border: solid grey 2px;
}
#div_head
{
position:relative;
top:20px;
left:450px;
height:50px;
font-size:40px;
font-family:Brush Script MT;
width:600px;
letter-spacing:5px;
word-spacing:12px;
//border: solid grey 2px;
color:blue;
 }
#div_left
{
width:200px;
position:relative;
left:40px;
background:#f7f7f7;
//border: solid grey 2px;
height:300px;
float:left;
 }
#head_left
{
 		  background:#ccc;
		  color:black;
		  letter-spacing:3px;
		  font-size:20px;
		  width:70%;
		  padding:5px;
		  margin-left:20px;
		  margin-top:10px;

}

#div_right
{
width:1080px;
position:relative;
left:40px;
//border: solid grey 2px;
height:500px;
float:left;
 }
#rt_head
{
width:1070px;
position:relative;
//left:120px;
//border: solid grey 2px;
height:35px;
font-size:18px;font-family:sans-serif;
padding-top:5px;
padding-left:7px;
background-color:#f7f7f7;
 }
#main_body
{
width:1070px;
position:relative;
//left:120px;
border: solid grey 2px;
height:300px;
font-size:25px;
padding-top:5px;
padding-left:7px;
background-color:#fff;
 }
 
</style>
<?php
$i=0;
for($i=0;$i<=20;$i=$i+10)
$current=$i;
//sleep(1);
?>
<style>

#div_addnew
{
position:absolute;
right:90px;
top:0px;
//width:20px;
//height:30px;
z-index:09999;
}
#div_addnew_box
{

width:120%;
height:35px;
background:#3b6e22;
font-family:sans-serif;
z-index:09999;
color:white;
border-radius:10px;
}
#div_logout
{
position:absolute;
bottom:-10px;
right:90px;
//width:70px;
//height:35px;

}
#div_logout_box
{

width:120%;
height:35px;
background:#3b6e22;font-family:sans-serif;
z-index:09999;
color:white;
letter-spacing:2px;
border-radius:10px;
}


li{
height:25px;
letter-spacing:1px;
font-size:16px;
}

</style>

<body>
<div id='div1' >
	 <div id="div_head" >
	 TODO MAKER
	 </div>
</div>
<div id='div_left'>
<div id="head_left">MAIN MENU
</div>
<ul>
<li><a href="index.php?label=Inbox" style="text-decoration:none;"> Inbox</a></li>
<li><a href="index.php?label=Read Later" style="text-decoration:none;">Read Later</a></li>
<li><a href="index.php?label=Important" style="text-decoration:none;">Important</a></li>
</ul>
</div>
<div id='div_right'>
	 <div id='rt_head'>
	 <form method="post" action="http://localhost/todo/index.php">
	 	<b>  MANAGE TODO</b><hr/>
		<div id='div_addnew'>
			<b> <input type="submit" value="HOME" name="add_new" id='div_addnew_box' />
		</b>
		</form>
		
		
		</div><!-- end add new button...........-->
	 </div>
	 
	 <!-- start of the form part in this page...........seperate from previous page............................-->
	 <div id='div_form_reg' style="position:absolute;left:400px; top:50px;">
	  <h2>ADD NEW TODO</h2>
	  <form style="z-index:333;" action="http://localhost/todo/add_new.php" method="post">
	 <h4> <p>Title:
	  		  <input type="text" value="" name="title" size="30"/>
	  </p>
			<label> Description  :</label><br/>
			<textarea title="jalaj" name="desc" style="width:400px; height:120px;"></textarea>
	  		  
	   
	  <p>Due Date(yyyy-mm-dd):
	  		  <input type="text" value="" name="due_date" size="30"/>
	  </p>
	  <div>Progress:<input type="text" value="" name="progress" size="20" />
	  
	  </div>
	  <p>label:
	  		  <select name="label_under">
			  <option value="">select</option>
			  <option value="Read Later">Read Later</option>
			  <option value="Inbox">Inbox</option>
			  <option value="Important">Important</option>
	  		  </select>
	  </p>
	  
	  <p>
	  		  <input style="color:'green';background-color:#3b6e22;" type="submit" value="Create" name="Create" />
	  </p></h4>
	 
	  </form>
	  </div>
	  <div id="div_logout">
	 <form method="post" action="http://localhost/todo/logout.php" enctype="application/x-www-form-urlencoded">
	 <b> <input type="submit" value="LOGOUT" name="logout" id='div_logout_box' />
		</b>
	 
	 </form>
	 </div>

</div>

</body>
</html>