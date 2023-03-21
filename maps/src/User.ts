import { faker } from '@faker-js/faker';
import { Mappable } from './Map'

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'red';

    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string{
        return `
        <p>First Name: ${this.name}</p>
        `
    }
}
