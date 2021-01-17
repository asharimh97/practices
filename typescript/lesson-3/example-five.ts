type Media = {
  id: string,
  name: string,
  artist: string,
}

type CD = Media & {
  kind: 'cd',
  tracks: string,
  title: string,
  description: string,
};

type LP = Media & {
  title: string,
  description: string,
  side: {
    a: string,
    b: string
  },
  kind: 'lp'
}

type AllMedia = CD | LP

// Only select what necessary subset based on condition
type SelectCD = Extract<AllMedia, { kind: 'cd' }>

// Excluding keys
type RemovableKeys = "id" | "kind";

type CDKeys = keyof CD;

// exclude works on conditional set of type value
// like:  string | ...
type CDInfoKeys = Exclude<CDKeys, RemovableKeys>
type CDInfoKeys2 = Pick<CD, "artist" | "kind">

// Pick keys
type CDKeyInfo = Pick<CD, Exclude<keyof CD, RemovableKeys>>

// equals to
type CDKeyInfo2 = Omit<CD, RemovableKeys>