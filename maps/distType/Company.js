import { faker } from "@faker-js/faker";
export class Company {
    constructor() {
        this.color = 'red';
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
    markerContent() {
        return `
        <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h3>CatchPhrase: ${this.catchPhrase}</h3>
        </div>
        `;
    }
}
