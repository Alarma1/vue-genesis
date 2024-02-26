export interface ResponseDataToken {
    access_token: string;
    base_domain: string;
}

export interface ResponseDataItem {
    id: string;
    name: string;
}

export interface CounterStoreState {
    tokenDomain: string;
    dropDownMenuValue: boolean;
    downloadData: boolean;
    responseData: ResponseDataItem[];
    accessToken: string;
    baseDomain: string;
}

export interface Lead {
    id: number;
    request_id: string;
    _links: {
        self: {
            href: string;
        };
    };
}

export interface EmbeddedLeads {
    leads: Lead[];
}

export interface Links {
    self: {
        href: string;
    };
}

export interface ResponseDataLead {
    _links: {
        self: {
            href: string;
        };
    };
    _embedded: {
        leads: Lead[];
    };
}

export interface Contact {
    id: number;
    is_deleted: boolean;
    is_unsorted: boolean;
    request_id: string;
    _links: {
        self: {
            href: string;
        };
    };
}

export interface EmbeddedContacts {
    contacts: Contact[];
}

export interface Links {
    self: {
        href: string;
    };
}

export interface ResponseDataContact {
    _links: {
        self: {
            href: string;
        };
    };
    _embedded: {
        contacts: Contact[];
    };
}

export interface Company {
    id: number;
    is_deleted: boolean;
    request_id: string;
    _links: {
        self: {
            href: string;
        };
    };
}

export interface EmbeddedCompanies {
    companies: Company[];
}

export interface Links {
    self: {
        href: string;
    };
}

export interface ResponseDataCompany {
    _links: {
        self: {
            href: string;
        };
    };
    _embedded: {
        companies: Company[];
    };
}

