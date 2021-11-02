$( document ).ready(function() {
    $("#package .packageMultiBox .commonBox .multiImg img").click(function(){
		console.log(this.src);
		$(".mainImg").attr("src",this.src)
	});
});