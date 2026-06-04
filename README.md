# 🔀 Switch Statement em JavaScript

> Projeto de estudo sobre a estrutura de controle `switch` no JavaScript, com interação via `prompt` e `alert` no navegador.

---

## 📁 Estrutura do Projeto

```
📦 switch-estudo/
 ┣ 📄 index.html
 ┗ 📂 js/
   ┗ 📄 script.js
```

---

## 💻 O que o projeto faz?

Uma página simples que exibe um cardápio com 4 opções. Ao clicar no botão **"Pedir"**, o usuário digita um número de 1 a 4 e recebe uma resposta correspondente via `alert`.

| Opção | Resultado         |
|-------|-------------------|
| 1     | Suco              |
| 2     | Água gelada       |
| 3     | Sorvete           |
| 4     | Chama o garçom    |
| outro | Mensagem de erro  |

---

## 🧠 Conceitos aprendidos

### 🔹 O que é o `switch`?

O `switch` é uma estrutura de controle que substitui vários `if/else` quando você precisa comparar **um mesmo valor** contra múltiplas possibilidades.

```js
switch(expressão) {
  case valor1:
    // executa se expressão === valor1
    break;
  case valor2:
    // executa se expressão === valor2
    break;
  default:
    // executa se nenhum case combinar
    break;
}
```

---

### 🔹 Anatomia do código

```js
function pedir() {
  const valor = prompt("Digite um valor de 1 a 4"); // 1️⃣ Pega input do usuário

  switch(Number(valor)) {  // 2️⃣ Converte para número antes de comparar
    case 1:
      alert("Você escolheu 1 = suco");
      break; // 3️⃣ Para a execução — sem break, cai no próximo case!

    case 2:
      alert("Você escolheu 2 = agua gelada");
      break;

    case 3:
      alert("Você escolheu 3 = sorvete");
      break;

    case 4:
      alert("Você chamou o garçom!");
      break;

    default:               // 4️⃣ Executado se nenhum case bater
      alert("Escolha a opção de 1 a 4");
      break;
  }
}
```

---

### 🔹 Partes importantes explicadas

#### `Number(valor)`
O `prompt` sempre retorna uma **string** (texto). O `switch` usa comparação estrita (`===`), então:

```js
"1" === 1  // false ❌ — string vs número
 1  === 1  // true  ✅
```

Por isso usamos `Number(valor)` para converter antes de comparar.

---

#### `break`
O `break` encerra o `switch` após executar o `case`. Sem ele ocorre o **fall-through** — o código continua executando os próximos cases:

```js
// ⚠️ Sem break (fall-through):
switch(2) {
  case 2:
    console.log("case 2"); // executa
  case 3:
    console.log("case 3"); // também executa! (não tinha break)
}
```

---

#### `default`
Funciona como o `else` — é executado quando **nenhum** `case` coincide com o valor. Sempre coloque no final como boa prática.

---

## 🔄 switch vs if/else

| Situação                        | Use          |
|----------------------------------|--------------|
| Comparar um valor contra muitos  | `switch` ✅  |
| Condições com ranges (`> < >=`)  | `if/else` ✅ |
| Condições booleanas complexas    | `if/else` ✅ |

```js
// switch é mais limpo aqui:
switch(opcao) {
  case 1: ...; break;
  case 2: ...; break;
}

// if/else ficaria assim (menos legível):
if (opcao === 1) { ... }
else if (opcao === 2) { ... }
```

---

## 📌 Boas práticas

- ✅ Sempre use `break` em cada `case` (a menos que queira fall-through intencional)
- ✅ Sempre inclua o `default` como tratamento de erro
- ✅ Converta o tipo antes de comparar (`Number()`, `String()`)
- ✅ Use `switch` quando tiver 3 ou mais condições para o mesmo valor

---

## 🚀 Como executar

1. Clone ou baixe o projeto
2. Abra o arquivo `index.html` no navegador
3. Clique no botão **"Pedir"**
4. Digite um número de 1 a 4 e veja o resultado
