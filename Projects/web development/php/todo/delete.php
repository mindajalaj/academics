<?php
include_once('classes/class.ManageTodo.php');
include_once('sessions.php');
$init = new ManageTodo;
if(isset($_GET['delete']))
{
 			//ob_start();			 
 		$id = $_GET['delete'];
		$delete = $init->deleteTodo($session_name,$id);
		if($delete == 1)
		{
		//ob_start();
		//  echo "successfully deleted.........";		
		 //header('location:index.php');   
		 echo'<script> window.location="index.php"; </script> ';
		}
		else
		{
		echo " unable to  delete.........";	
		}
}
?>