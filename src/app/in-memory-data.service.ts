import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Fantastic' },
      { id: 12, name: 'Spider-Man' },
      { id: 13, name: 'Batman' },
      { id: 14, name: 'Superman' },
      { id: 15, name: 'Aquaman' },
      { id: 16, name: 'Ant-man' },
      { id: 17, name: 'Wonder Woman' },
      { id: 18, name: 'Scarlet Witch' },
      { id: 19, name: 'Quicksilver' },
      { id: 20, name: 'Human Torch' }
    ];
    return {heroes};
  }
}