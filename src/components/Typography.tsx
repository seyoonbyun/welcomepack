// Typography 컴포넌트 - 레퍼런스 페이지와 동일한 스타일

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'body' | 'eyebrow' | 'caption'
  children: React.ReactNode
  className?: string
}

export function Typography({ variant, children, className = '' }: TypographyProps) {
  const baseStyles: Record<string, React.CSSProperties> = {
    h1: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: '72px',
      fontWeight: 400,
      lineHeight: '72px',
      color: 'rgb(255, 255, 255)',
      margin: '0 0 24px',
    },
    h2: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: '48px',
      fontWeight: 400,
      lineHeight: '48px',
      color: 'rgb(23, 23, 23)',
      margin: '0 0 16px',
    },
    h3: {
      fontFamily: 'Inter, "Open Sans", sans-serif',
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '24px',
      color: 'rgb(23, 23, 23)',
    },
    body: {
      fontFamily: 'Inter, "Open Sans", sans-serif',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '22.75px',
      color: 'rgb(102, 102, 102)',
    },
    eyebrow: {
      fontFamily: 'Inter, "Open Sans", sans-serif',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '20px',
      color: 'rgb(211, 18, 18)', // BNI 레드
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
    caption: {
      fontFamily: 'Inter, "Open Sans", sans-serif',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '18px',
      color: 'rgb(102, 102, 102)',
    },
  }

  const Tag = variant === 'h1' ? 'h1' : variant === 'h2' ? 'h2' : variant === 'h3' ? 'h3' : 'p'

  return (
    <Tag className={className} style={baseStyles[variant]}>
      {children}
    </Tag>
  )
}

