import type { FC, PropsWithChildren } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shared/kit/ui/card'
import { Separator } from '@shared/kit/ui/separator'

interface ConfigureBlockProps extends PropsWithChildren {
  title: string
  description: string
}

const ConfigureBlock: FC<ConfigureBlockProps> = ({ title, description, children }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Separator />
        <div
          className="mt-5 flex flex-col gap-2"
        >
          {children}
        </div>
      </CardContent>
    </Card>
  )
}

export { ConfigureBlock }
