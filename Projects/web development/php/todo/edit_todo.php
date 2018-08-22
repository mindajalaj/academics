<?php
if(isset($_POST['edit_todo']))
{
 		include_once('classes/class.ManageTodo.php');
		include_once('sessions.php');
		$init = new ManageTodo();
		
		$username = $session_name;
		$id= $_GET['id'];
		$title = $_POST['title'];
		$description=$_POST['desc'];
		$due_date = $_POST['due_date'];
		$label= $_POST['label_under'];
		$progress=$_POST['progress'];
		$progress=$progress%100;
		//echo $username,$id,$title,$description,$progress,$due_date,$label."<br/>";
		//$description = mysql_real_escape_string($description);
		$edit= $init->editTodo($username,$id,$title,$description,$progress,$due_date,$label);
		
		if($edit ==1)
		{
		 		// header("location:index.php");
				//echo'<script> window.location="edit.php"; </script> ';
				echo'<script> window.location="index.php"; </script> ';
		}
		else
		{
		 		 echo"cant update your todo...";		 
		
		}
}
?>