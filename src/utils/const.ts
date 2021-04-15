export interface Page {
  name: string;
  target: string;
}

export const pages: Page[] = [
  { name: 'Home', target: '/' },
  { name: 'Projects', target: '/projects' },
  { name: 'Visuals', target: '/visuals' },
];

export const visuals: Page[] = [
  { name: 'Game of Life', target: '/visuals/gameoflife' },
];
