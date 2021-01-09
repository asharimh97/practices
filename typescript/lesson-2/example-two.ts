type JajalProp = {
  name: string,
  dob?: Date,
  [key: string]: any
};

// rest operator in typescript
function hmm(name: string, dob?: Date, ...rest: any) {
  console.log({ name, dob, rest });
}