export type Role = 'admin' | 'developer' | 'tester';

export type IssueStatus = 'not_started' | 'in_progress' | 'completed';

export type IssuePriority = 'low' | 'medium' | 'high';

export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
}

export interface Project {
    id: string;
    name: string;
    description?: string;
    ownerID: string;
}

export interface Issue {
    id: string;
    title: string;
    description?: string;
    projectId: string;
    status: IssueStatus;
    priority: IssuePriority;
    assigneeId?: string;
    reporterId: string;
    createdAt: string;
}