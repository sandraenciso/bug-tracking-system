import * as z from 'zod';

export const IssueSchema = z.object({
    id: z.uuid(),
    title: z.string(),
    description: z.string(),
    project: z.uuid(),
    status: z.enum(['open', 'in_progress', 'closed']),
    priority: z.enum(['low','medium', 'high']),
    assignee: z.uuid(),
    reporter: z.uuid(),
});

export type Issue = z.infer<typeof IssueSchema>