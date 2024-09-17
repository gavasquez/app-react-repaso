import { ReactNode } from 'react';

interface Props {
  children: ReactNode,
  isActive: boolean,
  onClick: (element?: string) => void,
}

export const CustomButton = ({children, isActive, onClick}: Props) => {

  return (
    <button disabled={isActive} className={`mt-2 btn btn-${isActive ? 'secundary' : 'primary'}`} onClick={() => onClick('New Element')}>{ isActive ? 'Cargando...' : children}</button>
  )
}