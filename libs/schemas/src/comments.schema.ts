import * as z from 'zod';

export const CommentSchema = z.object({
    id: z.uuid(),
    issue: z.uuid(),
    comment: z.string(),
    author: z.uuid(),
    timeStamp: z.iso.datetime()
});

export type Comment = z.infer<typeof CommentSchema>