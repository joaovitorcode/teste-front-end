import './button.scss'

interface StyleProps {
  style: string
  children: string
}

export function Button({ style, children }: StyleProps) {
  return <button className={`button ${style}`}>{children}</button>
}
