export interface Address {
    street: string;
    city: string;
    number: string;
    zipCode: string;
}

export interface PhoneNumber {
    number: string;
    type: string;
}

export interface Customer {
    givenNmae: string;
    surname: string;
    email: string;
    afm: string;
    phoneNumbers: PhoneNumber[];
    address: Address;
}