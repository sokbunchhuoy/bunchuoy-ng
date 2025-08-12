export interface Customer {
    id?: number; // Optional field
    code: string;
    name: string;
    position: string;
    email: string;
    branchName: Branch[]; // Array of ProductFee
    address: Address; // Address group
}
export interface Branch {
    id?: number; // Optional field
    branch: string;
    type: string;
    branchCode: string;
    category: string;
}
export interface Address {
    streetNo: string;
    homeNo: string;
}
