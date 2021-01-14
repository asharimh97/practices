// @ts-ignore
type VideoFormatUrls = {
  formats: URL,
  format360: URL,
  format720: URL
  format1080: URL
};

type SubtitleTypes = {
  english: URL,
  indonesian: URL,
  spanish: URL
}

type UserPreference = {
  format: keyof VideoFormatUrls,
  subtitles: {
    active: boolean,
    language: keyof SubtitleTypes
  },
  theme: 'light' | 'dark'
}

const defaultUserPreference: UserPreference = {
  format: 'format720',
  subtitles: {
    active: true,
    language: 'english'
  },
  theme: 'light'
};

type DeepPartial<Obj> = {
  [Key in keyof Obj]?: DeepPartial<Obj[Key]>
}

const userPreference = {
  format: 'format720',
  subtitles: {
    language: 'indonesian'
  }
} as const;

type Optional<T> = {
  [Key in keyof T]?: T[Key]
}

function combinePreferences(defaultP: UserPreference, userP: DeepPartial<UserPreference>) {
  return { ...defaultP, ...userP }
}

function combinePreference<UserPref extends DeepPartial<UserPreference>>(defaultP: UserPreference, userP: UserPref) {
  return { ...defaultP, ...userP };
} 

const pref = combinePreferences(defaultUserPreference, userPreference);

const prefs = combinePreference(defaultUserPreference, { subtitles: { language: 'indonesian' } })