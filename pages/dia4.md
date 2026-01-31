# Dia 4 - Protocolos da Internet

## O que é um serviço web

### Os diferentes protocolos da web

| Protocolo | Significado da Sigla |
| --- | --- |
| HTTP | Hyper Text Transfer Protocol |
| HTTPS | Hyper Text Transfer Protocol Secure |
| FTP | File Transfer Protocol |
| SMTP | Simple Mail Transfer Protocol |


### UDP vs TCP

Vídeo comparativo entre TCP e UDP: [HTML5 Games - UDP vs TCP](https://www.youtube.com/watch?v=ZEEBsq3eQmg)

Ambos protocolos têm como intuito comunicação de dados entre dois pontos da internet, mas com diferentes propósitos.

- *UDP*: Utilizado para comunicação de dados em que a ordem não é importante, como streaming de áudio e vídeo. Tende a ser mais veloz que o TCP, mas pode ter pacotes perdidos.
- *TCP*: Utilizado para comunicação de dados em que a ordem é importante, como transferência de arquivos e comunicação de dados. Tende a ser mais lento que o UDP, mas garante que todos os pacotes cheguem.

Note que, há outros protocolos mais robustos contruídos em cima do UDP e TCP, inclusive, o próprio HTTP é construído em cima do TCP, que - por sua vez - é construído em cima do IP (Internet Protocol).

O protocolo UDP também pode ser utilizado em aplicações em que não se pode haver a perda de pacotes, para isso, enviamos um mesmo pacote várias vezes, de modo que - mesmo se algumas cópias forem perdidas no caminho - ainda garantimos que o pacote chegue.

## Levantando o servidor

Como instalamos o next de forma local no projeto, precisamos declarar um alias (apelido) para o seguinte comando do next que tem que ser executado para levantar o servidor:

```bash
next dev
```

Para isso, vamos adicionar o seguinte alias no arquivo `~/package.json`:

```json
{
  "scripts": {
    "dev": "next dev"
  }
}
```

Agora, neste diretório, sempre que quisermos levantar o servidor, basta executar o seguinte comando:

```bash
npm run dev
```

NOTE: se tivéssemos instalado o Next globalmente, poderíamos simplesmente executar o comando `next dev`.

### O Erro

Se executarmos o comando `npm run dev`, teremos o seguinte erro:

```bash
☁  cursodev [Dia-4] ⚡  npm run dev

> clone-tabnews@1.0.0 dev
> next dev

ready - started server on 0.0.0.0:3000, url: http://localhost:3000
error - Project directory could not be found, restart Next.js in your new directory
```

Isso se deve ao fato de que o Next não consegue encontrar o diretório do projeto, apesar de ter conseguido subir o servidor web. Mas isso é esperado, em seguida, resolveremos esse problema.


## Página Inicial

### Como limpar o terminal

Se quisermos limpar o terminal, podemos usar o comando `clear`.

Alternativamente, sem "sujar" o nosso histórico de comandos, podemos usar o atalho `Ctrl + L`.

### Servindo páginas com o Nextjs

Atualmente, há duas formas diferentes de servirmos o conteúdo de uma página com o Nextjs:

- Com a rendenização "antiga" usando `pages`;
- Com a rendenização "nova" usando `app`.

Por ora, vamos começar a fazer nossa aplicação como o `Tabnews` começou, usando o `pages`.

### Como funciona o pages

O Nextjs utiliza o diretório `pages` para servir as páginas da aplicação.

Todos diretórios e arquivos dentro do diretório `pages` serão servidos como páginas da aplicação. Analogamente, se criarmos diretamente um arquivo com nome diferente de `index.js` dentro do diretório `pages`, ele será servido como uma página da aplicação.

O Next, nesse caso, serve como o nosso gestor de rotas enquanto o React dita o conteúdo de cada página.

### Passo-a-passo:

1. Criar o diretório `~/pages`;
2. Criar o arquivo `~/pages/index.js`;
  Dentro do arquivo `~/pages/index.js`, vamos adicionar o seguinte código:

```js
function Home() {
  return <h1>Home</h1>;
}

export default Home; // é essa linha que diz que a função Home é a página inicial (a ser renderizada)
```

Novamente executando o comando `npm run dev`, teremos o seguinte resultado:

```bash
☁  cursodev [Dia-4] ⚡  npm run dev

> clone-tabnews@1.0.0 dev
> next dev

ready - started server on 0.0.0.0:3000, url: http://localhost:3000
event - compiled client and server successfully in 863 ms (149 modules)
```

No browser, acessando o link `http://localhost:3000`, teremos o seguinte resultado:

```html
Home
```

#### Como acessar o link em qualquer dispositivo (Codespaces)

Por padrão, o link gerado no codespaces (não será um localhost) será um link privado, ou seja, somente será acessível se estiver logado na conta do codespaces. Para torná-lo público, devemos fazer o seguinte:

1. Clicamos o link de "antena" no canto inferior esquerdo do codespaces;
2. No painel que abriu, mudamos o cambo "Visibility" para "Public";

#### Caso o servidor não suba automaticamente (Codespaces)

Normalmente, o Codespaces faz automaticamente o encaminhamento de portas, ligando uma porta no ambiente de desenvolvimento local a um endereço público, como fizemos anteriormente. Só que, nem sempre isso funciona, e, nesse caso, devemos fazer o seguinte (fazemos o encamenhamento de portas manualmente):

1. Clicamos no botão de "antena" no canto inferior esquerdo do codespaces;
2. No painel que abriu, clicamos no botão de "Forward a Port";

Já deve estar funcionando, mas sinta-se livre para "brincar" com os parâmetros declarados automaticamente e ver o que acontece quando interagimos com cada um deles.