'use server';
/**
 * @fileOverview Generates design ideas for a project based on a brief description.
 *
 * - generateDesignIdeas - A function that takes a project description and returns AI-generated design ideas.
 * - GenerateDesignIdeasInput - The input type for the generateDesignIdeas function.
 * - GenerateDesignIdeasOutput - The return type for the generateDesignIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDesignIdeasInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A brief description of the project idea.'),
});
export type GenerateDesignIdeasInput = z.infer<typeof GenerateDesignIdeasInputSchema>;

const GenerateDesignIdeasOutputSchema = z.object({
  designIdeas: z.string().describe('AI-generated design ideas, including layout suggestions and feature recommendations.'),
});
export type GenerateDesignIdeasOutput = z.infer<typeof GenerateDesignIdeasOutputSchema>;

export async function generateDesignIdeas(input: GenerateDesignIdeasInput): Promise<GenerateDesignIdeasOutput> {
  return generateDesignIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDesignIdeasPrompt',
  input: {schema: GenerateDesignIdeasInputSchema},
  output: {schema: GenerateDesignIdeasOutputSchema},
  prompt: `You are a web design expert. A potential client has provided the following project description: {{{projectDescription}}}.  Generate design ideas for this project, including layout suggestions and feature recommendations.`,
});

const generateDesignIdeasFlow = ai.defineFlow(
  {
    name: 'generateDesignIdeasFlow',
    inputSchema: GenerateDesignIdeasInputSchema,
    outputSchema: GenerateDesignIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
