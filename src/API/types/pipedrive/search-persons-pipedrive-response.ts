
export interface Owner {
    id: number;
}

export interface Organization {
    id: number;
    name: string;
    address?: any;
}

export interface Person {
    id: number;
    type: string;
    name: string;
    phones: string[];
    emails: string[];
    visible_to: number;
    owner: Owner;
    custom_fields: string[];
    notes: any[];
    primary_email: string;
    organization: Organization;
}

export interface Candidate {
    result_score: number;
    item: Person;
}

export interface Data {
    items: Candidate[];
}

export interface Pagination {
    start: number;
    limit: number;
    more_items_in_collection: boolean;
}

export interface AdditionalData {
    pagination: Pagination;
}

export interface FindPersonsPipedriveResponse {
    success: boolean;
    data: Data;
    additional_data: AdditionalData;
}



