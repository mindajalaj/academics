<?php

class FlyWihtWings implements FlyBehavior
{
	/**
	 * [fly description]
	 * @return [type] [description]
	 */
	public function fly($type)
	{
		print_r($type." => flying with wings!<br/>");
	}
}