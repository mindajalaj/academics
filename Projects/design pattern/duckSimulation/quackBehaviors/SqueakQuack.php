<?php

require_once("QuackBehavior.php");

class SqueakQuack implements QuackBehavior
{
	/**
	 * [quack description]
	 * @return [type] [description]
	 */
	public function quack($type)
	{
		print_r($type." => squeak.....squeak......!<br/>");
	}
}