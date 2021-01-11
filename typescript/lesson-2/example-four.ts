type Talk = {
  speaker: string,
  title: string,
  abstract?: string,
}

type TechEventBase = {
  title: string,
  date: Date,
  capacity: number,
  rsvp: number,
  description: string,
};

type Conference = TechEventBase & {
  price: number,
  location: string,
  kind: 'conference',
  talks: Talk[]
};

type Meetup = TechEventBase & {
  price: number | string,
  location: string,
  kind: 'meetup',
  talks: Talk[]
}

type Webinar = TechEventBase & {
  price: number,
  url: string,
  kind: 'webinar',
  talks: Talk
};

type Concert = TechEventBase & {
  kind: "concert"
}

type TechEvent = Conference | Meetup | Webinar | Concert;

// kalo kita hilangkan type annotationnya `kind` akan dianggap sebagai `string`
const acara: TechEvent = {
  title: "Lorem ipsum",
  date: new Date(),
  capacity: 100,
  rsvp: 100,
  description: "Lorem ipsum dolorsit amet",
  kind: "webinar" as const,
  price: 200,
  url: "https",
  talks: {
    speaker: "Foo bar",
    title: "Belajar fizz buzz"
  }
}

function getEventTeaser(event: TechEvent) {
  switch(event.kind) {
    case "conference": 
      return `${event.title} (Conference). Priced at ${event.price}IDR`;
    case "meetup": 
      return `${event.title} (Meetup). Hosted at ${event.location}`;
    case "webinar": 
      return `${event.title} (Webinar). Broadcasted at ${event.url}`;

    default: 
      throw new Error('Not sure how to do with that');
  }
}

// Cara dynamically get kind with lookup
type EventKind = TechEvent["kind"];

function filterByKind(list: TechEvent[], kind: EventKind): TechEvent[] {
  return list.filter(el => el.kind === kind);
}

getEventTeaser(acara);

declare const eventList: TechEvent[];

// 
filterByKind(eventList, "conference");
filterByKind(eventList, "concert");

// Cara manual
// type GroupedEvents = {
//   conference: TechEvent[],
//   meetup: TechEvent[],
//   webinar: TechEvent[],
//   concert: TechEvent[],
// }

// Cara pertama
// type GroupedEvents = {
//   [Kind in EventKind]: TechEvent[]
// }

// Cara kedua, pake TechEvent kind langsung
type GroupedEvents = {
  [Kind in TechEvent["kind"]]: TechEvent[]
}

function groupEvents(events: TechEvent[]): GroupedEvents {
  const grouped: GroupedEvents = {
    conference: [],
    meetup: [],
    webinar: [],
    concert: []
  };

  events.forEach(el => { grouped[el.kind].push(el) });

  return grouped;
}

type TalkProp = keyof [];