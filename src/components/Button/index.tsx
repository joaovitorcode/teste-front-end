import './button.scss'

interface StyleProps {
  style: string
}

export function Button({ style }: StyleProps) {
  return <button className={`button ${style}`}>Confira</button>
}
