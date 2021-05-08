import React, { useContext, createContext } from 'react'

export const InjectionsContext = createContext<any>({})
export const useInjection = (injectionName?: string) => {
  const context = useContext(InjectionsContext)
  return injectionName ? context[injectionName] : context
}

type Props = {
  dependencies: any
}

export const InjectionsProvider: React.FC<Props> = ({
  dependencies,
  children,
}) => {
  return (
    <InjectionsContext.Provider value={dependencies}>
      {children}
    </InjectionsContext.Provider>
  )
}
