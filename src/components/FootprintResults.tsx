import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, ExternalLink } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { CMSFootprint, FootprintResult } from '../types/cms';
import { buildGoogleSearchUrl } from '@/lib/utils/search';
import { SEARCH_CONFIG } from '@/lib/constants';

interface FootprintResultsProps {
  cms: CMSFootprint;
  result: FootprintResult;
}

export function FootprintResults({ cms, result }: FootprintResultsProps) {
  const { toast } = useToast();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: 'Copié !',
        description: 'La requête a été copiée dans le presse-papier.',
        duration: SEARCH_CONFIG.TOAST_DURATION,
      });
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Impossible de copier la requête',
        variant: 'destructive',
        duration: SEARCH_CONFIG.TOAST_DURATION,
      });
    }
  };

  const openInGoogle = (query: string) => {
    window.open(buildGoogleSearchUrl(query), '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="p-4 space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-1">{cms.name}</h3>
        <p className="text-sm text-muted-foreground">{cms.description}</p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <code className="flex-1 p-2 bg-muted rounded text-sm overflow-x-auto">{result.query}</code>
          <Button variant="outline" size="icon" onClick={() => copyToClipboard(result.query)}>
            <Copy className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => openInGoogle(result.query)}>
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-2">
          {result.footprints.map((footprint, index) => (
            <div key={index} className="flex items-center gap-2">
              <code className="flex-1 p-2 bg-muted rounded text-sm overflow-x-auto">{footprint}</code>
              <Button variant="outline" size="icon" onClick={() => copyToClipboard(footprint)}>
                <Copy className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => openInGoogle(footprint)}>
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}