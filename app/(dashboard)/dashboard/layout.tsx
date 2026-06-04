export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard layout',
}

export default function DashboardLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="en">
      DASHBOARD HEADER
      <body>
        {children}
      </body>
    </html>
  )
}