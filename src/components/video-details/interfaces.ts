export type MockDataT = {
    profile: Profile;
    post: Post;
    related: Related[];
}
export type Related = {
    url: string;
    title: string;
    likes: number;
    duration: number;
}
export type Profile = {
    name: string;
    id: number;
    imageUrl: string;
    followers: number;
}

export type Feedback = {
    comments: Comment[];
}
export type Comment = {
    name: string;
    comment: string;
    likes: number;
}

export type Post = {
    title: string;
    date: string;
    short_description: string;
    video: Video;
    feedback: Feedback;
}
export type Video = {
    url: string;
    name: string;
}




