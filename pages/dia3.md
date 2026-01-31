# Dia 3 - Instalação dos Primeiros Pacotes

Para o projeto utilizaremos:
- `node.js lts/hydrogen` (Note que LTS significa Long Term Support, ou seja, suporte a longo prazo)
- `next@13.1.6`
- `react@18.2.0`
- `react-dom@18.2.0`

## Instalação Básica do node.js usando o nvm

Utilizaremos o `nvm` para realizar o versionamento do `node.js`.
Uma subversão do LTS terá retrocompatibilidade garantida com as outras subversões do LTS.

Para utilizar o `node.js lts/hydrogen` basta executar o comando:

```bash
nvm install lts/hydrogen
```
| Comando | Descrição    |
| ---------- | ---------- |
| `node -v` | Verifica a versão do node.js instalada |
| `npm -v` | Verifica a versão do npm instalada |
| `nvm -v` | Verifica a versão do nvm instalada |
| `nvm ls` | Lista as versões do node.js instaladas |
| `nvm use lts/hydrogen` | Utiliza a versão do node.js lts/hydrogen |
| `nvm alias default lts/hydrogen` | Define a versão do node.js lts/hydrogen como default |

## O arquivo .nvmrc

Caso mais de uma pessoa esteja trabalhando na mesma base de código, é inteligente que utilizemos uma ferramenta que garanta com que todas pessoas estejam usando a mesma versão de todas tecnologias ou, ao menos, versões compatíveis.

Curiosidade: O final `rc` significa `run command`, ou seja, comando de inicialização.

Para configurar o nvm para usar o `lts/hydrogen` basta garantir que dentro do seu arquivo `.nvmrc` tenha a versão do node.js que deseja utilizar, como segue:

```
lts/hydrogen

```

Note que o `enter` é um caractere especial que representa o final do arquivo, sendo necessário para o arquivo de configuração.

## Nextjs e a Analysis Paralysis

### Analysis Paralysis

A analysis paralysis é um problema que muitas vezes ocorre quando se está começando a aprender uma nova tecnologia. No mercado, é comum terem muitas opções para escolher e - ainda mais no momento em que estamos começando a aprender uma tecnologia nova - parece impossível escolher uma para começar. 

Tanto que, mesmo depois de escolher alguma ferramenta, é comum ainda ficarmos com a dúvida se fizemos ou não a escolha certa.

### Nextjs

O Nextjs é uma framework para React que permite criar aplicações web Full Stack com React. O Nextjs é uma ferramenta diferencial no mercado devido, principalmente, a sua flexibilidade, permitindo ao desenvolvedor a criar suas aplicações da forma que desejar, sem forçar uma forma específica de desenvolvimento.

### Iniciação do projeto node.js e instalação do Nextjs

Para iniciar um projeto node.js, basta executar o comando:

```bash
npm init
```

Ou, caso ainda queira pular todas as perguntas, basta executar o comando:

```bash
npm init -y
```

onde `-y` significa `yes`, ou seja, sim.

A única alteração que fizemos em todas as perguntas iniciais foi escolher a licença como sendo `MIT`, escolha que exploraremos um pouco mais adiante no curso.


### Instalando o Nextjs

Uma vez com o projeto inicializado, basta executar o comando:

```bash
npm install next@13.1.6
```

Ainda instalamos as outras dependências necessárias para o projeto, como segue:

```bash
npm install react@18.2.0 react-dom@18.2.0
```

Note que, para instalar mais de uma dependência, basta separar as dependências por espaço.