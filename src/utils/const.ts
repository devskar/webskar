export interface Page {
  name: string;
  target: string;
}

export const pages: Page[] = [
  { name: 'Home', target: '/' },
  { name: 'Projects', target: '/projects' },
  { name: 'Visuals', target: '/visuals' },
];
