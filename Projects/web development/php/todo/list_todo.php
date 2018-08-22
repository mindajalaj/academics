<?php
include_once('classes/class.ManageTodo.php');
include_once('sessions.php');

$init = new ManageTodo();

if(isset($_GET['id']))
{
 		$id = $_GET['id'];
		$list_todo = $init->listIndTodo(array('id'=> $id),$session_name);
}
else
{
          if(isset($_GET['label']))
          {
           		$label= $_GET['label'];
          		$list_todo=$init->ListTodo($session_name,$label);
          
          }
          else{
          	 	$list_todo = $init->ListTodo($session_name);
          }
}
?>