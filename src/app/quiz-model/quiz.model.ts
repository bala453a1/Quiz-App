export interface Option {
    optionId: string;
    optionDesc: string;
    selectData:string
}

export interface Question {
    questionId?: number;
    questionDesc?: string;
    options?: Option[];
    answer?: string;
}

export interface Quiz {
    questions: Question[];
}