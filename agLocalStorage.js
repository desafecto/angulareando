function setInfo(type, data){	

	if(type === 'session'){sessionInfo(data);}
	if(type === 'manager'){managerInfo(data);}
	if(type === 'hasManager'){hasManager(data);}

	function sessionInfo(session){
		var session_info = JSON.parse(localStorage.getItem('session_info'));

		if(session){
			if(session.name || session.name === ''){session_info.name = session.name;}
			if(session.surname || session.surname === ''){session_info.surname = session.surname;}
			if(session.surname2 || session.surname2 === ''){session_info.surname2 = session.surname2;}

			if(session.genreCode){
				session.genreCode = session.genreCode.toUpperCase();
				if(session.genreCode === 'MALE' || session.genreCode === 'FEMALE'){session_info.genreCode = session.genreCode;	}
			}

			if(session.phone || session.phone === ''){session_info.phone = session.phone;}
			if(session.email || session.email === ''){session_info.email = session.email;}

			if(session.isPhoneValidated || session.isPhoneValidated == false){session_info.isPhoneValidated = session.isPhoneValidated;}
			if(session.isEmailValidated || session.isEmailValidated == false){session_info.isEmailValidated = session.isEmailValidated;}
		}
		localStorage.setItem('session_info', JSON.stringify(session_info));
	}

	function managerInfo(manager){
		var manager_info = JSON.parse(atob(localStorage.getItem('manager')));

		if(manager){
			if(manager.name || manager.name === ''){ manager_info.name = manager.name;}

			if(manager.generalPhone || manager.generalPhone === ''){ manager_info.generalPhone = manager.generalPhone;}
			if(manager.phone || manager.phone === ''){ manager_info.phone = manager.phone;}
			if(manager.email || manager.email === ''){ manager_info.email = manager.email;}

			if(manager.officePhone || manager.officePhone === ''){ manager_info.officePhone = manager.officePhone;}
			
			if(manager.care || manager.care == false){ manager_info.transactions.isChatAvailable = manager.care;}
			if(manager.cfm || manager.cfm == false){ manager_info.transactions.hasAppointmentService = manager.cfm;}
		}	
		localStorage.setItem('manager', window.btoa(JSON.stringify(manager_info)));
	}

	function hasManager(bool){
		var hasManager_info = localStorage.getItem('hasManager');

		if(bool || bool == false){hasManager_info = bool;}

		localStorage.setItem('hasManager', JSON.stringify(hasManager_info));
	}
	return console.log('Script finalizado');
}

/*
// MANAGER EXAMPLE 
/*

setInfo('hasManager', false); 

setInfo('manager', {name:'Juan', email:'test@gmail.com'});

var data = {
	name : '',
	generalPhone : '',
	phone : '',
	email : '',
	officePhone : '',
	care : true,
	cfm : false
};

/*
// SESSION EXAMPLE
/*

setInfo('session', {name:'Juan', phone: '635311622',email:'palomo@gmail.com', isPhoneValidated: true});

var data = {
	name: '',
	surname: '',
	surname2: '',
	phone: '',
	email: '',
	isPhoneValidated: false,
	isEmailValidated: true,
	genreCode: 'MALE'
}

*/