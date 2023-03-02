# Descripción
Este proyecto está orientado a enseñar a utilizar el patrón de diseño repositorio en una API Rest con 

# Configuración inicial

## Inicialización
Vamos a crear un proyecto con NodeJS y Typescript, para eso lanzamos los siguientes comandos:

```
npm init
npm i -g typescript
tsc --init
```

## Ficher Tsconfig
Configuramos el ficher autogenerado en el root path con los siguientes datos:

```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "pretty": true,
    "sourceMap": true,
    "outDir": "dist",
    "importHelpers": true,
    "strict": true,
    "noImplicitAny": false,
    "strictNullChecks": false,
    "noImplicitThis": false,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": false,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "moduleResolution": "node",
    "baseUrl": ".",
    "allowSyntheticDefaultImports": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "resolveJsonModule": true,
    "paths": {}
  }
}
```

## Dependencias
Instalación de dependencias:
```
npm i express ts-node morgan axios --save
npm i typescript ts-node @types/node @types/express @types/morgan @types/axios nodemon --save-dev
npm i nodemon --save-dev
```