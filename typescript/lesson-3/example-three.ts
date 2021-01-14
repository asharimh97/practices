type Nullable<Obj> = Obj | undefined;

class Container {
  // private properties
  #element: Nullable<HTMLElement>;
  #prefs: UserPreference;
}