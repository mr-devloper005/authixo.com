'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { mockPressAssets, mockPressCoverage } from '@/data/mock-data'

export default function PressPage() {
  const { toast } = useToast()
  const [activeAssetId, setActiveAssetId] = useState<string | null>(null)
  const activeAsset = mockPressAssets.find((asset) => asset.id === activeAssetId)

  return (
    <PageShell
      eyebrow="Media"
      title="Press"
      description="Logotype, mark, and boilerplate for outlets covering this publication. Coverage list is sample data in the template."
      leadBand={
        <p>Primary mark lives at <code className="text-[#1a1412]">/favicon.png</code> and the larger square asset matches the home masthead.</p>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 border border-[#0a0a0a]/10 bg-white/30 p-5 sm:p-6">
          <h2 className="text-lg font-medium" style={{ fontFamily: 'var(--font-display)' }}>Press kit</h2>
            <p className="text-sm text-[#2a2220]">Downloads are simulated for the demo. Swap in real ZIPs and guidelines when you ship.</p>
            <div className="space-y-2">
              {mockPressAssets.map((asset) => (
                <div key={asset.id} className="border border-[#0a0a0a]/10 bg-[#e8e2dc]/80 px-4 py-3">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-medium text-[#0a0a0a]">{asset.title}</p>
                      <p className="text-xs text-[#3d3532]">{asset.description}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#0a0a0a]/50">{asset.fileType}</span>
                      <Button size="sm" variant="outline" className="border-[#0a0a0a]/20" onClick={() => setActiveAssetId(asset.id)}>
                        Preview
                      </Button>
                      <Button
                        size="sm"
                        className="bg-[#0a0a0a] text-white"
                        onClick={() =>
                          toast({
                            title: 'Download started',
                            description: `${asset.title} is downloading.`,
                          })
                        }
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
        <div className="space-y-0 border border-[#0a0a0a]/10">
          {mockPressCoverage.map((item) => (
            <div key={item.id} className="border-b border-[#0a0a0a]/8 p-5 last:border-b-0 sm:p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-[#0a0a0a]/50">{item.outlet}</div>
              <p className="mt-2 text-sm text-[#0a0a0a]">{item.headline}</p>
              <p className="mt-2 text-xs text-[#3d3532]">{item.date}</p>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(activeAsset)} onOpenChange={() => setActiveAssetId(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{activeAsset?.title}</DialogTitle>
          </DialogHeader>
          {activeAsset?.previewUrl && (
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-muted">
              <Image
                src={activeAsset.previewUrl}
                alt={activeAsset.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <p className="text-sm text-muted-foreground">{activeAsset?.description}</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setActiveAssetId(null)}>
              Close
            </Button>
            <Button
              onClick={() =>
                toast({
                  title: 'Download started',
                  description: `${activeAsset?.title} is downloading.`,
                })
              }
            >
              Download {activeAsset?.fileType}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageShell>
  )
}
