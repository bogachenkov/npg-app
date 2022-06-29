import { createServer } from "@graphql-yoga/node";
import { createContext } from "./context";
import { schema } from "./schemas";

async function main() {
  const server = createServer({ 
    schema, 
    port: 3001,
    cors: true,
    context: createContext
   });
  await server.start().then(({ address }) => { console.log(address) });
  console.log(`🚀  Server ready`)
}

main();
// server.listen({
//   port: 3001
// }).then(({ url }: Url) => {
//   console.log(`🚀  Server ready at ${url}`)
// })