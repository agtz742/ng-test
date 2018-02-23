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
    const powers = [
      'Stretch body parts',
      'Spider sense',
      'I\'m Batman',
      'Omnipotent',
      'Talks with fishes',
      'Shrink',
      'Amazonian',
      'Paranormal powers',
      'Move fast',
      'Can set self on fire and control flames'
    ];
    return {heroes, powers};
  }
}