export enum ProgressState {
    LAUNCHED = 'Launched',
    FINISHED = 'Finished',
    NOT_STARTED = 'Not started'
}

export type Progress = 'Launched' | 'Finished' | 'Not started';

export interface ProjectItemType {
    id: number,
    name: string,
    state: Progress
}