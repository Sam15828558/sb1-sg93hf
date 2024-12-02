import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  spreadsheetId: z.string().min(1, 'ID requis'),
  range: z.string().min(1, 'Plage requise'),
});

type FormData = z.infer<typeof formSchema>;

interface SheetFormProps {
  onSubmit: (data: FormData) => void;
}

export function SheetForm({ onSubmit }: SheetFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="spreadsheetId">ID Google Sheet</Label>
        <Input
          id="spreadsheetId"
          {...register('spreadsheetId')}
          placeholder="1234...abcd"
        />
        {errors.spreadsheetId && (
          <p className="text-sm text-red-500">{errors.spreadsheetId.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="range">Plage (ex: A1:A100)</Label>
        <Input
          id="range"
          {...register('range')}
          placeholder="A1:A100"
        />
        {errors.range && (
          <p className="text-sm text-red-500">{errors.range.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full">
        Générer le flux RSS
      </Button>
    </form>
  );
}