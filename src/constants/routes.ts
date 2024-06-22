interface Route {
  id: number;
  pathname: string;
  name: string;
}

export const ROUTES: Route[] = [
  // Video will be our fallback route since no other routes actually exist
  { id: 1, pathname: "/", name: "Video" },
  { id: 2, pathname: "/game", name: "Game" },
  { id: 3, pathname: "/interface", name: "Interface" },
  { id: 4, pathname: "/keyboard", name: "Keyboard" },
  { id: 5, pathname: "/mouse", name: "Mouse" },
  { id: 6, pathname: "/audio", name: "Audio" },
  { id: 7, pathname: "/chat", name: "Chat" },
  { id: 8, pathname: "/privacy", name: "Privacy" },
];
