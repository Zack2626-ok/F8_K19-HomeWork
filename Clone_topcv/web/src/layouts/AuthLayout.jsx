import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f4f5f5 0%, #e8f5e9 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '40px 16px'
    }}>
      {/* Decorative pattern */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        width: '120px',
        height: '300px',
        opacity: 0.15,
        background: `repeating-linear-gradient(
          45deg,
          #00b14f 0px,
          #00b14f 3px,
          transparent 3px,
          transparent 12px
        )`,
        borderRadius: '0 20px 20px 0'
      }} />

      <Outlet />

      <div style={{
        marginTop: 24,
        fontSize: 13,
        color: '#999'
      }}>
        © 2026. All Rights Reserved. TopCV Vietnam JSC.
      </div>
    </div>
  )
}

export default AuthLayout
