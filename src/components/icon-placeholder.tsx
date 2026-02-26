import * as LucideIcons from "lucide-react"

type LucideIconComponent = React.FC<React.SVGProps<SVGSVGElement>>

const iconCache = LucideIcons as unknown as Record<string, LucideIconComponent>

export function IconPlaceholder({
  lucide,
  tabler: _t,
  hugeicons: _h,
  phosphor: _p,
  remixicon: _r,
  ...props
}: {
  lucide?: string
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
} & React.SVGProps<SVGSVGElement>) {
  if (!lucide) return null
  const Icon = iconCache[lucide]
  if (!Icon) return null
  return <Icon {...(props as any)} />
}
