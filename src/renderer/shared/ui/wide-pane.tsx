import type { FC, PropsWithChildren } from 'react'
import { useLayoutEffect } from 'react'
import { ArrowLeftIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@shared/kit/ui/button'
import { pathKeys } from '@shared/lib/react-router'
import { windowSizes } from '@shared/window/model/sizes'

interface WidePaneProps extends PropsWithChildren {
  title: string
}

const WidePane: FC<WidePaneProps> = ({ title, children }) => {
  const navigate = useNavigate()

  useLayoutEffect(() => {
    window.api.doInvoke('set-window-size', windowSizes.wide)
    return () => {
      window.api.doInvoke('set-window-size', windowSizes.default)
    }
  }, [])

  const handleGoBack = () => {
    navigate(pathKeys.main())
  }

  return (
    <div
      className="flex flex-col flex-1"
    >
      <div
        className="flex gap-3 p-3 items-center border-b border-solid"
      >
        <Button
          size="icon"
          variant="outline"
          onClick={handleGoBack}
        >
          <ArrowLeftIcon />
        </Button>
        <div
          className="text-2xl"
        >
          {title}
        </div>
      </div>
      <div
        className="px-3 flex-1"
      >
        {children}
      </div>
    </div>
  )
}

export { WidePane }
