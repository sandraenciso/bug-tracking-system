import * as z from "zod"; 

export const ProjectSchema = z.object({
    id: z.uuid(),
    name: z.string().min(3),
    description: z.string().optional(),
    ownerId: z.string(),

    status: z.enum(['active', 'archived']),

    createdAt: z.iso.datetime(),
    updatedAt: z.iso.datetime()
})

export type Project = z.infer<typeof ProjectSchema>;