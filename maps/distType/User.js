import { faker } from '@faker-js/faker';
export class User {
    constructor() {
        this.color = 'red';
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
    markerContent() {
        return `
        <p>First Name: ${this.name}</p>
        `;
    }
}
