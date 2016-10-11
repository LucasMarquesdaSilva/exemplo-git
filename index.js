$(document).ready(function(){

	$('.btn-primary').click(function(event) {
		var $n1 = parseInt($('input[name=n1]').val());
		var $n2 = parseInt($('input[name=n2]').val());
		var res;

		switch(this.id) {
			case 'soma':
				res = soma($n1, $n2);
				break;
			case 'subtracao':
				res = subtracao($n1, $n2);
				break;
			case 'multiplicacao':
				res = multiplicacao($n1, $n2);
				break;
			case 'divisao':
				res = divisao($n1, $n2);
				break;
		}

		$('.result').empty();
		$('.result').append(res);
	});

	function soma($n1, $n2) {
		return $n1+$n2;
	}

	function subtracao($n1, $n2) {
		return $n1-$n2;
	}

	function multiplicacao($n1, $n2) {
		return $n1*$n2;
	}

	function divisao($n1, $n2) {
		if ($n2 > 0) {
			return $n1/$n2;
		}
	}
});
