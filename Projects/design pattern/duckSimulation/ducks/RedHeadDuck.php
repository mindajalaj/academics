<?php

require_once("AbstractDuck.php");

//include 'AbstractDuck.php';

class RedheadDuck extends AbstractDuck
{

	public function __construct()
	{
		$this->duckType = "RedheadDuck";
	}

	/**
	 * [display] here we are just printing the statement, it should display the actual duck
	 * @return [type] [description]
	 */
	public function display()
	{
		print_r("<br/>RedheadDuck looks like this!<br/>");
	}
}