# Bandeira do Brasil — estados e estrelas

Projeto web interativo servido localmente com Node.js, sem dependências externas.

## Requisitos

- Node.js instalado

## Executar pelo terminal

No terminal PowerShell do VS Code, na pasta do projeto, execute:

```powershell
npm.cmd start
```

Depois, abra [http://localhost:8123](http://localhost:8123) no navegador.

Também é possível iniciar diretamente com Node.js:

```powershell
node servidor.js
```

Para iniciar em modo de desenvolvimento, com reinicialização automática ao alterar arquivos:

```powershell
npm.cmd run dev
```

O servidor usa a porta `8123` por padrão. Para escolher outra porta no PowerShell:

```powershell
$env:PORT = "3000"
npm.cmd start
```
