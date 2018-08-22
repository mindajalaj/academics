<?php

include_once('sessions.php');
include_once('list_todo.php');
include_once('delete.php');
?>


<html>
<style>
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
height:400px;
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
//border: solid grey 2px;
height:300px;
font-size:25px;
padding-top:5px;
padding-left:7px;
background-color:#fff;
 }
 td{
    width:100px;

}
 td:empty {
    width: 60px;
}
</style>
<style>
#div_prog1
{
width:100px;
height:20px;
border:1px solid grey;
border-radius:9px;
}
#div_prog2
{
//width:<?php echo$percent; ?>px;
width:0%;
height:20px;
//border:2px solid black;
border-radius:7px;

background:blue;
}
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
background:#3b6e22;font-family:sans-serif;
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
<div id="head_left"><a href="index.php" style="text-decoration:none; color:black;">MAIN MENU</a>
</div>

<ul>
<li><a href="index.php?label=Inbox" style="text-decoration:none;"> Inbox</a></li>
<li><a href="index.php?label=Read Later" style="text-decoration:none;">Read Later</a></li>
<li><a href="index.php?label=Important" style="text-decoration:none;">Important</a></li>
</ul>
</div>
<div id='div_right'>
	 <div id='rt_head'>
	 	<b>  MANAGE TODO</b><hr/>
		<div id='div_addnew'>
		<form method="post" action="http://localhost/todo/add_new.php">
			<b> <input type="submit" value="ADD NEW+" name="add_new" id='div_addnew_box' />
		</b>
		</form>
		
		</div><!-- end add new button...........-->
	 </div>
	 <div id='main_body'>
	 	<table style="font-size:20px;border-bottom:2px solid grey;"   >
		  		 <tr >
					 <td> Title</td>
				<td></td>
					 <td style="width:200px;"> Snippet</td>
					 <td></td>
					 <td> Due Date</td>
					 <td></td>
					 <td> Time Left </td>
					 <td></td>
					 <td> Progress</td>
					 <td></td>
					 <td> Action </td>
				  </tr >
				  </table>
<table style="font-size:17px;" cellspacing="0"   >
	    		 
				 	 
					<!-- //.............php code to add new todo into our table........-->
					
					 
					<?php
					if($list_todo !== 0)
					{					 
					 		foreach($list_todo as $key => $value )
							{ ?>
							  <tr style="background:f7f7f7;border-bottom:black;" onmouseover="row_disp();" onmouseout="row_nor();">
							  	<?php	$today = strtotime("now");
									$due_date = strtotime($value['due_date']);
									if($due_date > $today)
									{
									 			 $hours = $due_date - $today;
												 $hours = $hours/3600;
												 $time_left = $hours/24;
                								 if($time_left < 1)
												 {
												  			   $time_left = 'less than 1 day';
												  }
												  else
												  {
												   	  $time_left = round($time_left).' days remaining...';
												  
												  }
										}
										else
										{
										 		  $time_left = ' expired...';
										}
								?>
                                <td><?php echo $value['title']; ?></td><td></td>
                                <td style="width:200px;"> <?php echo $value['description'];?></td><td></td>
                                <td> <?php echo $value['due_date'];?></td><td></td>
                                <td style="width:160px;"><?php echo $time_left;?></td>
                                <td> 
                                					 	  <div id='div_prog1'>
                                					 	  	   <div id='div_prog2' style="width:<?php echo $value['progress']?>%">
                                							   </div>
                                						  </div>
                                </td><td></td>
                                <td>
								<a href="edit.php?id=<?php echo $value['id'];?>" title = "<?php echo $value['title'];?>">edit</a> | 
								<a href="index.php?delete=<?php echo $value['id'];?>" title = "<?php echo $value['title'];?>">delete</a>
								</td>
                 </tr>
			<?php
				 }
			}
			else
			{
			 	 echo"<td></td><td></td>sorry no more todo here..<td></td><td></td>";
			}
			
			?>	 
		  
	 </table>
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
<script>
row_disp()
{


}

</script>