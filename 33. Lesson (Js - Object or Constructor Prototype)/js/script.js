function $(selector){
	var element = document.querySelector(selector);
	return element;
}
Element.prototype.css = function(firstValue,secondValue){
	if(!secondValue && typeof firstValue == "object"){
		for(var key in firstValue){
			this.style[key] = firstValue[key];
		}
	}else{
		this.style[firstValue] = secondValue;
	}
}
$("div").css({background:"yellow",color:"red",fontSize:"100px"});