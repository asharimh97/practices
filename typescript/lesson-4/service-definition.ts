const serviceDefinition = {
  open: { filename: String },
  insert: { pos: Number, text: String },
  delete: { pos: Number, len: Number },
  close: {}
}

// Definitions
type ServiceDefinition = {
  [key: string]: MethodDefinition;
}

type MethodDefinition = {
  [key: string]: StringConstructor | NumberConstructor;
}

// Handler
type RequestPayload<T extends MethodDefinition> =
  // kalo object kosong, return undefined
  {} extends T ? 
    // kita nggak punya payload
    undefined : 
     // Otherwise we have the same keys, and get the
    // type from the constructor function
    { [P in keyof T]: TypeFromConstructor<T[P]> }


type TypeFromConstructor<T> = 
  T extends StringConstructor ? string : T extends NumberConstructor ? number : any;


type RequestObject<T extends ServiceDefinition> = {
  [P in keyof T]: {
    message: P,
    payload: RequestPayload<T[P]>
  }
}[keyof T];

type RequestHandler<T extends ServiceDefinition> = (req: RequestObject<T>) => boolean;

// Service Object

type ServiceMethod<T extends MethodDefinition> = 
  {} extends T ?
    () => boolean : 
    (payload: RequestPayload<T>) => boolean;

type ServiceObject<T extends ServiceDefinition> = {
  [P in keyof T]: ServiceMethod<T[P]>
}

function createService<S extends ServiceDefinition>(
  serviceDef: S,
  handler: RequestHandler<S>
): ServiceObject<S> {
  const service: Record<string, Function> = {};

  for (const name in serviceDef) {
    service[name] = (payload: any) => handler({
      message: name,
      payload
    })
  }

  return service as ServiceObject<S>;
}

const service = createService(serviceDefinition, req => {
  switch(req.message) {
    case "open": 
      console.log("open")
      break;
    case "close": 
      console.log("close")
      break;
    case "delete": 
      console.log("delete")
      break;
    case "insert": 
      console.log("insert")
      break;
    default: 
      console.log("default");
  }

  return true;
})

service.open({ filename: "text.txt" });

service.close();