// @ts-ignore
declare function addAsync(x: number, y: number, cb: (result: number) => void);

type FunctionWithCallback<T extends any[] = any[]> = (...t: [...T, (...args: any) => any]) => any;

type InferArguments<T> = T extends (
  ...t: [...infer R, (...args: any) => any]
) => any ? R : never;

type InferResults<T> = T extends (
  ...t: [...infer Text, (res: infer R) => any]
) => any ? R : never;

type PromisifiedFunction<T> = (...args: InferArguments<T>) => Promise<InferResults<T>>

// @ts-ignore
function promisify<Fun extends FunctionWithCallback>(f: Fun): PromisifiedFunction<Fun> {
  return function(...args: InferArguments<Fun>) {
    return new Promise((resolve) => {
      function callback(result: InferResults<Fun>) {
        resolve(result)
      }

      args.push(callback)
      f.call(null, ...args);
    })
  }
}

// @ts-ignore
const addProm = promisify(addAsync);

addProm(1, 2).then(x => console.log(x));