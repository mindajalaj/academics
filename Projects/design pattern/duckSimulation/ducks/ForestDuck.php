<?php

require_once("AbstractDuck.php");

//include 'AbstractDuck.php';

class ForestDuck extends AbstractDuck
{

	public function __construct()
	{
		$this->duckType = "ForrestDuck";
	}

	/**
	 * [display] here we are just printing the statement, it should display the actual duck
	 * @return [type] [description]
	 */
	public function display()
	{
		print_r("<br/>ForrestDuck looks like this!<br/>");
	}
}