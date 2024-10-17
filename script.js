const usernameInput = document.getElementById('Username'); 
const saveButton = document.getElementById('save-btn');
const clearButton = document.getElementById('clear-btn'); 
const displayName = document.getElementById('display-name'); 


function loadName() {
    const savedName = localStorage.getItem('username');
    console.log('Loaded name:', savedName); 
    if (savedName) {
        displayName.textContent = `Saved name: ${savedName}`;
    }
}


function saveName() {
    const username = usernameInput.value.trim(); 
    console.log('Saving name:', username); 
    if (username) {
        localStorage.setItem('username', username);
        displayName.textContent = `Saved name: ${username}`;
        usernameInput.value = ''; 
    } else {
        alert('Please enter a name.'); 
    }
}


function clearName() {
    localStorage.removeItem('username'); 
    displayName.textContent = '';
    usernameInput.value = '';
}


saveButton.addEventListener('click', saveName); 
clearButton.addEventListener('click', clearName); 


function getTimeBasedGreeting() {
    const currentHour = new Date().getHours();
    console.log("Current Hour:", currentHour);  
    if (currentHour < 12) {
        return 'Wakey Wakey';
    } else if (currentHour < 18) {
        return 'Lunch time';
    } else {
        return 'Goodnight';
    }
}

loadName();
console.log(getTimeBasedGreeting());