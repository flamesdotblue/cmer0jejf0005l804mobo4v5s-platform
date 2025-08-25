import dynamic from 'next/dynamic'
import type { ComponentProps } from 'react'

const Spline = dynamic(() => import('@splinetool/react-spline').then(m => m.default), {
  ssr: false,
  loading: () => <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-base-900 via-base-800 to-base-900" />
})

export default function SplineScene(props: Partial<ComponentProps<any>>) {
  return (
    <div className="absolute inset-0 -z-10">
      <Spline scene="https://prod.spline.design/Od18UjFJmAz2ZSfC/scene.splinecode" {...props} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.25),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(129,140,248,0.2),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-base-900/40 via-base-900/10 to-base-900" />
    </div>
  )
}
