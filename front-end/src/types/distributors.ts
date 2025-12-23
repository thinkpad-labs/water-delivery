export interface Distributor {
    id: string;
    name: string;
    storeName: string;
    status: "approved" | "suspended" | "not_in_operation";
    dues: string;
}