<?php
	 session_start();
	 if(isset($_SESSION['todo_name']))
	 {
	  		$session_name=$_SESSION['todo_name'];
	 
	 }
	 else
	 {
	  	 header("location:login.php");
	 }

?>