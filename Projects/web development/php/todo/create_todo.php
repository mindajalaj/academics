<?php
include_once('classes/class.ManageTodo.php');
include_once('sessions.php');
$init=new ManageTodo();
//echo"vfvdvdfvdfvdf";
if(isset($_POST['Create']))
{
 //echo"vfvdvdfvdfvdf45645645";
 		$title=$_POST['title'];
		$description=$_POST['desc'];
		$due_date=$_POST['due_date'];
		$label=$_POST['label_under'];
		$progress=$_POST['progress'];
		if(empty($title) || empty($due_date) || empty($label))
		{
		 				 
						 $error="all field req except desc..";
						 echo $error;
		}
		else{
			 			// echo"zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz45645";
			 			 $title=strip_tags($title);
						 $description=strip_tags($description);
						 //$title=mysql_real_escape_string($title);
						 //$description=mysql_real_escape_string($description);
						 
						 //$username='jalaj';
						 
						 $username=$session_name;
						 $created_date = date("Y-m-d");
						 $create_todo = $init->createTodo($username,$title,$description,$due_date,$created_date,$label,$progress);
						 if($create_todo == 1)
						 {
						  				  $success="todo has been created successfully..!!";
						 				  echo $success;
						 }
						 else{
						 	  			  $errror="not created........!!";
						 				  echo $error;
						 }
		
		
		
		}

}
?>