export interface Distributor {
    id: string;
    name: string;
    initials: string;
    storeName: string;
    region: string;
    status: "Active" | "Overdue" | "Pending";
    dues: number;
    colorFrom: string;
    colorTo: string;
    textColor: string;
}