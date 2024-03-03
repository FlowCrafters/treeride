import type { FC, PropsWithChildren } from 'react'
import { useLayoutEffect } from 'react'
import { ArrowLeftIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@shared/kit/ui/button'

interface WidePaneProps extends PropsWithChildren {
  title: string
}

const WidePane: FC<WidePaneProps> = ({ title, children }) => {
  const navigate = useNavigate()

  useLayoutEffect(() => {
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    window.electron.ipcRenderer.send('wide', true)
    return () => {
      // eslint-disable-next-line ts/ban-ts-comment
      // @ts-expect-error
      window.electron.ipcRenderer.send('wide', false)
    }
  }, [])

  const handleGoBack = () => {
    navigate(-1)
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
        className="px-3 py-1"
      >
        {children}
      </div>
    </div>
  )
}

export { WidePane }
