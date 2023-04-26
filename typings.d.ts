export interface Post {
    _id: string;
    _createdAt: string;
    title: string;
    author: {
        name: string;
        _id: string;
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
    authorPosts: [];
    categories: Category[];
    body: [object];
    comments: Comment[];
}

export interface Comment {
    _id: string;
    name: string;
    comment: string;
    _createdAt: string;
}

export interface Category {
    _id: string;
    _ref: string;
    title: string;
}