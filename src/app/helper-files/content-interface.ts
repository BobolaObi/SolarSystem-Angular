// Content Interface typescript File
// Inside of this new file, define an interface called Content with the
// following parameters:
// id as a number
// title as a string
// description as a string
// creator as a string
// imgURL as an optional string
// type as an optional string
// tags as an optional array of strings
//Export interface to the class 
export interface Content {
    id: number;
    title: string;
    description: string;
    creator: string;
    imgURL?: string;
    type?: string;
    tags?: string[];
}
