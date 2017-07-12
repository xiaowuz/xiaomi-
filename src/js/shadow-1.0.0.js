$.fn.extend({
	adcl:function(){
		this.addClass('change');
		return this;
	},
	adanm:function(){
		this.animate({marginTop:10,marginBottom:4});
		return this;
	},
	rmcl:function(){
		this.removeClass('change');
		return this;
	},
	rmanm:function(){
		this.animate({marginTop:14,marginBottom:0});
		return this;
	}

});
