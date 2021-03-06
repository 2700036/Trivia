export const difficulties = [    
  { id: 0, name: 'easy' },
  { id: 1, name: 'medium' },
  { id: 2, name: 'hard' },    
] as const;

export const categories = [
  {
    id: 'any',
    name: 'Any Category',
  },
  { id: 9, name: 'General Knowledge' },
  { id: 10, name: 'Books' },
  { id: 11, name: 'Film' },
  { id: 12, name: 'Music' },  
  { id: 14, name: 'Television' },
  { id: 15, name: 'Video Games' },  
  { id: 17, name: 'Science &amp; Nature' },
  { id: 18, name: 'Computers' },
  { id: 20, name: 'Mythology' },
  { id: 21, name: 'Sports' },
  { id: 22, name: 'Geography' },
  { id: 23, name: 'History' },
  { id: 25, name: 'Art' },
  { id: 26, name: 'Celebrities' },
  { id: 27, name: 'Animals' },
] as const;

export type Difficulty = typeof difficulties[number]['name'];
export type Category = typeof categories[number];
export type CategoryId = Category['id'];
