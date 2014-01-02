var oldAdd = Node.prototype.addEventListener;

Node.prototype.addEventListener = function(type, listener, useCapture){ 
	if(!this.listeners){
		this.listeners = new Object();
	}
	
	if(!this.listeners[type]){
		this.listeners[type] = new Array(); 
	} 
	var callee = arguments.callee;
	if(!callee){
		return oldAdd.apply(this, arguments);
	}
    
	var obj = {
		listener : listener,
		caller : {
                name : callee.caller ? callee.caller.name : 'Not Defined',
                func : callee.caller
            }
	};
	
	this.listeners[type].push(obj); 
	
	return oldAdd.apply(this, arguments); 
}

window.getListenersForElement = function(elem){
	if(typeof(elem) == 'string'){
		elem = document.getElementById(elem);
	}
	if(elem.listeners){
		return elem.listeners
	}else{
		return 'No listeners found for that element';
	}
}

window.getListeners = window.getListenersForElement;
window.eventListeners = window.getListeners;