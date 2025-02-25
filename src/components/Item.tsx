
import "../styles/global.css";

function ItemContainer({ children, isDark }: {isDark?: boolean, children: React.ReactNode }) {
  return (
    <div style={{
      backgroundColor: `${isDark ? 'var(--black-color)' : 'var(--white-color)'}`,
      color: `${isDark ? 'var(--white-color)' : 'var(--black-color)'}`,
      padding: '1rem 2rem',
      borderRadius: '4px',
      maxWidth: '300px',
    }}>
      {children}
    </div>
  )
}

export default function Item({
  isDark = false,
  href = false,
  children,
}: {
  isDark?: boolean;
  href?: false | string;
  children: React.ReactNode;
}) {
  return href ? (
    <a href={href}>
    <ItemContainer isDark={isDark}>
      {children}
    </ItemContainer>
   </a>
  ) : (
    <ItemContainer isDark={isDark}>
      {children}
    </ItemContainer>
  );
}
