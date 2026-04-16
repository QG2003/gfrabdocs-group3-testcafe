import { Selector } from 'testcafe'; 

fixture `GrabDocs Group 3 Create Tests` 
	.page `https://app.grabdocs.com`; 

test('Login first', async t => { 
	await t.debug(); 
}); 

test('Create calendar event', async t => { 
	const newEventButton = Selector('button,a').withText(/new event/i); 
	const titleInput = Selector('input').filterVisible(); 
	const saveButton = Selector('button,a').withText(/save|create/i); 

	await t 
		.navigateTo('https://app.grabdocs.com/calendar') 
		.click(newEventButton) 
		.wait(2000); 

	if (await titleInput.count > 0) 
		await t.typeText(titleInput.nth(0), 'Group 3 Meeting', { replace: true }); 
	
	if (await saveButton.exists) 
		await t.click(saveButton); 

	await t.wait(2000); 
}); 

test('Create form and fields', async t => { 
	const createForm = Selector('body').withText('Create New Form'); 
	const textBtn = Selector('button,div').withText('Text'); 
	const dropdownBtn = Selector('button,div').withText('Dropdown'); 
	const inputField = Selector('input').filterVisible(); 
	const saveBtn = Selector('button,a').withText(/save|publish/i); 

	await t 
		.navigateTo('https://app.grabdocs.com/forms') 
		.click(createForm) 
		.wait(2000); 

	if (await inputField.count > 0) 
		await t.typeText(inputField.nth(0), 'Group 3 Survey', { replace: true }); 

	if (await textBtn.exists) 
		await t.click(textBtn); 
		
	await t.wait(1000); 

	if (await dropdownBtn.exists) 
		await t.click(dropdownBtn); 

	await t.wait(1000); 

	if (await saveBtn.exists) 
		await t.click(saveBtn); 

	await t.wait(2000); 
});
