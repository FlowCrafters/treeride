import type { FC } from 'react'

const HelloPage: FC = () => {
  return (
    <div
      className="h-full flex flex-col gap-4 items-center justify-center"
    >
      <div
        className="text-5xl"
      >
        TreeRide
      </div>
      <div>Open-Source multi-platform productivity boost tool</div>
    </div>
  )
}

export { HelloPage }
