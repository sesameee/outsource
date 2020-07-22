import { getApiFiles } from './getApiFiles'
import { createServer } from './koaServer'

createServer(getApiFiles()).listen(8080)
console.log(`> Mock Server Ready on http://localhost:8080`)
