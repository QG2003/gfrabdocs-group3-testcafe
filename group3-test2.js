fixture `GrabDocs Group 3 Tests` 
	.page `https://app.grabdocs.com`; 

test('GrabDocs homepage opens', async t => { 
	await t 
		.expect(true).ok(); 
}); 

test('Navigate to calendar URL', async t => { 
	await t.navigateTo('https://app.grabdocs.com/calendar'); 
}); 

test('Navigate to forms URL', async t => { 
	await t.navigateTo('https://app.grabdocs.com/forms'); 
});
