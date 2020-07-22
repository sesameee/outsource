import jsf from 'json-schema-faker'
import * as ts from 'typescript'
import { generateSchema } from 'typescript-json-schema'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function tsMock(symbol: string, file: string, compilerOptions: ts.CompilerOptions): any[] {
    const program = ts.createProgram([file], compilerOptions)
    const schema = generateSchema(program, symbol)
    return jsf.generate(schema, [])
}
