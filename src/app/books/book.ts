export interface Book {
    title: string;
    isbn: string;
    price: number;
    rating: number;
    coverUrl: string;
    author?: string;
    comment?: string;
}