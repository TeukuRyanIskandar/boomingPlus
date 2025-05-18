interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  color?: string;
  align?: 'left' | 'center' | 'right';
  font?: 'Geist' | 'Inter' ;
  fontSize?: string;
  fontWeight?: number;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  className = '',
  color = 'white',
  align = 'center',
  font = 'Geist',
  fontSize,
  fontWeight,
  children
}) => {
  const Component = variant;

  return (
    <Component
      style={{ color, textAlign: align, fontFamily: font, fontSize: fontSize, fontWeight: fontWeight }}
      className={className}
    >
      {children}
    </Component>
  );
};

export default Typography;