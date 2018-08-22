<?php

require_once("FlyBehavior.php");

class RocketFly implements FlyBehavior
{
	/**
	 * [fly description]
	 * @return [type] [description]
	 */
	public function fly($type)
	{
		print_r($type." => flying with rocket!<br/>");
	}
}