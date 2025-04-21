import Link from "next/link"

export default function NotFoundPage() {
  return (
    
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f3f4f6',
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        maxWidth: '28rem',
        width: '100%'
      }}>
        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1rem'
        }}>404 - Page Not Found</h1>
        
        <p style={{
          color: '#4b5563',
          marginBottom: '1.5rem'
        }}>
          The page you are looking for does not exist or has been moved.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Link href="/" style={{
            display: 'block',
            width: '100%',
            backgroundColor: '#006400',
            color: 'white',
            fontWeight: '500',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            textAlign: 'center',
            textDecoration: 'none'
          }}>
            Go to Homepage
          </Link>
          
          <Link href="/help" style={{
            display: 'block',
            width: '100%',
            border: '1px solid #d1d5db',
            color: '#374151',
            fontWeight: '500',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            textAlign: 'center',
            textDecoration: 'none'
          }}>
            Get Help
          </Link>
        </div>
      </div>
    </div>
  )
}