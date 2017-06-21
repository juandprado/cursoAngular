import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Tolotelli' },
      { id: 12, name: 'Camello' },
      { id: 13, name: 'Devorador' },
      { id: 14, name: 'Hugol' },
      { id: 15, name: 'Edixon' },
      { id: 16, name: 'Piojo' },
      { id: 17, name: 'Pelicano' },
      { id: 18, name: 'Chigui' },
      { id: 19, name: 'Carpintero' },
      { id: 20, name: 'Fantasma' }
    ];
    return {heroes};
  }
}