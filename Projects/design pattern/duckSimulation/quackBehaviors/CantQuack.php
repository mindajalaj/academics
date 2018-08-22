<?php

require_once("QuackBehavior.php");

class CantQuack implements QuackBehavior
{
	
	public function quack($type)
	{
		print_r($type." => Sorry! i cant quack<br/>");
	}
}