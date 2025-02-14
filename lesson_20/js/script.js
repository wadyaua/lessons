let documentActions = (e) => { 
	const targetElement = e.target; 
	
	// Відкриття/закриття меню при натисканні на кнопку 
	if (targetElement.closest('.menu-icon__button')) { 
	 document.documentElement.classList.toggle('open-menu'); 
	
	 // Заборона прокрутки 
	 if (document.documentElement.classList.contains('open-menu')) { 
	  document.body.style.overflow = 'hidden'; 
	 } else { 
	  document.body.style.overflow = ''; 
	 } 
	} 
	
	// Закриття меню при натисканні на пункт меню 
	if (targetElement.closest('.menu__item')) { 
	 document.documentElement.classList.remove('open-menu'); 
	 document.body.style.overflow = ''; 
	} 
  }; 
	
  // Додаємо обробник подій 
  document.addEventListener('click', documentActions);
  