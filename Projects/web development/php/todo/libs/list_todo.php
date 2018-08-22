<?php
include_once('classes/class.ManageTodo.php');
$init = new ManageTodo();
$list_todo = $init->ListTodo('bob','inbox');
print_r($list_todo);



?>