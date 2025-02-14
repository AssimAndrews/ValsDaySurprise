const name = 'Sweetheart';
const fullMessage = 'You are the sweetest person I have ever known. I am so incredibly blessed to have you in my life. Forever yours, my love. ❤️';

const openButton = document.getElementById('openButton');
const messageContainer = document.getElementById('messageContainer');
const messageElement = document.getElementById('message');

let isOpen = false;

openButton.addEventListener('click', () => {
    isOpen = true;
    openButton.style.display = 'none';
    messageContainer.style.display = 'block';
    
    let i = 0;
    const interval = setInterval(() => {
        messageElement.textContent = fullMessage.slice(0, i);
        i++;
        if (i > fullMessage.length) {
            clearInterval(interval);
        }
    }, 80);
});
