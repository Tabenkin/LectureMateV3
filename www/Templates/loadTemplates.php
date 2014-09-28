<?php
	
	$files = scandir("./Templates");

	foreach($files as $file)
	{
		if( $file == "." || $file == ".." || $file == "loadTemplates.php")
		{
			continue;
		}

		require_once($file);
	}

?>