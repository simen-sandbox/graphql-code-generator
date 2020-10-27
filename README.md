# Example GraphQL Code Generator + Apollo

This repository is not a working copy of a React application, it serves a purpose
to showcase how one can implement GraphQL Code Generator and Apollo into a React.

The document contains an explaination as to how this all works.

### `codegen.yml`

This file contains a configuration of GraphQL Code Generator. Notice that we
have added four plugins.

```
      - "typescript"
      - "typescript-operations"
      - "typescript-react-apollo"
      - "fragment-matcher"
```

These all serve a purpose to maximize the convenience of this setup.
`typescript` plugin adds typescript types for GraphQL. `typescript-operations` reads
`.graphql` files for queries in the repository and generates types for them (VERY NICE!).
`typescript-react-apollo` integrates with Apollo Client and creates shortcut functions
for queries. `fragment-matcher` generates an introspection file but only with Interfaces and Unions, based on your GraphQLSchema.

## `schema.graphql`

This is the GraphQL server thas is hosted on `localhost:8080`. This is there so you can see how this all works. Typically, this
file would not be in the repository.

## `src/generated/graphql.tsx`

This file contains the result of running `yarn run generate`. 

Notice that in the beginning of the file, you'll find all the types followed by operations
files end lastly, `useGetCustomerQuery`.

## `src/modules/**/*App.tsx`

This are all examples of components. Notice the use of `useGetCustomerQuery`.

## `src/modules/**/*.graphql`

This is where you write queries. You don't write them in code, you write them in .graphql files and GraphQL Code Generator generates code automatically.