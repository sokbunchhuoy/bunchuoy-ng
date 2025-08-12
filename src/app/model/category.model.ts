export interface Category {
    id: number;
    code: number;
    productName: number;
    productType: string;
    email: string;
    productFees: ProductFee[];
    streetNo: number;
    homeNo: string;
    phones: number;
}
export interface ProductFee {
    id: number;
    branchCode: string;
    feeAmount: number;
    qty: number;
}
