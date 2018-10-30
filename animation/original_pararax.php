<!DOCTYPE html>
<html lang="ja">
    <meta charset="UTF-8">
    <title>original_pararax</title>
	<link rel="stylesheet" type="text/css" href="original_pararax.css">
	<script
	  src="https://code.jquery.com/jquery-1.12.4.js"
	  integrity="sha256-Qw82+bXyGq6MydymqBxNPYTaUXXq7c8v3CwiYwLLNXU="
	  crossorigin="anonymous"></script>
	<script type="text/javascript" src="original_pararax.js"></script>
	<body>
	<p style="text-align:center;">下にスクロールしてみて下さい。</p>
	<ul id="image_block_area">
		<?php
            for ($i=1;$i<=10;$i++):
            $file_path = sprintf("sample_%02d.jpg", $i);
            $amari = $i%3;
        ?>
		<?php if ($amari ==1):?>
			<div class="wrapper_block" style="white-space:nowrap;">
		<?php endif;?>

		<li class="image_block">
			<img src="./images/<?php echo $file_path;?>" alt="<?php echo $file_path?>" class="img_elem">
		</li>

		<?php if ($amari ==0):?>
		</div>
		<?php endif;?>

		<?php
            endfor;
        ?>
	</ul>

	</body>
</html>
