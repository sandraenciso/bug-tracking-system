import { IssueStatus, IssuePriority, Role } from "@bug-tracking-system/types";

export const ISSUE_STATUSES: IssueStatus[] = [
    'not_started',
    'completed',
    'in_progress'
];

export const ISSUE_PRIORITIES: IssuePriority[] = [
    'low',
    'high',
    'medium'
];

export const ROLES: Role[] = [
    'admin',
    'developer',
    'tester'
];

export const ROLE_PERMISIONS: Record<Role, string[]> = {
    admin: ['manage_users', 'manage_projects', 'view_all'],
    developer: ['create_issue', 'update_issue', 'self_assign'],
    tester: ['create_issue', 'comment', 'change_status']
} 