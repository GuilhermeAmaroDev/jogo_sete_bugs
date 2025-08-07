# Jogo dos 7 Erros para QA

Este projeto consiste em uma página de cadastro com 7 erros intencionais para testers encontrarem. É uma ferramenta divertida para treinar habilidades de QA e testar a atenção aos detalhes.

## Como usar

1. Abra o arquivo `index.html` em um navegador web
2. Tente encontrar os 7 erros na página de cadastro
3. Anote os erros encontrados

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)

## Lista dos 7 erros (apenas para referência do desenvolvedor)

1. **Botão WhatsApp que não funciona**: O ícone do WhatsApp está presente, mas ao clicar nada acontece.
2. **Campo senha com validação contraditória**: Apesar de dizer que precisa de caractere especial, letra maiúscula e número, o campo dá erro quando o usuário coloca letra maiúscula, sem informar qual é o problema.
3. **Campo Confirmar Senha que não impede salvar vazio**: O campo não tem validação de obrigatoriedade.
4. **Validação de CPF com formato enganoso**: O campo de CPF mostra um placeholder com formato 037-037-640-40, mas não permite digitar hífens.
5. **Link dos termos e condições que não abre na primeira tentativa**: É necessário clicar duas vezes para abrir o modal dos termos.
6. **Campo de CPF que permite envio mesmo vazio**: Apesar de ser um campo obrigatório, o formulário pode ser enviado com o CPF em branco.
7. **Botão X dos modais que não funciona**: O botão de fechar (X) nos modais de sucesso e termos não responde ao clique.

## Bônus: Erros escondidos

1. **Campo de telefone que desaparece em telas pequenas**: Em dispositivos móveis ou telas menores que 480px, o campo de telefone desaparece completamente sem aviso.
2. **Botão de cadastro que muda de cor**: Em telas menores que 480px, o botão de cadastro muda de cor sem aviso.

---

**Nota**: Este projeto é apenas para fins educacionais e de treinamento em QA. Não use este código em ambientes de produção.