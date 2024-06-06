document.addEventListener('DOMContentLoaded', () => {
    const emojiButton = document.querySelector('#emoji-button');
    const emojiInput = document.querySelector('#emoji-input');

    // Crie uma instância do Emoji Button
    const picker = new EmojiButton({
        position: 'top-start' // Posição do seletor de emojis
    });

    // Adicione um evento de clique ao botão para abrir o seletor de emojis
    emojiButton.addEventListener('click', () => {
        picker.pickerVisible ? picker.hidePicker() : picker.showPicker(emojiButton);
    });

    // Adicione o emoji selecionado ao campo de entrada
    picker.on('emoji', emoji => {
        emojiInput.value += emoji;
    });
});