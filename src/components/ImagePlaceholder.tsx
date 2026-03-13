interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export const ImagePlaceholder = ({ label, aspectRatio = "16/9", className = "" }: ImagePlaceholderProps) => (
  <div
    className={`relative w-full rounded-xl border-2 border-dashed border-border bg-muted/30 flex items-center justify-center overflow-hidden ${className}`}
    style={{ aspectRatio }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
    <div className="text-center z-10 px-4">
      <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <p className="text-sm text-muted-foreground font-medium">{label}</p>
    </div>
  </div>
);
