import Contact from "../pages/contact";
import Life from "../pages/life";
import Mode from "../pages/mode";
import People from "../pages/people";
import Places from "../pages/places";
import Quotes from "../pages/quotes";

const NAVIGATIONS = [
  {
    label: "My Two Cents",
    children: [
      {
        label: "Quotes",
        link: "/quotes",
        page: Quotes
      },
      {
        label: "Mode",
        link: "/mode",
        page: Mode
      }
    ]
  },
  {
    label: "Life",
    link: "/life",
    page: Life
  },
  {
    label: "People",
    link: "/people",
    page: People
  },
  {
    label: "Places",
    link: "/places",
    page: Places
  },
  {
    label: "Contact",
    link: "/contact",
    page: Contact
  }
];

const PAGE_ROUTES = NAVIGATIONS.flatMap(nav =>
  nav.children ? nav.children : nav
);

export { NAVIGATIONS, PAGE_ROUTES };
