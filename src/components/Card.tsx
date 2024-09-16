import { ReactNode } from 'react';

interface Props {
  children: ReactNode,
}

export const Card = ({ children }: Props) => {
  return (
      <div className="card" style={{
        width: '350px'
      }}>
          <div className="card-body">
            { children }
          </div>
      </div>
  );
};

interface CardBodyProps {
  title: string,
  text: string
}

export const CardBody = ({title, text}: CardBodyProps) => {
  return (
    <>
      <h5 className="card-title">{ title }</h5>
      <p className="card-text">{ text }</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </>
  )
}