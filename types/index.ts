export interface PostSchema {
    id: string;
    school: string;
    highSchool: string;
    satScore: number;
    actScore: number;
    weightedGpa: number;
    extracurriculars: string;
    apScores: string;
    comment: string;
    verified: boolean;
}

export interface PostFetchOptions {
    satFilter: boolean;
    actFilter: boolean;
    gpaFilter: boolean;
    satScore: number;
    actScore: number;
    gpa: number;
}