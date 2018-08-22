<?php

require_once("SwimBehavior.php");

class FreeStyleSwim implements SwimBehavior
{
	/**
	 * [swim description]
	 * @return [type] [description]
	 */
	public function swim($type)
	{
		print_r($type." => freeStyle swimming......!<br/>");
	}
}