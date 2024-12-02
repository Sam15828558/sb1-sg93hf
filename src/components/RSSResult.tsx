import React from 'react';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

interface RSSResultProps {
  url: string;
}

export function RSSResult({ url }: RSSResultProps) {
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    toast({
      title: 'Copié',
      description: 'URL du flux RSS copiée dans le presse-papier',
    });
  };

  return (
    <Card className="p-6">
      <h2 className="font-semibold mb-2">Votre flux RSS</h2>
      <div className="flex items-center gap-2">
        <Input
          value={url}
          readOnly
          className="font-mono text-sm"
        />
        <Button
          variant="outline"
          size="icon"
          onClick={copyToClipboard}
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}