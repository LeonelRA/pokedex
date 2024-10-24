# pokedex

This template should help get you started developing with Vue 3 in Vite (Node version 20.12.2).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Documentacion del proyecto

En este proyecto, utilicé Pinia para la gestión del estado, Vue Router para el enrutamiento de vistas, y Tailwind CSS para el diseño y los estilos.

Las clases con márgenes y tamaños personalizados las creé porque me pidieron replicar el diseño de Figma lo más fielmente posible. Sin embargo, si hubiese sido por elección propia, habría preferido utilizar las clases predeterminadas de Tailwind, aunque no coincidieran exactamente con los píxeles especificados en el diseño.

Comencé implementando los componentes por separado para asegurar su reutilización. Tras completar el diseño, procedí a desarrollar el método para interactuar con la API. En este caso, solo utilicé un método GET, pero también incluyo cómo estructuraría una clase dedicada para gestionar las consultas a la API.

Para agregar Pokémon a favoritos, añadí un nuevo parámetro al objeto de cada uno, permitiendo filtrarlos rápidamente. Si hubiera trabajado con una base de datos, habría realizado una consulta directa a la API para obtener solo los Pokémon marcados como favoritos.
