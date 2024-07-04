document.getElementById('copyButton').addEventListener('click', function() {
    const textToCopy = 'thiagocardoso0806@gmail.com';
    
    // Cria um elemento textarea para colocar o texto a ser copiado
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    
    // Seleciona o texto dentro do textarea
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    
    // Tenta copiar o texto selecionado para a área de transferência
    document.execCommand('copy');
    
    // Remove o textarea temporário
    document.body.removeChild(textarea);
    
    // Feedback ao usuário
    alert('E-mail obtained');
  });