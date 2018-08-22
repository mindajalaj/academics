<?php

require_once("SwimBehavior.php");

class CantSwim implements SwimBehavior
{
	/**
	 * [swim description]
	 * @return [type] [description]
	 */
	public function swim($type)
	{
		print_r($type." => sorry! I cant swim......!<br/>");
	}
}