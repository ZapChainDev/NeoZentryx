'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Loader2, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  projectDescription: z.string().min(20, {
    message: 'Project description must be at least 20 characters.',
  }).max(1000, {
    message: 'Project description must not exceed 1000 characters.'
  }),
});

export type DesignIdeaFormValues = z.infer<typeof formSchema>;

export default function DesignIdeaForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<DesignIdeaFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectDescription: '',
    },
  });

  async function onSubmit(values: DesignIdeaFormValues) {
    setIsLoading(false);
    setError('AI design idea generation is currently unavailable.');
  }

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="projectDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">Project Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., A modern e-commerce site for handmade jewelry, focusing on visual appeal and easy navigation."
                    className="min-h-[150px] resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Ideas...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Get Design Ideas
              </>
            )}
          </Button>
        </form>
      </Form>

      {error && (
        <Card className="border-destructive bg-destructive/10">
          <CardHeader>
            <CardTitle className="text-destructive">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive-foreground">{error}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
