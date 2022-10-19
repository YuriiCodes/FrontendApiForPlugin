export interface AddPerson{
    name: string,
    email: string,
    phone: string
}

export interface AddPersonResponse{
    config: object,
    data: {
        success: boolean,

    },
    headers: object,
    request: object,
    status: number,
    statusText: string
}