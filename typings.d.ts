export interface Post {
    _id: string;
    _createdAt: string;
    title: string;
    author: {
        name: string;
        image: {
            asset: {
                _ref: string;
            }
        }
    };
    description: string;
    mainImage: {
        asset: {
            _ref: string;
        }
    };
    slug: {
        current: string;
    };
    categories: Category[];
    body: [object];
    comments: Comment[];
}

export interface Comment {
    name: string;
    comment: string;
    _createdAt: string;
}

export interface Category {
    _ref: string;
    title: string;
}