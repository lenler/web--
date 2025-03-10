let chatHistory = [];

async function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    if (!message) return;

    // 添加用户消息
    appendMessage('user', message);
    chatHistory.push({ role: 'user', content: message });
    
    try {
        const response = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: chatHistory })
        });
        
        const data = await response.json();
        const aiReply = data.choices[0].message.content;
        
        // 添加AI回复
        appendMessage('assistant', aiReply);
        chatHistory.push({ role: 'assistant', content: aiReply });
    } catch (error) {
        console.error('Error:', error);
    }
    
    userInput.value = '';
}

function appendMessage(role, content) {
    const historyDiv = document.getElementById('chat-history');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}`;
    messageDiv.textContent = content;
    historyDiv.appendChild(messageDiv);
    historyDiv.scrollTop = historyDiv.scrollHeight;
}
