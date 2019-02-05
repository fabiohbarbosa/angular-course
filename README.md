# Angular Course

## Prerequisites

1. Node.js
    - Windows: https://nodejs.org/en/download/
    - macOS: Download or run: `brew install node`
    - Linux debian based: `apt-get install node`

    After that you should run `npm install -g npm`

---

## Slides

1. Difference between TypeScript and ES6

    Typescript is a superset of Javascript, this is means all things that you write in Javascript is supported by Typescript.

	The most popular and useful features are:

    1. [Type Annotations](https://www.typescriptlang.org/docs/handbook/basic-types.html)
    1. [Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
	1. [Generics](https://www.typescriptlang.org/docs/handbook/generics.html)
	1. [Enums](https://www.typescriptlang.org/docs/handbook/enums.html)
	1. [Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)
    1. And the amazing `.d.ts`

    To avoid common mistakes you should read the section `Do's and Don'ts`:
    https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html

    Official website: https://www.typescriptlang.org/


2. Setup environment

	1. Create a new project: `npm init -y`
	1. Install project's typescript dependencies: `npm i typescript @types/node --save` and `npm i --g typescript`
	1. Go to the next step to create our first typescript file

3. TypeScript e ES6 na prática

	1. [Type Annotations](src/examples/first-interface.ts)
		Should be run manually step by step: `tsc filename.tsc`, and after that `node 
	1. [Configure typescript environment](tsconfig.json)
	1. [Classes](src/examples/classes.ts)
	1. [Interfaces](src/examples/first-interface.ts)
	1. [Generics](src/examples/first-interface.ts)
	1. [Enums](src/examples/enums.ts)
	1. [Decorators](src/examples/decorators.ts)

3. Angular CLI e Webpack
4. Primeiro componente e conceitos básicos
5. Correr o servidor web API's
6. HttpClient e Observables
7. Single page applications e rotas
8. Interceptors e proteção de rotas e token
9. Forms, validadores e notificações
