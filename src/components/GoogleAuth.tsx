import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { Button } from '@/components/ui/button';

interface GoogleAuthProps {
  onSuccess: (token: string) => void;
  onError: (error: Error) => void;
}

export function GoogleAuth({ onSuccess, onError }: GoogleAuthProps) {
  const login = useGoogleLogin({
    onSuccess: (response) => onSuccess(response.access_token),
    onError: (error) => onError(error as Error),
    scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
  });

  return (
    <Button onClick={() => login()} className="w-full">
      Se connecter avec Google
    </Button>
  );
}