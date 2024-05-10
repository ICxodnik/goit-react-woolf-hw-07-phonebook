import { Contact, CreateContact } from "store/phoneBook.slice";

const BaseUrl = "https://663e684be1913c4767978f01.mockapi.io";

export async function fetchContacts(): Promise<Contact[]> {
    const resp = await fetch(BaseUrl + "/contacts", {
        method: "GET",
    });

    return await resp.json();
}

export async function addContact(contact: CreateContact): Promise<Contact> {
    const resp = await fetch(BaseUrl + "/contacts", {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(contact),
    });

    return await resp.json();
}

export async function deleteContact(id: string): Promise<Contact> {
    const resp = await fetch(BaseUrl + `/contacts/${id}`, {
        method: "DELETE",
    });

    return await resp.json();
}
