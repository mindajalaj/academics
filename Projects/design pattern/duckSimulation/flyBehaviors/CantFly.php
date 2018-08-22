<?php

require_once("FlyBehavior.php");

class CantFly implements FlyBehavior
{
	
	/**
	 * [fly description]
	 * @return [type] [description]
	 */
	public function fly($type)
	{
		print_r($type." => sorry! I cant fly.<br/>");
	}
}