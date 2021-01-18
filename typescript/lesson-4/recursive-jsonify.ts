type JSONified<T> = JSONifiedValue<T extends { toJSON(): infer U} ? U : T>

type JSONifiedValue<T> = 
  T extends string | number | boolean | null ? T : 
  T extends Function ? never : 
  T extends object ? JSONifiedObject<T> : 
  T extends Array<infer U> ? JSONifiedArray<U> :
  never;

type JSONifiedObject<T> = {
  [P in keyof T]: JSONified<T[P]>
}

type UndefinedAsNull<T> = T extends undefined ? null : T;

type JSONifiedArray<T> = Array<UndefinedAsNull<JSONified<T>>>

// Implementation

type Widget = {
  toJSON: {
    kind: "Widget",
    date: Date
  }
}

type Item = {
  text: string,
  count: number,
  choice: "yes" | "no" | null,
  func: () => void,
  nested: {
    isSaved: boolean,
    data: [1, undefined, 2]
  },
  widget: Widget,
  children?: Item[]
}

class Serializer<T> {
  serialize(input: T): string {
    return JSON.stringify(input)
  }

  deserialize(input: string): JSONified<T> {
    return JSON.parse(input)
  }
}

const data = {
  avatar:
    'https://avatar.stockbit.com/stockbit1dnz5qctpu20191127T134338web.jpeg',
  userName: 'mikuna',
  timeStamp: '31 Mar20, 15:41',
  countUnreadMessage: 5,
  content:
    'Program LOTRE SAHAM sudah resmi dirilis oleh REAL minggu lalu hanya dengan membeli 100 lot saham REAL, anda akan mendapatkan kupon undian yang berhadiah...',
}

type dataType = typeof data;

const itemSerializer = new Serializer<dataType>();

const serialization = itemSerializer.serialize(data);

const deserialization = itemSerializer.deserialize(serialization);

console.log({ serialization, deserialization });