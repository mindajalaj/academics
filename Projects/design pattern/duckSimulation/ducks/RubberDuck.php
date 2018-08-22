<?php

require_once("AbstractDuck.php");


//include 'AbstractDuck.php';
class RubberDuck extends AbstractDuck
{

	public function __construct()
	{
		$this->duckType = "RubberDuck";
	}

	/**
	 * [display] here we are just printing the statement, it should display the actual duck
	 * @return [type] [description]
	 */
	public function display()
	{
		print_r("<br/>RubberDuck looks like this!<br/>");
	}
}