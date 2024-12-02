import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SearchIcon } from 'lucide-react';

const searchSchema = z.object({
  keyword: z.string().min(1, 'Mot-clé requis')
});

type SearchFormData = z.infer<typeof searchSchema>;

interface SearchFormProps {
  onSubmit: (data: SearchFormData) => void;
}

export function SearchForm({ onSubmit }: SearchFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="keyword">Mot-clé</Label>
        <div className="flex gap-2">
          <Input
            id="keyword"
            {...register('keyword')}
            placeholder="Entrez votre mot-clé"
            className="flex-1"
          />
          <Button type="submit">
            <SearchIcon className="h-4 w-4 mr-2" />
            Rechercher
          </Button>
        </div>
        {errors.keyword && (
          <p className="text-sm text-red-500 mt-1">{errors.keyword.message}</p>
        )}
      </div>
    </form>
  );
}