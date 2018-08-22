<?php

class ButterflySwim implements SwimBehavior
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